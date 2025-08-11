import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar' 
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className='hero'>
        <img src={hero_banner} alt="" className='banner-image'/>
        <div className='hero-caption'>
          <img src={hero_title} alt="" className='caption-image' />
          <p>After discovering his ties to an ancient order, a young man embarks on a quest to protect Istanbul from mysterious immortal enemies.</p>
          <div className='hero-buttons'>
            <button className='btn'>
              <img className="play-icon" src={play_icon} alt="" />Play
            </button>
              <button className='btn dark-btn'>
              <img src={info_icon} alt="" />More Info
            </button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only on Netflix"}category={"now_playing"}/>
        <TitleCards title={"Upcoming"}category={"upcoming"}/>
        <TitleCards title={"Top picks for you"}category={"popular"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
