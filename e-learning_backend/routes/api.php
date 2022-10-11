<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\InstructorController;
use App\Http\Controllers\StudentController;


Route::group(["prefix"=> "v0.1"], function(){
  Route::group(["middleware" => "auth:api"], function(){
    Route::group(["middleware" => "role.admin"], function(){
      Route::post("/addUser", [AdminController::class, "addUser"])->name("register-user");
      Route::post("/addCourse", [AdminController::class, "addCourse"])->name("add-course");
      Route::get("/getUsers/{type}", [AdminController::class, "getUsers"])->name("get-users");
      Route::get("/getCourses/{assigned?}", [AdminController::class, "getCourses"])->name("get-courses");
      Route::post("/assignCourse", [AdminController::class, "assignCourse"])->name("assign-course");

  });
  Route::group(["middleware" => "role.instructor"], function(){
    Route::get("/getStudent", [InstructorController::class, "getStudents"])->name("get-users");
    Route::post("/enrollStudent", [InstructorController::class, "enrollStudent"])->name("enroll-student");
    Route::post("/addAssignment", [InstructorController::class, "addAssignment"])->name("add-assignment");
    Route::post("/addAnouncement", [InstructorController::class, "addAnouncement"])->name("add-anouncement");
    Route::get("/getInstructorCourses", [InstructorController::class, "getCourses"])->name("get-courses");
    Route::get("/getAssignments/", [InstructorController::class, "getAssignments"])->name("get-assignments");
    Route::get("/getAnouncements/", [InstructorController::class, "getAnouncements"])->name("get-anouncements");

    });
    Route::group(["middleware" => "role.student"], function(){
      Route::get("/getAssignments/{course_name}", [InstructorController::class, "getAssignments"])->name("get-assignments");
      Route::get("/getAnouncements/{course_name}", [InstructorController::class, "getAnouncements"])->name("get-anouncements");
      Route::post("/submitAssignment", [StudentController::class, "submitAssignment"])->name("submit-assignment");
      Route::get("/getSubmitted/{course_name}", [StudentController::class, "getSubmitted"])->name("get-submissions");
      Route::get("/getAllSubmissions/", [StudentController::class, "getAllSubmissions"])->name("get-all-submissions");
    });
});
  Route::post("/login", [AuthController::class, "login"])->name("login-user");
  Route::get("/not_found", [AuthController::class, "notFound"])->name("not-found");

});
