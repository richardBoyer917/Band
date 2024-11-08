<?php

namespace App\Http\Controllers;

use App\Models\Participant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ParticipantController extends Controller
{
    public function index()
    {
        $participants = Participant::all();

        return response()->json($participants);
    }

    public function indexNum(Request $request)
    {
        $participantNum = $request->query('participantNum', null);
        if ($participantNum) {
            $participants = Participant::limit($participantNum)->get();
        }

        return response()->json($participants);
    }

    public function show($id)
    {
        $participant = Participant::find($id);

        if (!$participant) {
            return response()->json(['message' => 'participant not found'], 404);
        }

        return response()->json($participant);
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $data['image'] = $request->file('image')? $request->file('image')->store('uploads/participant','public'):'';
        try{
            $newParticipant = Participant::create($data);
            return response()->json([
                'message' => 'participant created successfully!',
                'participant' => $newParticipant
            ], 201);
        }catch (\Exception $e) {
            \Log::error('Error saving data: ' . $e->getMessage());
            return response()->json(['error' => 'Error saving data'], 400);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $participant = Participant::findOrFail($id);
            $data = $request->all();
            $data['image'] = $request->file('image')
                ? $request->file('image')->store('uploads/participant', 'public') // Adjust path as needed
                : $participant->image;

                if ($participant->image) {
                    \Storage::disk('public')->delete($participant->image);
                }
            $participant->update($data);

            return response()->json([
                'message' => 'Participant successfully updated!',
                'updatedParticipant' => $participant,
            ], 200);

        } catch (\Exception $e) {
            \Log::error('Error updating participant: ' . $e->getMessage());
            return response()->json(['error' => 'Error updating participant data'], 400);
        }
    }

    public function destroy($id)
    {
        try {
            $participant = Participant::findOrFail($id);
            if($participant->image){
                \Storage::disk('public')->delete($participant->image);
            }
            $participant->delete();

            $participants = Participant::all(); // Fetch all remaining participants
            return response()->json($participants, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error deleting review'], 400);
        }
    }

}
