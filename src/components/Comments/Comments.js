// form for comments // change wording
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


// form for adding comments
function Comments() {

  const history = useHistory();
  const dispatch = useDispatch();
  const [comment, setComment] = useState( '' );

  const commentsReducer = useSelector((store) => store.commentsReducer)

  const handleChange = (event) => {
    dispatch({
        type: 'SET_COMMENT',
        payload: comment 
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('comments are submitted?', comment);

    handleChange();
    routeToFeedback();

  }


  const routeToFeedback = () => {
    history.push('/feedback');
  }
  
  return (
    <div>

      <h2>Any comments you want to leave?</h2>
      
      <form>
      <label>Comments:</label><br/>
        <textarea id="comments" rows="4" cols="50" value={comment} onChange={(event) => setComment(event.target.value)}></textarea>
        <button className='button' onClick={ handleSubmit }>NEXT</button>
      </form>
    
    </div>
  );
}

export default Comments;