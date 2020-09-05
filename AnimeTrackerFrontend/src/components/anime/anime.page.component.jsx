import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import AnimeInfo from './anime.info.component';
import AnimeReview from './anime.review.component';
import '../../styles.css';


function AnimePage(props) {

    const [data, setData] = useState({ anime: [] });

    const urlparams = props.match.params.id;
    // console.log("anime page");
    // console.log(urlparams);
    // console.log(data.anime.title);
    useEffect(() => {
        async function fetchData() {
            const result = await axios('http://localhost:5000/anime/' + urlparams);
            console.log(result.data);
            setData({ anime: result.data });
        }
        fetchData();

    }, [urlparams]);



    return (

        <div className="container">
            <div className="mb-4">
                <AnimeInfo animeData={data} />
            </div>


            <div className="row mb-4">
                <div className="col"> <h2>Ratings and Reviews</h2></div>
            </div>
            <div className="row">
                <AnimeReview />
            </div>
            {/* <div className="row">
                <div className="col"> <h2>Ratings and Reviews</h2></div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <h6>GearWhipped</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="col-md-4">
                    <p>8/10</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <h6>DreadBot3000</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="col-md-4">
                    <p>8/10</p>
                </div>
            </div> */}

        </div>


    )
}

export default withRouter(AnimePage); //this grabs the parameter in the url