// feedback - bundled Reducers

import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// answers from each previous page
function Feedback() {
    // console.log('inside the Feedback page'); // test console.log

    const history = useHistory();
    const dispatch = useDispatch();

    const feelingsReducer = useSelector((store) => store.feelingsReducer);
    const understandingReducer = useSelector((store) => store.understandingReducer);
    const supportReducer = useSelector((store) => store.supportReducer);
    const commentsReducer = useSelector((store) => store.commentsReducer);

    // created for understandability in the return
    
    // bundle and POST to db
    const bundleAndPost = () => {
        const review = {
            feeling: feelingsReducer,
            understanding: understandingReducer,
            support: supportReducer,
            comments: commentsReducer
        };
        console.log('review:', review);
        axios.post('/feedback', review)
        .then((res) => {
            console.log('response', res);
            alert('Responses Submitted');
        }).catch((error) => {
            console.log('error', error);
            alert('There is a problem, please try again.');
        });
    }
    
    
    
    const handleSubmit = (event) => {
        event.preventDefault();

        bundleAndPost();
        history.push('/submitted');
    }
    
    

    return (
        <div>

            <h2>Your Responses:</h2>
            <p>Feeling: {feelingsReducer}</p>
            <p>Understanding: {understandingReducer}</p>
            <p>Support: {supportReducer}</p>
            <p>Comments: {commentsReducer}</p>
           

            <button className='button' onClick={ handleSubmit }>Submit Feedback</button>
        </div>
    );
}


export default Feedback;
