<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;

Route::group(["prefix"=> "v0.1"], function(){
  Route::group(["middleware" => "role.admin"], function(){
    Route::post("/addUser", [AdminController::class, "addUser"])->name("register-user");
    Route::post("/addCourse", [AdminController::class, "addCourse"])->name("add-course");
    Route::get("/getUsers/{type}", [AdminController::class, "getUsers"])->name("get-users");
    Route::get("/getCourses", [AdminController::class, "getCourses"])->name("get-courses");
    Route::post("/assignCourse", [AdminController::class, "assignCourse"])->name("assign-course");

});
  Route::post("/login", [AuthController::class, "login"])->name("login-user");

  Route::get("/not_found", [AuthController::class, "notFound"])->name("not-found");

});
