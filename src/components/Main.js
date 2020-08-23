import PropTypes from 'prop-types'
import React from 'react'
import Bandifyshot from '../images/Bandifyshot.png'
import Weatherhubshot from '../images/Weatherhubshot.png'
import Noteshot from '../images/Noteshot.png'
import Xfilesshot from '../images/Xfilesshot.png'
import pic01 from '../images/pic01.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="bandify"
          className={`${this.props.article === 'bandify' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Bandify</h2>
          <span className="image main">
            <img src={Bandifyshot} alt="" />
          </span>
          <p>
          Bandify is an app that allows you to stream music from your favorite artists while simultaneously giving you quick access to artist information. Using the dropdown menu, you can select whether you want to search by artist or album. Whichever criteria you search by, the appropriate response will populate the page.
          </p>
          {close}
        </article>

        <article
          id="x-files"
          className={`${this.props.article === 'x-files' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">X-Files</h2>
          <span className="image main">
            <img src={Xfilesshot} alt="" />
          </span>
          <p>
          X-Files is an satirical App that allows a user to search for recorded UFO Sightings. It allows to choose the sighting by location,time frame and other options and read the witness' report.</p>
          {close}
        </article>

        <article
          id="note-taker"
          className={`${this.props.article === 'note-taker' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Note Taker</h2>
          <span className="image main">
            <img src={Noteshot} alt="" />
          </span>
          <p>
          An application that can be used to write, save, and delete notes. This application uses an express backend that saves and retrieves the notes from a JSON file. It's a simple to-do app to help you do what you need.. to-do!
          </p>
          {close}
        </article>

        <article
          id="streamboat"
          className={`${this.props.article === 'streamboat' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">StreamBoat</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
          Coming Soon!
            
          </p>
          {close}
        </article>

        <article
          id="weather-hub"
          className={`${this.props.article === 'weather-hub' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">WeatherHub</h2>
          <span className="image main">
            <img src={Weatherhubshot} alt="" />
          </span>
          <p>
          This project was to code out a web page that displays current weather info about a searched city and a 5 day forecast as well. It displays the current; Temp(F), Humidity, Wind Speed, and UV Index while forecasting the Temperature and chance of humdidity for the upcoming week. 
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
