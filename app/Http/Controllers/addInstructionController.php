<?php

namespace App\Http\Controllers;

use App\addInstructionModel;
use Illuminate\Http\Request;

class addInstructionController extends Controller
{
    public function addInstruction(Request $req){
        $Account=$req->input("Account");
        $OrderStatus=$req->input("OrderStatus");
        $DeliveredBy=$req->input("DeliveredBy");
       return $result=addInstructionModel::query()->insert([
              "Account"=>$Account,
            "OrderStatus"=>$OrderStatus,
            "DeliveredBy"=>$DeliveredBy


        ]);



    }

    public function AccountNumber(){

       $result= addInstructionModel::query()->get("Account");
       return $result;

    }
    public function OrderStatusList(){
        $result= addInstructionModel::query()->get("OrderStatus");
        return $result;
    }
    public function DeliveredList(){
        $result= addInstructionModel::query()->get("DeliveredBy");
        return $result; 
    }
}
