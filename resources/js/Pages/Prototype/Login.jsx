import React from 'react'
import Input from '../../Components/TextInput'
import Label from '../../Components/InputLabel'
import PrimaryButton from '../../Components/PrimaryButton'
import { Link, Head } from '@inertiajs/react'

export default function Login() {
    return (
        <React.Fragment>
            <Head title="Login" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt=""/>
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        {/* <img src="/images/moonton-white.svg" alt=""/> */}
                        <img src="/images/swishflix-white.svg" alt=""/>

                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3 text-yellow-3">
                                Welcome Back!
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Discover new movies and create <br/>
                                an account for an exciting experience!
                            </p>
                        </div>
                        <form className="w-[370px]">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <Label 
                                        forinput="email"
                                        value="Email Address"
                                    />
                                    <Input 
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                    />
                                </div>
                                <div>
                                    <Label 
                                        forinput="password"
                                        value="Password"
                                    />
                                    <Input 
                                        type="password" name="password"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <Link href={route('prototype.dashboard')}>
                                    <PrimaryButton type="button" variant="primary">
                                        <span className="text-base font-semibold">
                                            Start Watching
                                        </span>
                                    </PrimaryButton>
                                </Link>
                                
                                <Link href={route('prototype.register')}>
                                    <PrimaryButton
                                        type="button"
                                        variant="light-outline"
                                    >
                                        <span className="text-base text-white">
                                            Create New Account
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
