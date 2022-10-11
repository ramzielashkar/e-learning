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

// function to create assignments
function addAssignment(Request $request){
  $course_name = $request->coursename;
  $assignment_details = $request->assignment_details;
  $assignment_name = $request->assignment_name;
  $assignment = array(
    'assignment_name'=>$assignment_name,
    'assignment_details'=>$assignment_details,
  );
  $course = Course::where('name', '=', $course_name)
  ->push('assignments', $assignment);
  return response()->json([
    'course'=>$course
  ]);
}

// function to add anouncements
function addAnouncement(Request $request){
  $course_name = $request->coursename;
  $anouncement = $request->anouncement;
  $course = Course::where('name', '=', $course_name)
  ->push('anouncements', array($anouncement));
}

// function to get assignments
function getAssignments($course_name){
  $assignments = Course::select('assignments')->where('name', '=', $course_name)->get();
  return response()->json([
    'assignments'=>$assignments
  ]);
}

// function to get anouncements
function getAnouncements($course_name){
  $anouncements = Course::select('anouncements')->where('name', '=', $course_name)->get();
  return response()->json([
    'anouncements'=>$anouncements
  ]);
}
// function to get Students or Instructors
function getStudents(){
  $users = User::where('type', 'student')->get();
  return
  response()->json([
    'users'=>$users,
  ]);
 }
 
}

    