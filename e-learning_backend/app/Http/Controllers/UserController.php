<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
class UserController extends Controller
{
  public function store(Request $request)
    {
      $user = User::where('name', '=', $request->name)->first();
      $user->type = $request->type;
      $user->save();
      return response()->json(["result" => "ok"], 201);
    }
}
