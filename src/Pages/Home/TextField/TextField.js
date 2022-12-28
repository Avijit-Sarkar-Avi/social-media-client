import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const TextField = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [data, setData] = useState('');
    console.log(data)

    return (
        <div className='hero mx-auto md:mt-10 mb-10 bg-base-200 p-5 w-72 md:w-1/2 '>
            <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                <div>
                    <textarea
                        {...register('status', { required: 'Enter your text' })}
                        className="textarea textarea-bordered w-64 md:w-96" placeholder="What's on your mind?"></textarea>
                </div>
                <br />
                <div className='md:flex'>
                    <div>
                        <input type='file'
                            {...register('image', { required: 'Photo is required' })}
                        />
                        {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                    </div>
                    <br />
                    <button className="btn btn-sm btn-info"><input type="submit" value="Submit" /></button>
                </div>
            </form>
        </div>
    );
};

export default TextField;