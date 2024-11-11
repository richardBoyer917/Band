<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactMail extends Mailable
{
    use Queueable, SerializesModels;

    public $name;
    public $email;
    public $content;
    public $attachment;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $email, $content, $attachment = null)
    {
        $this->name = $name;
        $this->email = $email;
        $this->content = $content;
        $this->attachment = $attachment;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $email = $this->from(config('mail.from.address'), config('mail.from.name'))
            ->subject('New Contact')
            ->view('emails.contact')
            ->with([
                'name' => $this->name,
                'email' => $this->email,
                'content' => $this->content,
            ]);

        // Attach file if it exists
        if ($this->attachment) {
            $email->attach($this->attachment->getPathname(), [
                'as' => $this->attachment->getClientOriginalName(),
            ]);
        }

        return $email;
    }
}
