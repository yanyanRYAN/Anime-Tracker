import React from 'react';


function AnimeReview(props) {


    const profilePicStyle = {
        width: '64px',
    }

    return (
        <div className="container">
            <ul className="list-unstyled">
                <li class="media">
                    <img src={require("../../profilepic.png")} className="mr-3" style={profilePicStyle} alt="..." />
                    <div className="col-md-8">
                        <div className="media-body">
                            <h5 className="mt-0 mb-1">DreadBot3000</h5>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="media-body">
                            <h5 className="mt-0 mb-1">Rating</h5>
                            <p>8/10</p>
                        </div>
                    </div>

                </li>
                <li className="media my-4">
                    <img src={require("../../profilepic.png")} className="mr-3" style={profilePicStyle} alt="..." />
                    <div className="col-md-8">
                        <div className="media-body">
                            <h5 className="mt-0 mb-1">PockySnacks</h5>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="media-body">
                            <h5 className="mt-0 mb-1">Rating</h5>
                            <p>8/10</p>
                        </div>
                    </div>
                </li>
                <li className="media">
                    <img src={require("../../profilepic.png")} className="mr-3" style={profilePicStyle} alt="..." />
                    <div className="col-md-8">
                        <div className="media-body">
                            <h5 className="mt-0 mb-1">GearWhipped</h5>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="media-body">
                            <h5 className="mt-0 mb-1">Rating</h5>
                            <p>8/10</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default AnimeReview;