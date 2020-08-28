import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    const [data, setData] = useState({animes: []});

    useEffect(() => {
        async function fetchData() {
            const result = await axios('http://localhost:5000/anime');
            // const result = await axios(
            //     'https://hn.algolia.com/api/v1/search?query=redux',
            // );
            console.log(result.data);
            setData({animes: result.data});
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <ul>
                {data.animes.map(anime => (
                    <li key={anime._id}>{anime.title}</li>
                ))}
            </ul>

        </div>
    );
}

export default Home;