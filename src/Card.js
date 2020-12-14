import React from 'react';
import 'tachyons';

const Card=(props)=>{
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow tc'>
            <img alt='robot' src={`https://robohash.org/${props.id}`}></img>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
    );
}

export default Card;