import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonApi = () =>{

    const [Num, setNum] = useState();
    const [Name, setName] = useState();
    const [Moves, setMoves] = useState();

    useEffect(()=>{
        async function getData() {
            let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Num}`);
            //console.log(res.data);
            setName(res.data.name);
            setMoves(res.data.moves.length);
        }

        getData();
    });

    return (
        <>
            <h1> I am choose<span style={{color:'red'}}> {Num} </span></h1>
            <h1>I select <span style={{color:'red'}}>{Name} </span></h1>
            <h1>I have <span style={{color:'red'}}>{Moves} moves </span></h1>
            <select value={Num} onChange={(event)=>{
                setNum(event.target.value);
            }}>
                <option value='1'>1</option>
                <option value='25'>25</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
        </>
    );
}

export default PokemonApi;