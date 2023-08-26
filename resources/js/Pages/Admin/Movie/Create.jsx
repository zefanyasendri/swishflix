import React from 'react'
import Authenticated from '@/Layouts/Authenticated/Index'
import Input from '@/Components/TextInput'
import Label from '@/Components/InputLabel'
import Button from '@/Components/PrimaryButton'
import Checkbox from '@/Components/Checkbox';
import { Head, useForm } from '@inertiajs/react'
import InputError from '@/Components/InputError';

export default function Create({auth}) {
    const { setData, post, processing, errors } = useForm({
        // yang akan dikirim ke Backend
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        is_featured: false,
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === "file" ? event.target.files[0] : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('admin.dashboard.movie.store'));
    };

    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Add Movie" />
            <h1 className="text-xl">Insert a new Movie</h1>
            <hr className="mb-4" />

            <form onSubmit={submit}>
                <Label forinput="name" value="Name" />
                <Input 
                    type="text"
                    name="name"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Insert movie name"
                    isError={errors.name}
                />
                <InputError message={errors.name} className="mt-2" />

                <Label forinput="category" value="Category" className="mt-4" />
                <Input 
                    type="text"
                    name="category"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Insert movie category"
                    isError={errors.category}
                />
                <InputError message={errors.category} className="mt-2" />

                <Label
                    forinput="video_url"
                    value="Video URL"
                    className="mt-4"
                />
                <Input
                    type="url"
                    name="video_url"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Insert movie video URL"
                    isError={errors.video_url}
                />
                <InputError message={errors.video_url} className="mt-2" />

                <Label
                    forInput="thumbnail"
                    value="Thumbnail"
                    className="mt-4"
                />
                <Input
                    type="file"
                    name="thumbnail"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Insert thumbnail of the movie"
                    isError={errors.thumbnail}
                />
                <InputError message={errors.thumbnail} className="mt-2" />

                <Label
                    forinput="rating"
                    value="Rating"
                    className="mt-4"
                />
                <Input
                    type="number"
                    name="rating"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Insert movie rating"
                    isError={errors.rating}
                />
                <InputError message={errors.rating} className="mt-2" />

                <div className="flex flex-row mt-4 items-center">
                    <Label forinput="is_featured" value="Is Featured" className='mt-1 mr-3' />
                    <Checkbox
                        name="is_featured"
                        handleChange={(e) => setData("is_featured", e.target.checked)}
                    />
                    <InputError message={errors.is_featured} className="mt-2" />
                </div>

                <Button
                    type="submit"
                    className="mt-4"
                    proceccing={processing}
                >
                    Save
                </Button>

            </form>
            
        </Authenticated>
    )
}
