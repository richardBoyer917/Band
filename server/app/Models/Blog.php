<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $table = 'blogs';

    protected $fillable = [
        'name',
        'type',
        'startDate',
        'endDate',
        'guests',
        'venue',
        'video',
        'images',
        'tags',
        'checkbox',
        'cities',
        'features',
        'queue',
        'solution',
        'three_id',
        'site_id',
        'checked',
    ];

    protected $casts = [
        'images' => 'array',
        'tags' => 'array',
        'checkbox' => 'array',
        'cities' => 'array',
        'solution' => 'array',
    ];

    public function site()
    {
        return $this->belongsTo(Site::class, 'site_id');
    }

    public function equipment()
    {
        return $this->belongsToMany(Equipment::class, 'blog_equipment');
    }

    public function three()
    {
        return $this->belongsTo(Three::class, 'three_id');
    }
}
