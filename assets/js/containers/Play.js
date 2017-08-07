var React = require('react');
var ParZen = require('parzen');
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Splash from '../components/Splash.js';


const PlayThing = (props) => {

    return (
        <div className="play-thing border-style-color3 row">
            <div className='col-xs-12'>
                <h1>{props.part.name}</h1>
                <div className='code-links'>
                    <a className='git-link code-link' href={props.part.github}>
                        <img src='/assets/img/github.svg' />
                    </a>
                    <a className='npm-link code-link' href={props.part.npm}>
                        <img src='/assets/img/npm.svg' />
                    </a>
                </div>
            </div>
            <div className='col-xs-12'>
                <span> {props.part.decription} </span>
            </div>
            <div className='col-xs-12'>

            </div>
        </div>
    )
}

export default class Play extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
    }

    componentDidMount() {
        var self = this;
        var json = {
            "root": [
                "you {{miss}} {{number}} percent of the {{things}} you {{end}}."
            ],
            "miss": ["miss", "hit", "take", "throw"],
            "number": ["20", "40", "60", "80", "100"],
            "things": ["papers", "turnips", "shots", "chances"],
            "end": ["never {{action}}", "won't {{action}}", "did {{action}}"],
            "action": ["plant", "write", "taste", "touch", "open", "{{miss}}"]
        };

        var pz = new ParZen(json);
        var sentence = pz.build();

        this.setState((state) => { state.messages.push(sentence); });

    }

    render() {

        var playthings = [
            {
                "name": "ParZen",
                "page": "parzen",
                "decription": (
                    <div>
                        <strong>A library for generating random but formatted sets of words.</strong>
                        <div>
                            Create lists of words and phrases. Combine them together to create phrases, sentences and stories.
                        </div>
                        <ul>
                            <li>Create and store variables for re-use from Randomly chosen words</li>
                            <li>Supports Indefinite Article</li>
                            <li>Most pluralization, I still have work to do on Plural Possessives.</li>


                        </ul>
                        <strong>There are a few over writeable formatting functions that are baked in like</strong>
                        <ul>
                            <li>Full upper case</li>
                            <li>Upper case start of words</li>
                            <li>Upper case only the very first character</li>
                            <li>Pluralization based on context</li>
                            <li>Always pluralize</li>
                            <li>conditional pluralization</li>
                        </ul>
                    </div>
                ),
                "github": "https://github.com/zenril/parzen",
                "npm": "https://www.npmjs.com/package/parzen"
            }

        ];

        return (

            <div className="container-play">
                {playthings.map(function (object, i) {

                    return <PlayThing part={object} key={i} />;

                })}
            </div>

        );
    }
}


