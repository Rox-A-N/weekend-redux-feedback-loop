import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


// form for rating feelings
function Feelings() {

  const history = useHistory();
  const dispatch = useDispatch();
  const [feeling, setFeeling] = useState( '' );

  const feelingsReducer = useSelector((store) => store.feelingsReducer)

  const handleChange = (event) => {
    dispatch({
        type: 'SET_FEELING',
        payload: feeling
    });
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      console.log('feelings are submitted?', feeling);
   
    if (feeling === '') {
        console.log('please add a number!');
            alert('Please rate your feelings.')
            return;
            
        } 
        handleChange();
        routeToFeedback();
        routeToUnderstanding();
    }

  

  const routeToUnderstanding = () => {
    history.push('/understanding');
  }
  
  const routeToFeedback = () => {
    history.push('/feedback');
  }

  return (
    <div>

      <h2>How are you feeling today?</h2>
      <p>(Where 5 = Great! and 0 = Lost)</p>

      <form className='feelingsInput' onSubmit={handleSubmit}>
        <label>Feeling?</label>
        <input type="number" min={0} max={5} value={feeling} required='required' onChange={(event) => setFeeling(event.target.value)} />
        <button className='button' onClick= {handleSubmit} >NEXT</button>
      </form>
    
    </div>
  );
}

export default Feelings;