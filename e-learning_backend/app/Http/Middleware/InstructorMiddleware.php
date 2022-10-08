<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InstructorMiddleware
{

    public function handle(Request $request, Closure $next)
    {
      $user = Auth::user();
      if($user->type=="instructor"){
        return $next($request);
      }
       return redirect(route("not-found"));
    }
}
