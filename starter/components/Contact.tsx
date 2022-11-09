import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs ={
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {}

function Contact({}: Props) {
    const { 
        register, 
        handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => (
        window.location.href = `mailto:jasonmadruga25@gmail.com?subject=${formData.subject}&
        body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    
    );
 
 
    return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-cyan-400 text-2xl '>
            Contact
        </h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'> I have what you need. {''} 
                <span className='decoration-[#F7AB0A]/50 
                underline'>Lets Talk.</span>
            
            </h4>
            <div>
                <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='h-7 w-7 animate-pulse text-cyan-400'/>
                <p className='text-2xl'>+1234567896</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='h-7 w-7 animate-pulse text-cyan-400'/>
                    <p className=' text-2xl'>jasonmadruga25@gmail.com</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='h-7 w-7 animate-pulse text-cyan-400'/>
                    <p>1010 wow lane</p>
                </div>
            </div>

        <form onSubmit={handleSubmit(onSubmit)} 
        className='flex flex-col space-y-2 w-fit mx-auto'>

            <div className='flex space-x-2'>
                <input 
                {...register('name')} 
                placeholder='Name'
                className='contactInput' 
                type="text" />

                <input 
                {...register('email')} 
                placeholder='Email' 
                className='contactInput' 
                type="email" />

            </div>

            <input 
            {...register ('subject')} 
            placeholder='Subject' 
            className='contactInput'
            type='text' />

            <textarea 
            {...register ('message')}
             placeholder='Message' 
             className='contactInput'
             />

            <button id='submit' className='heroButton'>Submit</button>
        </form>

        </div>
    </div>
  )
}

export default Contact