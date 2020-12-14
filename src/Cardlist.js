import React from 'react';
import Card from './Card.js';

const Cardlist=(props)=>{
    const robots=props.robots;
    return(
        robots.map((robo,i)=>{
            return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
        })
    );
}

export default Cardlist;