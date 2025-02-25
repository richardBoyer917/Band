<?php

namespace App\Http\Controllers;

use App\Models\Three;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ThreeController extends Controller
{
    public function index()
    {
        $threes = Three::all();
        return response()->json($threes);
    }

    public function show($id)
    {
        $three = Three::find($id);

        if (!$three) {
            return response()->json(['message' => 'Three not found'], 404);
        }

        return response()->json($three);
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $data['video'] = $request->file('video')? $request->file('video')->store('uploads/three','public'):'';
        try{
            $newThree = Three::create($data);
            return response()->json([
                'message' => 'Three created successfully!',
                'Three' => $newThree
            ], 201);
        }catch (\Exception $e) {
            \Log::error('Error saving data: ' . $e->getMessage());
            return response()->json(['error' => 'Error saving data'], 400);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $three = Three::findOrFail($id);

            $data = $request->all();
            $data['video'] = $request->file('video')
                ? $request->file('video')->store('uploads/three', 'public') // Adjust path as needed
                : $three->video;

                if ($three->video) {
                    \Storage::disk('public')->delete($three->video);
                }
            $three->update($data);

            return response()->json([
                'message' => 'three successfully updated!',
                'updatedthree' => $three,
            ], 200);

        } catch (\Exception $e) {
            \Log::error('Error updating three: ' . $e->getMessage());
            return response()->json(['error' => 'Error updating three data'], 400);
        }
    }
    public function destroy($id)
    {
        try {
            $three = Three::findOrFail($id);
            if($three->video){
                \Storage::disk('public')->delete($three->video);
            }
            Blog::where('three_id', $id)->update(['three_id' => null]);
            $three->delete();

            $threes = Three::all(); 
            return response()->json($threes, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error deleting three'], 400);
        }
    }
}
