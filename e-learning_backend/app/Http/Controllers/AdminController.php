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
      $image = $request->base64;
      $name = $request->coursename;
      $base64Image = explode(";base64,", $image);
      $explodeImage = explode("image/", $base64Image[0]);
      $imageType = $explodeImage[1];
      $image_base64 = base64_decode($base64Image[1]);
      $imageName = $name.'.'.'png';
      file_put_contents(public_path().'/'.$imageName, $image_base64);
      //$imagetoDb = 'http://127.0.0.1:8000/'.$imageName;
      $course = Course::create([
        'name'=>$name,
        'image'=>$imageName,
        'assigned'=>'false'
      ]);
      return response()->json([
        'course'=>$course,
      ]);
     }

     // function to get all courses
     function getCourses($assigned=null){
      if(!$assigned){
       $courses = Course::where('assigned', 'false')->get();
       return response()->json([
         'courses'=>$courses,
       ]);
      }
      $courses = Course::where('assigned', 'true')->get();
       return response()->json([
         'courses'=>$courses,
       ]);

     }

     // function to assign courses to instructors
     function assignCourse(Request $request){
       Instructor::where('name', '=', $request->instructor)
       ->push('courses', array('coursename'=>$request->coursename));
       $course = array(
         'assigned'=>"true",
         'instructor'=>$request->instructor,
       );
       Course::where('name', '=', $request->coursename)->update($course);
       return $course;
     }
}
