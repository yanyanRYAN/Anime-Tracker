import React from 'react';
//import { Link } from 'react-router-dom';

function Card(props) {

    return (
        <div key={props.cardData._id}>
            <div className="card">
                <img src={props.cardData.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.cardData.title.substr(0, 30)}</h5>
                    <p className='card-text'>{props.cardData.audience_rating}</p>
                    <br/>
                    <a href={"/anime/page/" + props.cardData._id} className="btn btn-primary">Go!</a>
                </div>
            </div>
        </div>


    )
}

export default Card;