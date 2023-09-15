<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;

class ContactController extends Controller
{
    public function save(Request $request){
        $today = Carbon::today();
        $validate = Validator::make($request->all(), [
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:225',
            'email' => 'required|email|unique:contacts|max:225',
            'adress' => 'required|string|max:225',
            'image' => 'nullable|mimes:jpeg,png,jpg,svg',
        ]);
        if ($validate->fails()) {
            return response()->json([
                'status' => 422,
                'errors_vald' => $validate->messages(),
            ]);
        }else{
            $contacts = new Contact;
            if ($request->hasFile('image')) {
                $file = $request->file('image');
                $filename = $file->getClientOriginalName();
                $finalName = date('His') . $filename;
                $request->file('image')->storeAs('images/', $finalName, 'public');
                $contacts->image = $finalName;
            }
            $contacts->firstname = $request->input('firstname');
            $contacts->lastname = $request->input('lastname');
            $contacts->email = $request->input('email');
            $contacts->adress = $request->input('adress');
            $contacts->created_at = $today;
            $contacts->updated_at = $today;
            $contacts->save();
            return response()->json([
                'status' => 200,
                'message' => 'Contact uploaded scuccefully'
            ]);
        }
    }
    public function show(){
        // $contacts = DB::table('contacts')->get();
        $contacts = Contact::all();
        // dd($contacts);
        return response()->json([
            'contacts' => $contacts
        ]);
    }
    public function edit($id){
        $contact = DB::table('contacts')->find($id);
        return response()->json([
            'contact' => $contact,
        ]);
    }
    public function update(Request $request, $id){
        $validate = Validator::make($request->all(), [
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:225',
            'email' => 'required|email|max:225',
            'adress' => 'required|string|max:225',
            // 'image' => 'nullable|mimes:jpeg,png,jpg,svg',
        ]);
        if ($validate->fails()) {
            return response()->json([
                'status' => 422,
                'errors_vald' => $validate->messages(),
            ]);
        }else{
            $today = Carbon::today();
            $contacts = Contact::find($id);
            if ($request->hasFile('image')) {
                File::delete(public_path("storage/images/".$contacts->image));
                $file = $request->file('image');
                $filename = $file->getClientOriginalName();
                $finalName = date('His') . $filename;
                $request->file('image')->storeAs('images/', $finalName, 'public');
                $contacts->image = $finalName;
            }
            $contacts->firstname = $request->input('firstname');
            $contacts->lastname = $request->input('lastname');
            $contacts->email = $request->input('email');
            $contacts->adress = $request->input('adress');
            $contacts->updated_at = $today;
            $contacts->update();
            return response()->json([
                'status' => 200,
                'message' => 'Contact updated scuccefully'
            ]);
        }
    }
    public function drop($id){
        $contact = Contact::find($id);
        if($contact){
            File::delete(public_path("storage/images/".$contact->image));
            DB::table('contacts')->delete($id);
        }
        return response()->json([
            'status' => 200,
            'message' => 'Contact deleted succefully'
        ]);
    }
}
