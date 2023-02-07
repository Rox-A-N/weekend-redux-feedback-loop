// form for comments // change wording
import React from 'react';
import { useHistory } from 'react-router-dom';


// form for adding comments
function Comments() {
  const history = useHistory();
  const routeToFeedback = () => {
    // alert("woo! feelings!!");
    history.push('/feedback');
  }
  
  return (
    <div>

      <h2>Any comments you want to leave?</h2>
      
      <label htmlFor="comments">Comments:</label><br/>
      <textarea id="comments" rows="4" cols="50"></textarea>
      <button className='button' onClick={ routeToFeedback }>NEXT</button>
    
    </div>
  );
}

export default Comments;