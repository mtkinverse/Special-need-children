import React from 'react'

function Home() {
    return (
        <div style={{ height: "600px",marginTop:"-5.5%" }} >

            <div id="divForCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
                <div className='introducer'>
                    <h1 style={{fontSize:'3em'}}> Application for special need children </h1>
                    <p1 style={{fontSize:'1.5em'}}> Empowering special needs education through innovative AI-driven solutions, fostering inclusion and growth for all </p1>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={`${process.env.PUBLIC_URL}/crouselPics/pic1.jpg`} className="d-block w-100 carouselPic" alt="Public URL unable to access" />
                    </div>
                    <div className="carousel-item">
                        <img src={`${process.env.PUBLIC_URL}/crouselPics/pic2.jpg`} className="d-block w-100 carouselPic" alt="Public URL unable to access" />
                    </div>
                    <div className="carousel-item">
                        <img src={`${process.env.PUBLIC_URL}/crouselPics/pic3.jpg`} className="d-block w-100 carouselPic" alt="Public URL unable to access" />
                    </div>
                    <div className="carousel-item">
                        <img src={`${process.env.PUBLIC_URL}/crouselPics/pic4.jpg`} className="d-block w-100 carouselPic" alt="Public URL unable to access" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
