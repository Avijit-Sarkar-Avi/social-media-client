import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const MediaCard = ({ mystatus }) => {

    const { status, image, userName, userImage } = mystatus;

    const { user } = useContext(AuthContext);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        const userName = user?.displayName;
        const userPicture = user?.photoURL

        const comments = {
            message, userName, userPicture
        }

        fetch('https://newserver-ten.vercel.app/mycomments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comments)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset();
                }
                toast.success('Comment Successfully')
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="card w-96 h-96 bg-blue-400 shadow-xl">
                <figure><img src={image} className='w-52 h-52' alt="Shoes" /></figure>
                <div className="card-body">
                    {/* <span className="avatar w-12">
                        <img src={userImage} alt="" />
                    </span> */}
                    <h2 className="card-title">{userName}</h2>
                    <p>{status}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-xs btn-primary">Read More</button>
                    </div>
                    <form onSubmit={handleReview}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Comment</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-12" placeholder="Comment" name='message'></textarea>
                        </div>
                        <br />
                        <div className="card-actions justify-end">
                            <button className="btn btn-xs btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default MediaCard;