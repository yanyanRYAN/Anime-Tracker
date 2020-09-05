import React from 'react';
//import { Link } from 'react-router-dom';

function Card(props) {

    const cardImgStyle = {
        "height": "570px"
    }

    function CardV1() {
        return (
            <div key={props.cardData._id}>
                <div className="card">
                    <img src={props.cardData.image_url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title flex-fill">{props.cardData.title.substr(0, 30)}</h5>
                        <p className='card-text flex-fill'>{props.cardData.audience_rating}</p>
                        <br />
                        <a href={"/anime/page/" + props.cardData._id} className="btn btn-primary">Go!</a>
                    </div>
                </div>
            </div>
        )
    }

    function CardV2() {
        return (
            <div key={props.cardData._id}>
                <div className="">
                    <div className="card mb-4">
                        <img className="card-img-top img-fluid" src={props.cardData.image_url}  alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{props.cardData.title.substr(0, 50)}</h5>
                            <p className='card-text'>{props.cardData.audience_rating}</p>
                            <br />
                            <a href={"/anime/page/" + props.cardData._id} className="btn btn-primary">Go!</a>

                        </div>
                    </div>


                </div>

            </div>
        )
    }

    function CardV3(){
        return (
            <div>

            </div>
        )
    }

    return (
        <div>
            <CardV2 />
            
        </div>





    )
}

export default Card;