<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;

Route::group(["prefix"=> "v0.1"], function(){
  Route::group(["middleware" => "role.admin"], function(){
    Route::post("/addUser", [AdminController::class, "addUser"])->name("register-user");
    Route::get("/getUsers/{type}", [AdminController::class, "getUsers"])->name("get-users");

});
  Route::post("/login", [AuthController::class, "login"])->name("login-user");

  Route::get("/not_found", [AuthController::class, "notFound"])->name("not-found");

});
