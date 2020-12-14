import React from 'react';

const Searchbox=(props)=>{
    return(
        <div className='pa2'>
            <input className='pa3 ba b--green bg-lightest-blue' 
            onChange={props.searchange}
            type='search' placeholder='Search Robots...'></input>
        </div>
    );
}

export default Searchbox;