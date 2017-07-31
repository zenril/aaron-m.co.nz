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
    </div>
)

export default Navigation;