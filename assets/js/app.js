var React = require('react');
var ReactDOM = require('react-dom');

import Gallery from 'react-grid-gallery';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './containers/Home.js';
import Play from './containers/Play.js';
import Examples from './containers/Examples.js';
import Branching from './components/Branching.js';
import Navigation from './components/Navigation.js';
import Parzen from './components/play/Parzen.js';


var App = React.createClass({
    render: function () {
        return ( 
            <div className='app-main'>
                <div className="left-panel"> 
                    <div className="branching a">
                        <Branching />
                    </div>
                </div>

                <Router>
                    <div className="main-window s">
                        <div className="cards">
                            <Navigation/>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/examples" component={Examples}/>
                            <Route exact path="/play" component={Play} />
                            <Route path="/play/parzen" component={Parzen} />

                        </div>
                    </div> 
                </Router>                                
            </div>
        );
    }
}); 

ReactDOM.render(<App/>,  document.getElementById("app")); 