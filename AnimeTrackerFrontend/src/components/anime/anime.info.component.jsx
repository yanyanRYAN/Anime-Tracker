import React from 'react';

function AnimeInfo(props){

    return(
        <div>
            <div className="row">
                <div className="col">
                    <div>
                        <h6>Title:</h6><h1>{props.animeData.anime.title}</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="image-content">
                        <img src={props.animeData.anime.image_url} alt={props.animeData.anime.title} />
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <div>
                            <h6>Synopsis:</h6>
                            <p>{props.animeData.anime.synopsis}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div >
                            <h6>Age Rating:</h6>
                            <p>{props.animeData.anime.audience_rating}</p>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
}

export default AnimeInfo;