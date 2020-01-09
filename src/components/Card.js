import React from 'react';

const Card = ({ id, name, email }) => {
  return(
    <div className='ba bw2 br2 ma2 dib bg-light-green b--light-green shadow-5'>
      <img
        alt='robots'
        src={`https://robohash.org/${id}?size=200x200`}
      />
      <div>
        <h2>{name}</h2>
        <h4>{email}</h4>
      </div>
    </div>
  );

}

export default Card;