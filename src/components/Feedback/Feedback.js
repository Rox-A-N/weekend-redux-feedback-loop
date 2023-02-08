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
    const Review = {
        feeling: feelingsReducer,
        understanding: understandingReducer,
        support: supportReducer,
        comment: commentsReducer
    };

    // bundle and POST to db
    const bundleAndPost = () => {
        console.log('Review:', Review);
        axios.post('/router', Review)
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
        console.log('Review of submitted answers.');
        bundleAndPost();
        history.push('/submitted');
    }
    
    
    const routeToSubmitted = () => {
        history.push('/submitted');
    }

    return (
        <div>

            <h2>Your Responses:</h2>
            <p>Feeling: {Review.feeling}</p>
            <p>Understanding: {Review.understanding}</p>
            <p>Support: {Review.support}</p>
            <p>Comments: {Review.comment}</p>
           

            <button className='button' onClick={ handleSubmit }>Submit Feedback</button>
        </div>
    );
}


export default Feedback;
