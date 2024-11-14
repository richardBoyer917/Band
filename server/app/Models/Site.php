<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Site extends Model
{
    use HasFactory;

    protected $table = 'sites';

    protected $fillable = [
        'name',
        'type',
        'type_equipment',
        'capacity',
        'address',
        'link_page',
        'video',
        'queue',
        'tags',
    ];

    protected $casts = [
        'type_equipment' =>'array',
        'tags' => 'array',
    ];

    public function blogs()
    {
        return $this->hasMany(Blog::class);
    }

}

