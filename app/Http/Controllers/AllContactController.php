<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\AllContactModel;
class AllContactController extends Controller
{
    function ContactList(){
       $result=AllContactModel::all();
       return $result;

       }
}
