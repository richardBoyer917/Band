<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\ContactMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class ContactController extends Controller
{
    public function sendEmail(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'content' => 'required|string',
            'attachment' => 'nullable|file',
        ]);

        try {
            $attachment = $request->file('attachment');
            Mail::to('powjsnxngapaons@gmail.com')->send(new ContactMail(
                $request->name,
                $request->email,
                $request->content,
                $attachment
            ));
            
            return response()->json(['message' => 'Successfully sent!'], 200);
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error('Mail sending error:', ['error' => $e->getMessage()]);
            return response()->json(['error' => 'Email not sent', 'details' => $e->getMessage()], 500);
        }
    }
}
