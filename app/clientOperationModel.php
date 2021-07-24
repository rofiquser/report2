<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class clientOperationModel extends Model
{
    public $table="client_operation";
    public $primaryKey="id";
    public $incrementing=true;
    public $keyType="int";
    public $timestamps=false;
}
