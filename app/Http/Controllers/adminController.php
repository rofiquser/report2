<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\AllAdminModel;
class adminController extends Controller
{

function adminLoginView(){
return view("adminLogin");
}

function adminLogin(Request $request){
$email=$request->email;
$password=$request->password;

 $result=AllAdminModel::query()->where("email",$email)->where("password",$password)->count();
 $name=$result['name'];
//  return $result;

 if($result==1){
 $request->session()->put('AdminSession',$email);
 $request->session()->put('name',$name);

 return "1";
 }
 else{
 return "0";
 }


}

   function onLogOut(Request $request){
   $request->session()->flash("AdminSession");
   return redirect("/loginView");
   }


   function AdminList(){
   $result=AllAdminModel::all();
   return $result;

   }
   function AdminDelete(Request $req){

   $id=$req->input("id");

   $result=AllAdminModel::query()->where('id','=',$id)->delete();
   return $result;
   }

   function AddAdmin(Request $req){
   $name=$req->input("name");

   $email=$req->input("email");
   $password=$req->input("password");
   $duplicate=AllAdminModel::query()->find("email","=",$email);
   if ($duplicate==1){
      return "3";
   }


   $result=AllAdminModel::query()->insert(
   [
   'name'=>$name,
   'email'=>$email,
   'password'=>$password,
       'status'=>0
   ]);
   if($result){
   return $result;
   }
   else{
   return false;
   }


   }

}
