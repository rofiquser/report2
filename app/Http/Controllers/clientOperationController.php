<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\clientOperationModel;
class clientOperationController extends Controller
{

public function clientOperation(Request $req){
    $Response=$req->input("Response");
    $Inc_Date=$req->input("Inc_Date");
    $Account=$req->input("Account");
    $Amount=$req->input("Amount");
    $Tips=$req->input("Tips");
    $Percentage=$req->input("Percentage");
    $ChargesFiverr=$req->input("ChargesFiverr");
    $ClientUserId=$req->input("ClientUserId");
    $ClientName=$req->input("ClientName");
    $EmailAddress=$req->input("EmailAddress");
    $ClientLinkedIn=$req->input("ClientLinkedIn");
    $OrderPageURL=$req->input("OrderPageURL");
    $Remarks=$req->input("Remarks");
    $SpreadsheetLink=$req->input("SpreadsheetLink");
    $Allocation=$req->input("Allocation");
    $OrderStatus=$req->input("OrderStatus");
    $Delivered_By=$req->input("Delivered_By");
    $DeliDate=$req->input("DeliDate");
    $DeliAmount=$req->input("DeliAmount");
    $DeliLastTime=$req->input("DeliLastTime");

    $result=clientOperationModel::query()->insert([
        "Response"=>$Response,
        "Inc_Date"=>$Inc_Date,
        "Account"=>$Account,
        "Amount"=>$Amount,
        "Tips"=>$Tips,
        "Percentage"=>$Percentage,
        "ChargesFiverr"=>$ChargesFiverr,
        "ClientUserId"=>$ClientUserId,
        "ClientName"=>$ClientName,
        "EmailAddress"=>$EmailAddress,
        "ClientLinkedIn"=>$ClientLinkedIn,
        "OrderPageURL"=>$OrderPageURL,
        "Remarks"=>$Remarks,
        "SpreadsheetLink"=>$SpreadsheetLink,
        "Allocation"=>$Allocation,
        "OrderStatus"=>$OrderStatus,
        "Delivered_By"=>$Delivered_By,
        "DeliDate"=>$DeliDate,
        "DeliAmount"=>$DeliAmount,
        "DeliLastTime"=>$DeliLastTime
    ]);
    if ($result){
        return $result;
    }


}


        public function OrderInformation(){
            return clientOperationModel::all();
        }


//        add user instruction function


}
