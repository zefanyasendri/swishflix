<?php

namespace App\Http\Requests\Admin\Movie;

use Illuminate\Foundation\Http\FormRequest;
use Auth;

class Store extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::user()->hasRole('admin');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|unique:movies,name',
            'category' => 'required',
            'video_url' => 'required|url',
            'thumbnail' => 'required|image|mimes:jpeg,jpg,png,bmp,gif,svg',
            'rating' => 'required|numeric|min:0|max:5',
            'is_featured' => 'nullable|boolean'
        ];
    }
}
