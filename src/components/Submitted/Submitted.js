// submit for database
import React from 'react';
import { useHistory } from 'react-router-dom';

// answers from each previous page
function Submitted() {
    // console.log('inside the Feedback page');
    const history = useHistory();
    const routeToFeelings = () => {
        history.push('/');
    }

    return (
        <div>
            <h2>Thank You for your Response!</h2>
            <p>To submit another response click NEXT</p>

            <button className='button' onClick={ routeToFeelings }>NEXT</button>
           
        </div>
    );
}


export default Submitted;