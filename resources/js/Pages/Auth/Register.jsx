import React, { useEffect } from 'react'
import Label from '../../Components/InputLabel'
import Input from '../../Components/TextInput'
import PrimaryButton from '../../Components/PrimaryButton'
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';

export default function Register() {
    // data : menghasilkan return dari api (response)
    // setData : dari frontend, untuk mempersiapkan form data
    // post : untuk mengirim data ke api
    // processing : untuk mengecek apakah proses sedang berjalan
    // errors : untuk menampilkan error dari api
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value)
    }

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <React.Fragment>
            <Head title="Sign Up" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt="" />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/swishflix-white.svg" alt="" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3 text-yellow-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <Label
                                        forinput="fullname"
                                        value="Full Name"
                                    />
                                    <Input
                                        type="text" name="name"
                                        placeholder="Your fullname..." 
                                        value={data.name}
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                        required
                                    />

                                    <InputError message={errors.name} className="mt-2" />

                                </div>
                                <div>
                                    <Label
                                        forinput="email"
                                        value="Email Address"
                                    />
                                    <Input
                                        type="email" name="email"
                                        value={data.email}
                                        placeholder="Your Email Address" 
                                        handleChange={onHandleChange}
                                        required
                                    />

                                    <InputError message={errors.email} className="mt-2" />      

                                </div>
                                <div>
                                    <Label
                                        forinput="password"
                                        value="Password"
                                    />
                                    <Input
                                        type="password" name="password"
                                        value={data.password}
                                        placeholder="Your Password" 
                                        handleChange={onHandleChange}
                                        required
                                    />

                                    <InputError message={errors.password} className="mt-2" />
                                    
                                </div>
                                <div>
                                    <Label
                                        forinput="password"
                                        value="Confirm Password"
                                    />
                                    <Input
                                        type="password" name="password_confirmation"
                                        value={data.password_confirmation}
                                        placeholder="Your Password" 
                                        handleChange={onHandleChange}
                                        required
                                    />

                                    <InputError message={errors.password_confirmation} className="mt-2" />

                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <PrimaryButton type='submit' processing={processing}>
                                    <span className="text-base font-semibold">
                                        Sign Up
                                    </span>
                                </PrimaryButton>

                                <Link href={route('login')}>
                                    <PrimaryButton variant='light-outline'>
                                        <span className="text-base text-white">
                                            Sign In to My Account
                                        </span>
                                    </PrimaryButton>
                                </Link>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
