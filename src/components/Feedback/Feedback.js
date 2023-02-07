// feedback - bundled Reducers

import React from 'react';
import { useHistory } from 'react-router-dom';

// answers from each previous page
function Feedback() {
    // console.log('inside the Feedback page');
    const history = useHistory();
    const routeToSubmitted = () => {
        history.push('/submitted');
    }

    return (
        <div>

            <h2>Your Responses:</h2>

            <button className='button' onClick={ routeToSubmitted }>NEXT</button>
        </div>
    );
}


export default Feedback;
