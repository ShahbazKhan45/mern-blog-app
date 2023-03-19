import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


const FeedbackData = () => {
    const [feedback, setFeedback] = useState([]);
    const { name } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        axios.get(process.env.REACT_APP_SERVER_URL+`/${name}/`).then((res) => {
            setFeedback(res.data)
        })
    }, [])

    return (
        <>
            <div className="content py-5">
                <h2 className='font-bold sm:text-4xl text-2xl mb-4'>Client's Feedback</h2>
                {
                    feedback.map((data, index) => {
                        return (
                            <div className="data--wraper" key={index}>
                                <p className='font-medium text-xl mb-4'>Name: {data.name}</p>
                                <p className='font-medium text-xl mb-4'>Comment: {data.comment}</p>
                            </div>
                        )
                    })
                }
                <br/>
                <button onClick={() => navigate(`/article/${name}/add-comment`)} class="my-5 mx-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Add Feedback
                </button>
            </div>
        </>
    )
}

export default FeedbackData