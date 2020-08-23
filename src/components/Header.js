import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <i className="fa fa-arrows-alt fa-spin fa-3x"></i>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Cameron Graham</h1>
        <h2>Web Developer</h2>
        <p>
        Cam or Cameron, I'm a Florida native, a washed-up athlete, an avid gamer and upcoming Web Developer.  I have experience using HTML5, CSS3, JavaScript, JQuery, Node, MySQL, MongoDB, Express and React.
            {/* {' '} this is how you link*/}
          <br/>
          <br/>
          For collabs or employment inqueries check out some of my work below or take a peek at my {' '}
          <a href= "https://github.com/CameronG88" target= "blank" > Github</a> 
          <br/> account and {' '}
          <a href="https://drive.google.com/file/d/17RUiOnDjYDxME2AfU_EqfIGKq3DXmgqy/view?usp=sharing" target= "blank"> Resume </a> 
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('bandify')
            }}
          >
            Bandify
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('x-files')
            }}
          >
            X-Files
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('note-taker')
            }}
          >
            Note Taker
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('streamboat')
            }}
          >
            StreamBoat
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('weather-hub')
            }}
          >
            WeatherHub
          </button>
        </li>
        {/* <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            StreamBoat
          </button>
        </li> */}
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
