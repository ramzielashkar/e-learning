<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\Instructor;
use App\Models\User;
use App\Models\Course;
use Illuminate\Support\Facades\Auth;

class InstructorController extends Controller
{
  // function to enroll students in courses
  function enrollStudent(Request $request){
    Student::where('name', '=', $request->student)
    ->push('courses', array('coursename'=>$request->coursename));
  }

// function to get instructor assigned courses
function getCourses(){
  $instructor = Auth::user();
  $courses = Course::where('instructor','=', $instructor->name)->get();
  return response()->json([
    'courses'=>$courses
  ]);
}


}
