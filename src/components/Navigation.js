var React = require('react');
import {
    Link
} from 'react-router-dom';

class Navigation extends React.Component 
{

    constructor(props) 
    {
        super(props);
        this.state = {
            isToggleOn: false 
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleHoverOff = this.handleHoverOff.bind(this);
    }

    handleClick(e) 
    {
        e.preventDefault();
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    handleHoverOff(e) 
    {
        e.preventDefault();
        this.setState(() => ({
            isToggleOn: false
        }));
    }

    render() 
    {
        return (
            <div className='navigation' onMouseLeave={this.handleHoverOff}>

                <ul>
                    <li className={this.state.isToggleOn ? 'activator active' : ' activator'} >
                        <a onClick={this.handleClick}>
                            <span className="toggle-bar"></span>
                            <span className="toggle-bar"></span>
                            <span className="toggle-bar"></span>
                        </a>
                        <div className='menu color3'>
                            <ul>
                                <li onClick={this.handleHoverOff}>
                                    <Link to="/">Me</Link>
                                </li>
                                <li onClick={this.handleHoverOff}>
                                    <Link to="/examples">Examples</Link>
                                </li>
                                <li onClick={this.handleHoverOff}>
                                    <Link to="/play">Play</Link>
                                </li>
                                <li>
                                    <a className='pull-right-left' target="_blank" href='/docs/aaron-meredith-cv.pdf'>View my CV</a>
                                </li>

                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navigation;