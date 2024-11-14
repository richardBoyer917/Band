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
        'site_type',
        'equipment_type',
        'blog_type',
        'capacity',
        'address',
        'link_page',
        'video',
        'queue',
        'tags',
        'city',
    ];

    protected $casts = [
        'equipment_type' =>'array',
        'blog_type' => 'array',
        'site_type' => 'array',
        'tags' => 'array',
        'city' => 'array',
    ];

    public function blogs()
    {
        return $this->hasMany(Blog::class);
    }

}

