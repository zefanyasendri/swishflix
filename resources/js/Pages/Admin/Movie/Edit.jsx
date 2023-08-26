import React from 'react'
import Authenticated from '@/Layouts/Authenticated/Index'
import Input from '@/Components/TextInput'
import Label from '@/Components/InputLabel'
import Button from '@/Components/PrimaryButton'
import Checkbox from '@/Components/Checkbox';
import { Head, useForm } from '@inertiajs/react'
import InputError from '@/Components/InputError';
import { Inertia } from "@inertiajs/inertia";

export default function Create({auth, movie}) {
    const { data, setData, processing, errors } = useForm({
        ...movie,
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === "file" ? event.target.files[0] : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        if (data.thumbnail === movie.thumbnail) {
            delete data.thumbnail;
        }

        Inertia.post(route('admin.dashboard.movie.update', movie.id), {
            _method: "PUT",
            ...data
        });
    };

    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Update Movie" />
            <h1 className="text-xl">Update Movie : <i>{movie.name}</i></h1>
            <hr className="mb-4" />

            <form onSubmit={submit}>
                <Label forinput="name" value="Name" />
                <Input 
                    type="text"
                    name="name"
                    variant="primary-outline"
                    defaultValue={movie.name}
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
                    defaultValue={movie.category}
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
                    defaultValue={movie.video_url}
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
                <img src={`/storage/${movie.thumbnail}`} className='w-40' />
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
                    defaultValue={movie.rating}
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
                        checked={movie.is_featured}
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
