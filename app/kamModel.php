<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class kamModel extends Model
{
    public $table="kam_table";
    public $primaryKey="id";
    public $incrementing=true;
    public $keyType="int";
    public $timestamps=false;
}
