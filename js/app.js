var React = require('react');
var ReactDOM = require('react-dom');

import Body from '../components/Body.js';
import Branching from '../components/Branching.js';

var App = React.createClass({
    render: function () { 
        return ( 
            <div className='app-main'>
                <div className="left-panel">
                    <div className="branching">
                        <Branching />
                    </div>
                </div>

                <div className="main-window s">
                    <Body/>  
                </div>                             
            </div>
        );
    }
});

ReactDOM.render(<App/>,  document.getElementById("app"));