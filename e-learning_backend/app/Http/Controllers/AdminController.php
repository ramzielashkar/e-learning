<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\Instructor;
use App\Models\User;
use App\Models\Course;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
class AdminController extends Controller
{
  // function to add users
  public function addUser(Request $request)
    {
      $request->validate([
     'name' => 'required|string|max:255',
     'email' => 'required|string|email|max:255|unique:users',
     'password' => 'required|string|min:6',
     ]);
     $user = User::create([
         'name' => $request->name,
         'email' => $request->email,
         'password' => Hash::make($request->password),
         'type'=>$request->type,
     ]);
     if($request->type == 'student'){
       $student = Student::create([
         'name' => $request->name,
       ]);
     }
     else if($request->type == 'instructor'){
       $instructor = Instructor::create([
         'name' => $request->name,
       ]);
     }

     return response()->json([
       'user'=>$user,
     ]);
    }

    // function to get Students or Instructors
    function getUsers($type){
      $users = User::where('type', $type)->get();
      return
      response()->json([
        'users'=>$users,
      ]);
     }

     // function to add Courses
     function addCourse(Request $request){
      $name = $request->name;
      $course = Course::create([
        'name'=>$name
      ]);
      return response()->json([
        'course'=>$course,
      ]);
     }

     // function to get all courses
     function getCourses(){
       $courses = Course::get();
       return response()->json([
         'courses'=>$courses,
       ]);
     }
}
