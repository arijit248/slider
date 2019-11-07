import React from 'react';


const slider = () => {
    const styleCarouselInner = {
        maxHeight: '100vh',
    }
    const styleImage = {
        width: '100%',
    }
    return (
        <div>
            <div className="container-fluid" style={{ padding: '0' }}>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">

                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner" style={styleCarouselInner}>

                        <div className="item active">
                            <img src='./Images/la.jpg' alt="Los Angeles" style={styleImage} />
                            <div className="carousel-caption" style={{ top: '50rem' }}>
                                <h3>Los Angeles</h3>
                                <p>LA is always so much fun!</p>
                            </div>
                        </div>

                        <div className="item">
                            <img src='./Images/chicago.jpg' alt="Chicago" style={styleImage} />
                            <div className="carousel-caption" style={{ top: '50rem' }}>
                                <h3>Chicago</h3>
                                <p>Thank you, Chicago!</p>
                            </div>
                        </div>

                        <div className="item">
                            <img src='./Images/ny.jpg' alt="New York" style={styleImage} />
                            <div className="carousel-caption" style={{ top: '50rem' }}>
                                <h3>New York</h3>
                                <p>We love the Big Apple!</p>
                            </div>
                        </div>

                    </div>


                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default slider;