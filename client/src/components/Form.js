import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const Form = () => {

    const navigate = useNavigate();
    const { name } = useParams();

    const [uname, setUname] = useState('');
    const [comment, setComment] = useState('');



    const loginCredentials = async (e) => {
        e.preventDefault();

        //Send Data to the Backend
        try {
            await axios.post(
                process.env.REACT_APP_SERVER_URL+`/${name}/add-comment`,
                {
                    name: uname,
                    comment: comment
                });

            navigate(`/article/${name}/`)
        } catch (error) {
            alert(error)
            console.log("Error==> ", error)
        }

        setUname('');
        setComment('');
    }


    return (
        <>
            <div className='feedback-form bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full'>
                <div className="container">
                    <div className="row">
                        <form onSubmit={loginCredentials} className="w-full">
                            <h1 className='font-bold sm:text-4xl text-2xl mb-4'>Feedback Form</h1>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    Username
                                </label>
                                <input value={uname} onChange={(e) => setUname(e.target.value)} name="uname"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username" type="text" placeholder="Username" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="textarea">
                                    Message
                                </label>
                                <textarea name="textarea" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Enter your feedback"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    cols="30" rows="3" />
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form