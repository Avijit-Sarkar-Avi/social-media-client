import React from 'react';

const Slider = () => {
    return (
        <div className="carousel w-80 md:w-96 h-52 mx-auto mb-10">
            <div id="slide1" className="carousel-item relative w-80 md:w-96 h-52">
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://media.coschedule.com/uploads/2021/11/Blog_20-Important-Benefits-of-Social-Media-Marketing-Every-Business-Should-Know_Header-1.png" alt=''
                        className="w-80 md:w-96 h-52" /></figure>
                    <div className="card-body">
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                        <h2 className="text-3xl text-center">Advertise</h2>
                        <p className="text-xl text-center">This is the advertise slider</p>
                    </div>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-80 md:w-96 h-52">
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://miro.medium.com/max/1400/0*Hn0DMizRMYhuGo-V.png" alt=''
                        className="w-80 md:w-96 h-52" /></figure>
                    <div className="card-body">
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                        <h2 className="text-3xl text-center">Advertise</h2>
                        <p className="text-xl text-center">This is the advertise slider</p>
                    </div>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-80 md:w-96 h-52">
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243__340.png" alt=''
                        className="w-80 md:w-96 h-52" /></figure>
                    <div className="card-body">
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                        <h2 className="text-3xl text-center">Advertise</h2>
                        <p className="text-xl text-center">This is the advertise slider</p>
                    </div>
                </div>
            </div>


            <div id="slide4" className="carousel-item relative w-80 md:w-96 h-52">
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://kultivi.com/wp-content/uploads/2022/04/4902908-scaled-e1651060554538.jpg" alt=''
                        className="w-80 md:w-96 h-52" /></figure>
                    <div className="card-body">
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                        <h2 className="text-3xl text-center">Advertise</h2>
                        <p className="text-xl text-center">This is the advertise slider</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;