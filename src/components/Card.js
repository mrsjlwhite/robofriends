import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className='bg-light-green dib br4 pa2 ma2 grow bw2 shadow-5'>
            <img alt='Profile' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;