var React = require('react');
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Navigation = () => (
    <div className='navigation'>
        <Link to="/">Me</Link>
        <Link to="/examples">Examples</Link>
        <a className='pull-right' target="_blank" href='/assets/docs/aaron-meredith-cv.pdf'>View my CV</a>
        <div className='clearfix'></div>
    </div>
)

export default Navigation;