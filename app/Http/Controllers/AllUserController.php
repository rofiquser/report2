<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\AllUserModel;

class AllUserController extends Controller
{
   function UserList(){
          $result=AllUserModel::all();
          return $result;

          }
}
