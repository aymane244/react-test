<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\ValidationController;
use App\Models\User;

class UserController extends Controller
{
    public function create(Request $request){
        $language = $request->input('language');
        $validator_english = app(ValidationController::class)->validation_english($request);
        $validator_french = app(ValidationController::class)->validation_french($request);
        $validator_arabic = app(ValidationController::class)->validation_arabic($request);
        $user = new User();
        $user->first_name = $request->input('first_name');
        $user->last_name = $request->input('last_name');
        $user->email = $request->input('email');
        $user->phone = $request->input('phone');
        $user->adress = $request->input('adress');
        $user->password = $request->input('password');
        if($language === "en"){
            if($validator_english->fails()){
                return response()->json([
                    'status'=> 400,
                    'message_errors'=> $validator_english->messages()
                ]);
            }else{
                $user->save();
                return response()->json([
                    "status" => 200,
                    "message" => "You have been registred",
                ]);
            }
        }else if($language === "fr"){
            if($validator_french->fails()){
                return response()->json([
                    'status'=> 400,
                    'message_errors'=> $validator_french->messages()
                ]);
            }else{
                $user->save();
                return response()->json([
                    "status" => 200,
                    "message" => "Vous êtes bien inscrit",
                ]);
            }
        }else{
            if($validator_arabic->fails()){
                return response()->json([
                    'status'=> 400,
                    'message_errors'=> $validator_arabic->messages()
                ]);
            }else{
                $user->save();
                return response()->json([
                    "status" => 200,
                    "message" => "لقد تم التسجيل بنجاح",
                ]);
            }
        }
    }
}
