import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Cameron Graham <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>
        <br/>
        <a href= "https://www.linkedin.com/in/cameron-graham-g88" style= {{marginRight: "4px"}} target="blank"> <i className="fa fa-linkedin"></i></a><a href= "https://github.com/CameronG88" target="blank"> <i className="fa fa-github"><br/></i></a>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
