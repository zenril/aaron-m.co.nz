import React from 'react';
import ReactDOM from 'react-dom';

import Gallery from 'react-grid-gallery';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'

import SideBar from './components/SideBar';
import Navigation from './components/Navigation';
import Colors from './components/Colors';
import {Home, Examples, Play, Parzen, Scale} from './containers'


class App extends React.Component {
    render() {
        const ColorStyle = new Colors().render();
        return (
            <div className='app-main'>
                <ColorStyle />
                <div className="left-panel">
                    <div className="branching a">
                        <SideBar />
                    </div>
                </div>

                <Router>
                    <div className="main-window s">
                        <div className="cards">
                            <Navigation />
                        
                            <Route exact path="/" component={Home} />
                            <Route exact path="/examples" component={Examples} />
                            <Route exact path="/play" component={Play} />                               
                            <Route path="/play/parzen" component={Parzen} />
                            <Route path="/play/scale" component={Scale} />                             
                            
                        </div> 
                    </div>
                </Router>

                
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app")); 