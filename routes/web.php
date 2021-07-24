<?php

use Illuminate\Support\Facades\Route;

Route::get('/adminList', 'adminController@AdminList')->middleware("LoginCheck");

Route::get('/ContactList', 'AllContactController@ContactList')->middleware("LoginCheck");

Route::get('/UserList', 'AllUserController@UserList')->middleware("LoginCheck");

Route::post('/AdminDelete', 'adminController@AdminDelete')->middleware("LoginCheck");

Route::get('/loginView', 'adminController@adminLoginView');

Route::get('/adminLogin/{email}/{password}', 'adminController@adminLogin');

Route::get('/logout', 'adminController@onLogOut');

// add Admin route
Route::post('/add-admin', 'adminController@AddAdmin')->middleware("LoginCheck");

// add email route

Route::post('/add-email', 'AllEmailController@AddEmail')->middleware("LoginCheck");
// add file route

Route::post('/add-file', 'AllEmailController@import')->middleware("LoginCheck");

//report project route

Route::post('/add-details',"clientOperationController@clientOperation");

Route::get('/order-information',"clientOperationController@OrderInformation");
Route::post('/add-kam',"KamController@AddKam");

Route::post('/add-instruction',"addInstructionController@addInstruction");

Route::get('/account-number-show',"addInstructionController@AccountNumber");
// /order-status-list
Route::get('/order-status-list',"addInstructionController@OrderStatusList");
// delivered-list 

Route::get('/delivered-list ',"addInstructionController@DeliveredList");

Route::get('/', function () {
    return view('index');
})->middleware("LoginCheck");
Route::get('{anyRoute}', function () {
    return view('index');
})->where('anyRoute','.*')->middleware("LoginCheck");

