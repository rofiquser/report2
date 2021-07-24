<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\AllContactModel;
class AllEmailController extends Controller
{
    function addEmail(Request $req){
      $email=$req->email;
      $result=AllContactModel::insert(["email"=>$email]);
      return $result;

    }
    function import(Request $req){
        $file=$req->file;
        return $file;
//        $result=AllContactModel::insert(["email"=>$email]);
//        return $result;

    }


}
