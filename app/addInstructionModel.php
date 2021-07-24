<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class addInstructionModel extends Model
{
    public $table="addInstruction_table";
    public $primaryKey="id";
    public $incrementing=true;
    public $keyType="int";
    public $timestamps=false;
}
