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
        'capacity',
        'address',
        'link_page',
        'video',
        'queue',
        'tags',
    ];

    protected $casts = [
        'tags' => 'array',
    ];

    public function blogs()
    {
        return $this->hasMany(Blog::class);
    }

    public static function getTopSixSites()
    {
        return self::orderBy('queue', 'desc')
            ->limit(6)
            ->get(['video', 'name', 'type', 'capacity', 'address', 'link_page']);
    }

    public static function createSite(array $data)
    {
        if (isset($data['video']) && is_object($data['video'])) {
            $data['video'] = $data['video']->store('uploads/site', 'public'); // Adjust the path as needed
        }

        return self::create($data);
    }

    public static function updateSite(array $data, Site $existingSite)
    {
        if (isset($data['video']) && is_object($data['video'])) {
            if ($existingSite->video) {
                \Storage::disk('public')->delete($existingSite->video);
            }

            $data['video'] = $data['video']->store('uploads/site', 'public'); // Adjust the path as needed
        } else {
            $data['video'] = $existingSite->video;
        }
        return $existingSite->update($data);
    }

    public function deleteSite()
    {
        if ($this->video) {
            \Storage::disk('public')->delete($this->video);
        }
        return $this->delete();
    }
}

