<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Equipment extends Model
{
    use HasFactory;

    protected $table = 'equipments';
    
    protected $fillable = [
        'name',
        'type',
        'categoryType',
        'brand',
        'description',
        'manufacturer',
        'weight',
        'series',
        'dimension',
        'queue',
        'file',
        'images',
    ];

    protected $casts = [
        'dimension' => 'array',
        'images' => 'array',
    ];

    public function blogs()
    {
        return $this->belongsToMany(Blog::class,'blog_equipment');
    }

    public static function getByType($type, $limit)
    {
        return self::where('type', $type)
            ->orderBy('queue', 'desc')
            ->select('images', 'name', 'description')
            ->limit($limit)
            ->get();
    }
}
