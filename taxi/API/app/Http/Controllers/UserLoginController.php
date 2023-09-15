<?php

namespace App\Http\Controllers;

use App\Http\Controllers\ValidationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserLoginController extends Controller
{
    public function login(Request $request){
        $language = $request->input('language');
        $validator_english = app(ValidationController::class)->validation_english_login($request);
        $validator_french = app(ValidationController::class)->validation_french_login($request);
        $validator_arabic = app(ValidationController::class)->validation_arab_login($request);
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            Auth::user();
            $token = $request->user()->createToken('token_user')->plainTextToken;
            $success['token'] = $token;
            return response()->json([
                'status' => 'success',
                'data' => $success,
            ]);
        }
        if($language == "en"){
            if($validator_english->fails()){
                return response()->json([
                    'status' => 400,
                    'messages' => $validator_english->messages()
                ]);
            }else{
                return response()->json([
                    'status' => 401,
                    'message' => 'Access denied, please try again',
                ]);
            }
        }else if($language === "fr"){
            if($validator_french->fails()){
                return response()->json([
                    'status' => 400,
                    'messages' => $validator_french->messages()
                ]);
            }else{
                return response()->json([
                    'status' => 401,
                    'message' => 'Accèss non autorisé, veuillez réssayer',
                ]);
            }
        }else{
            if($validator_arabic->fails()){
                return response()->json([
                    'status' => 400,
                    'messages' => $validator_arabic->messages()
                ]);
            }else{
                return response()->json([
                    'status' => 401,
                    'message' => 'دخول غير مرخصة المرجو، المحاولة مرة أخرى',
                ]);
            }
        }
    }
    public function getUserData(){
        $user = Auth::user();
        return response()->json([
            'status' => 200,
            'user' => $user
        ]);
    }
    public function logout(Request $request){
        auth('web')->logout();
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            'status'=> 200,
        ]);
    }
}
