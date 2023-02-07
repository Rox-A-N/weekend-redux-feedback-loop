// form for support rating  // change wording
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


// form for rating support
function Support() {

  const history = useHistory();
  const dispatch = useDispatch();
  const [support, setSupport] = useState( '' );

  const supportReducer = useSelector((store) => store.supportReducer);

  const handleChange = (event) => {
    dispatch({
        type: 'SET_SUPPORT',
        payload: support
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('support is ranked?', support);

    if (support === '' ) {
        console.log('please rank your support!');
        alert('Please rate your received support.')
        return;
    }
        handleChange();
        routeToFeedback();
        routeToComments();
  }
  

  const routeToComments = () => {
    history.push('/comments');
  }

  const routeToFeedback = () => {
    history.push('/feedback');
  }


   
  return (
    <div>

      <h2>How well are you being supported!</h2>
      <p>(Where 5 = Totally supported! and 0 = Not at all)</p>

      <form className='supportInput' onSubmit={handleSubmit}>
        <label htmlFor="support">Support?</label>
        <input type="number" min={0} max={5} value={support} required='required' onChange={(event) => setSupport(event.target.value)}/>
        <button className='button' onClick={ handleSubmit }>NEXT</button>
      </form>

    </div>
  );
}

export default Support;