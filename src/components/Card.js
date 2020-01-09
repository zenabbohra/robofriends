import React from 'react';

const Card = () => {
  return(
    <div className='ba bw2 br2 ma2 dib bg-light-green b--light-green shadow-5'>
      <img
        alt='robots'
        src='https://robohash.org/test?size=200x200'
      />
      <div>
        <h2>Jenny</h2>
        <h4>jenny@gmail.com</h4>
      </div>
    </div>
  );

}

export default Card;