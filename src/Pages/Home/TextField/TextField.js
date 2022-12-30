import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const TextField = () => {

    const { user } = useContext(AuthContext);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey)


    const handleStatus = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const mystatus = {
                        status: data.status,
                        image: imgData.data.url,
                        userName: user?.displayName,
                        userImage: user?.photoURL
                    }

                    fetch('https://newserver-ten.vercel.app/mystatus', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(mystatus)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`Status Successfully added`)
                            // navigate('/dashboard/myProducts')
                        })

                }
            })
    }


    return (
        <div className='hero mx-auto md:mt-10 mb-10 bg-base-200 p-5 w-72 md:w-1/2 '>
            <form onSubmit={handleSubmit(handleStatus)}>
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