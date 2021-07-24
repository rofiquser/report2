<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AllEmailModel extends Model
{
    public $table="email_validation";
    public $primaryKey="id";
    public $incrementing=true;
    public $keyType="int";
    public $timestamps=false;
}
