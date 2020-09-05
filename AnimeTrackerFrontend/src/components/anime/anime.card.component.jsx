import React from 'react';
import Card from '../card.component';

function AnimeCard(props) {

    console.log('anime card component');
    console.log(props.animeData);



    // function Card(props) {
    //     return (
    //         <div className="card" styles="width: 18rem;">
    //             <img src="https://preview.redd.it/3zjtmrmlghy31.jpg?width=640&crop=smart&auto=webp&s=58a9c1927d2a9ecc4a4720e03ac37a3a1fb1b7df" className="card-img-top" styles="height: 1rem;" alt="..." />
    //             <div className="card-body">
    //                 <h5 className="card">{props.cardData.title}</h5>
    //                 <p className='card-text'>{props.cardData.synopsis.substr(0,120)}...</p>
    //                 <p className='card-text'>{props.cardData.audience_rating}</p>
    //                 <a href="#" className="btn btn-primary">Go!</a>
    //             </div>
    //         </div> 
    //     )
    // }




    return(
           <div className="card-deck">
               {props.animeData.animes.map(anime => (
                   <div key={anime._id} className=" col-md-3 ">
                   {
                   console.log(anime)}
                       <Card cardData={anime} />
                   </div>
               ))}
           </div>
    )
}

export default AnimeCard;