<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\Instructor;
use App\Models\User;
use App\Models\Course;
use Illuminate\Support\Facades\Auth;
class StudentController extends Controller
{
    // function to submit assignments
    function submitAssignment(Request $request){
      $course_name = $request->coursename;
      $submission = $request->submission;
      $assignment = $request->assignment;
      $user  =  Auth::user();
      $student_name = $user->name;
      $details = array(
        'assignment_name'=>$assignment,
        'submission'=>$submission,
        'course_name'=>$course_name,
      );
      $submission_details = array(
        'assignment_name'=>$assignment,
        'submission'=>$submission,
        'student_name'=>$student_name,
      );
      $student = Student::where('name','=', $student_name)
      ->push('submissions', array($details));

      $course = Course::where('name', '=', $course_name)
      ->push('submissions', array($submission_details));
    }

    // function to get submissions by course
    function getSubmitted($course_name){
      $submissions = Course::select('submissions')->where('name', '=', $course_name)->where('submissions.assignment_name', '=', 'assignment 1')->get();
      return response()->json([
        'result'=>$submissions
      ]);
    }

    // function to get all submissions

    function getAllSubmissions(){
      $user  =  Auth::user();
      $student_name = $user->name;
      $student = Student::select('submissions')->where('name','=', $student_name)->get();
      return response()->json([
        'result'=>$student
      ]);
    }

}
