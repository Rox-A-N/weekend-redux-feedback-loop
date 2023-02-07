import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


// form for rating understanding
function Understanding() {
  
  const history = useHistory();
  const dispatch = useDispatch();
  const [understanding, setUnderstanding] = useState( '' );
  
  const understandingReducer = useSelector( (store) => store.understandingReducer);

  const handleChange = (event) => {
    dispatch({
        type: 'SET_UNDERSTANDING',
        payload: understanding
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted understanding rank?', understanding);
 
  if (understanding === '') {
      console.log('please add a number!');
          alert('Please rate your Understanding.')
          return;
          
      } 
      handleChange();
      routeToFeedback();
      routeToSupport();
  }

  const routeToSupport = () => {
    // alert("woo! understanding!!");
    history.push('/support');
  }

  const routeToFeedback = () => {
    history.push('/feedback');
  }
  
  return (
    <div>

      <h2>How well are you understanding the content?</h2>
      <p>(Where 5 = Perfect Understanding! and 0 = Lost)</p>

      <form className='understandingInput' onSubmit={handleSubmit}>
        <label>Understanding?</label>
        <input type="number" min={0} max={5} value={understanding} required='required' onChange={(event) => setUnderstanding(event.target.value)}/>
        <button className='button' onClick={ handleSubmit }>NEXT</button>
      </form>
    
    </div>
  );
}

export default Understanding;