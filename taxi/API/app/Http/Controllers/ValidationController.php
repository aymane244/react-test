<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ValidationController extends Controller
{
    public function validation_english(Request $request){
        return Validator::make($request->all(),[
            'first_name' => 'required|string|max:50',
            'last_name' => 'required|string|max:50',
            'email' => 'required|email|unique:users|max:50',
            'phone' => 'required|string|max:20',
            'adress' => 'required|string|max:500',
            'password' => 'required|confirmed|min:8',
        ]);
    }
    public function validation_french(Request $request){
        return Validator::make($request->all(),[
            'first_name' => 'required|string|max:50',
            'last_name' => 'required|string|max:50',
            'email' => 'required|email|unique:users|max:50',
            'phone' => 'required|string|max:20',
            'adress' => 'required|string|max:500',
            'password' => 'required|confirmed|min:8',
        ],[
            'first_name.required' => 'Le champs Prénom est obligatoire',
            'first_name.max' => 'Le champs Prénom ne doit pas dépasser 50 caractères',
            'last_name.required' => 'Le champs Nom est obligatoire',
            'last_name.max' => 'Le champs Nom ne doit pas dépasser 50 caractères',
            'email.required' => 'Le champs Email est obligatoire',
            'email.max' => 'Le champs Email ne doit pas dépasser 50 caractères',
            'email.unique' => 'Cet email existe déjà',
            'phone.required' => 'Le champs N° de téléphone est obligatoire',
            'phone.max' => 'Le champs N° de téléphone ne doit pas dépasser 20 caractères',
            'adress.required' => 'Le champs Adresse est obligatoire',
            'adress.max' => 'Le champs Adresse ne doit pas dépasser 500 caractères',
            'password.required' => 'Le champs mot de passe est obligatoire',
            'password.confirmed' => 'La confirmation du mot de passe ne correspond pas au mot de passe saisi',
            'password.min' => 'Le mot de passe doit comporter au moins 8 caractères',
        ]);
    }
    public function validation_arabic(Request $request){
        return Validator::make($request->all(),[
            'first_name' => 'required|string|max:50',
            'last_name' => 'required|string|max:50',
            'email' => 'required|email|unique:users|max:50',
            'phone' => 'required|string|max:20',
            'adress' => 'required|string|max:500',
            'password' => 'required|confirmed|min:8',
        ],[
            'first_name.required' => 'حقل الاسم الشخصي إلزامي',
            'first_name.max' => 'يجب ألا يتجاوز حقل الاسم الشخصي 50 حرفًا',
            'last_name.required' => 'حقل الاسم العائلي إلزامي',
            'last_name.max' => 'يجب ألا يتجاوز حقل الاسم العائلي 50 حرفًا',
            'email.required' => 'حقل البريد الإلكتروني إلزامي',
            'email.max' => 'يجب ألا يتجاوز حقل البريد الإلكتروني 50 حرفًا',
            'email.unique' => 'هذا البريد الإلكتروني موجود بالفعل',
            'phone.required' => 'حقل رقم الهاتف إلزامي',
            'phone.max' => 'يجب ألا تتجاوز حقل رقم الهاتف 20 أحرف',
            'adress.required' => 'حقل العنوان إلزامي',
            'adress.max' => 'يجب ألا يتجاوز حقل العنوان 500 حرف',
            'password.required' => 'حقل كلمة المرور إلزامي',
            'password.confirmed' => 'لا يتوافق تأكيد كلمة المرور مع كلمة المرور التي تم إدخالها',
            'password.min' => 'يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل',
        ]);
    }
    public function validation_english_login(Request $request){
        return Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required',
        ]);
    }
    public function validation_french_login(Request $request){
        return Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required',
        ],[
            'email.required'=> 'Le champs adresse email est obligatoire',
            'password.required'=> 'Le champs mot de passe est obligatoire'
        ]);
    }
    public function validation_arab_login(Request $request){
        return Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required',
        ],[
            'email.required'=> 'حقل عنوان البريد الإلكتروني إلزامي',
            'password.required'=> 'حقل كلمة المرور إلزامي'
        ]);
    }
}
