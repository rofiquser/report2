<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\kamModel;
class KamController extends Controller
{
public function AddKam(Request $req){
    $name=$req->input("name");
    $email=$req->input("email");
    $password=$req->input("password");
    $department=$req->input("department");
    $check=kamModel::query()->where('email','=',$email)->count();
    if ($check>0){
        return "0";
    }
    else{
        $result=kamModel::query()->insert([
            "name"=>$name,
            "email"=>$email,
            "password"=>$password,
            "department"=>$department
        ]);
        if ($result){
            return "1";
        }
    }



}

}
