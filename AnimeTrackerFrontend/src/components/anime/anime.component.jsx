import React, { useEffect, useState} from 'react';
import axios from 'axios';
import AnimeCard from './anime.card.component';
import '../../styles.css';


function Anime() {
    const [data, setData] = useState({animes: []});

    useEffect(() => {
        async function fetchData() {
            const result = await axios('http://localhost:5000/anime');

            
            setData({animes: result.data});
        }
        fetchData();
    }, []);


    return(
        <div className="component-content">
            <h1>Anime List</h1>
            
            <AnimeCard animeData={data}/>
        </div>
    )
}

export default Anime;