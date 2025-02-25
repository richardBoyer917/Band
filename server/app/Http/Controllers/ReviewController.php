<?php

namespace App\Http\Controllers;

use App\Models\Review; // Assuming your model is named Review
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function createReview(Request $request)
    {
        $data = $request->all();
        $data['file'] = $request->file('files') 
            ? $request->file('files')->store('uploads/review', 'public') 
            : '';

        try {
            $newReview = Review::create($data); 
            return response()->json(['message' => 'Successfully saved!'], 200);
        } catch (\Exception $e) {
            \Log::error('Error saving data: ' . $e->getMessage());
            return response()->json(['error' => 'Error saving data'], 400);
        }
    }

    public function updateReview(Request $request, $id)
    {
        try {
            $existingReview = Review::findOrFail($id);

            $data = $request->all();
            $data['file'] = $request->file('files')
                ? $request->file('files')->store('uploads/review', 'public') 
                : $existingReview->file;

                if ($existingReview->file) {
                    \Storage::disk('public')->delete($existingReview->file);
                }
            $existingReview->update($data);

            return response()->json([
                'message' => 'Review successfully updated!',
                'updatedReview' => $existingReview,
            ], 200);

        } catch (\Exception $e) {
            \Log::error('Error updating review: ' . $e->getMessage());
            return response()->json(['error' => 'Error updating review data'], 400);
        }
    }

    public function getReviews()
    {
        try {
            $reviews = Review::orderBy('queue', 'desc')->get();
            return response()->json($reviews, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error fetching data'], 400);
        }
    }

    public function getReviewsByType(Request $request)
    {
        $reviewType = $request->query('reviewType');
        try {
            $reviews = Review::whereJsonContains('displayType', $reviewType)
                ->orderBy('queue', 'desc')
                ->get();

            return response()->json($reviews, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error fetching data'], 400);
        }
    }

    public function getReviewById($reviewId)
    {
        try {
            $review = Review::findOrFail($reviewId);
            return response()->json($review, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Review not found'], 404);
        }
    }

    public function deleteReview($reviewId)
    {
        try {
            $review = Review::findOrFail($reviewId);
            if($review->file){
                \Storage::disk('public')->delete($review->file);
            }
            $review->delete();

            $reviews = Review::all(); 
            return response()->json($reviews, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error deleting review'], 400);
        }
    }
}
