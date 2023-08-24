<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\Movie;

class MovieController extends Controller
{
    public function show(Movie $movie)
    {
        return inertia('User/Dashboard/Movie/show', [
            'movie' => $movie
        ]);
    }
}
