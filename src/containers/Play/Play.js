import React from 'react';
import ParZen from 'parzen';
import {
    Link
} from 'react-router-dom';


const PlayThing = (props) => 
{

    return (
        <div className="play-thing row">
            <div className='col-xs-12'>
                {(props.part.page? 
                    <h1>
                        <Link to={"/play/" + props.part.page }>
                            {props.part.name}
                        </Link>
                    </h1>
                    :
                    <h1>{props.part.name}</h1>
                )}
                <div className='code-links'>
                    <a className='git-link code-link' href={props.part.github}>
                        <img src='/img/github.svg' />
                    </a>
                    {(props.part.npm? 
                        <a className='npm-link code-link' href={props.part.npm}>
                            <img src='/img/npm.svg' />
                        </a>
                        :
                        <span></span>
                    )}
                </div>
            </div>
            <div className='col-xs-12'>
                <span> {props.part.decription} </span>
            </div>
            <div className='col-xs-12'>

            </div>
        </div>
    );
};

export default class Play extends React.Component 
{
    constructor(props) 
    {
        super(props);
        this.state = {
            messages: [
            ]
        };
    }

    componentDidMount() 
    {
        var json = 
        {
            "root": 
            [
                "you {{miss}} {{number}} percent of the {{things}} you {{end}}."
            ],
            "miss": [
                "miss", "hit", "take", "throw"
            ],
            "number": [
                "20", "40", "60", "80", "100"
            ],
            "things": [
                "papers", "turnips", "shots", "chances"
            ],
            "end": [
                "never {{action}}", "won't {{action}}", "did {{action}}"
            ],
            "action": [
                "plant", "write", "taste", "touch", "open", "{{miss}}"
            ]
        };

        var pz = new ParZen(json);
        var sentence = pz.build();
        this.setState((state) => 
        {
            state.messages.push(sentence); 
        });
    }
    
    render() 
    {

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
            },
            {
                "name": "OBS Twitch chat html overlay",
                "page": null,
                "decription": (
                    <div>
                        
                        React twitch chat overlay. Visiting the following url <a href='http://twitchchat.aaron-m.co.nz/chat/loadingreadyrun'>http://twitchchat.aaron-m.co.nz/chat/loadingreadyrun</a> may provide text chat if this channel is online
                        <p>You can visit <a href='https://www.twitch.tv/loadingreadyrun'>https://www.twitch.tv/loadingreadyrun</a> to see if the chat is live</p>
                        <h2>Or</h2>

                        {
                            <pre><code>
                                {`
    //replace ':name' with twitch username
    http://twitchchat.aaron-m.co.nz/chat/:name`
                                }
                            </code></pre>
                        }

                    </div>
                ),
                "github": "https://github.com/zenril/twitchwidget",
                "npm": null
            }
            ,
            {
                "name": "scale-ratio",
                "page": "scale",
                "decription": (
                    <div>
                        CSS to maintain elements aspect ratios across multiple device widths. The height will be set based on a % of its width.

                        {
                            <pre><code>
                                {`
    div class='s-xs-50 s-sm-70 scale'>
        <div>
            <!-- your content goes here --> 
        </div>
    </div>`
                                }
                            </code></pre>
                        }
                    </div> 
                ),
                "github": "https://github.com/zenril/scale-ratio",
                "npm": "https://www.npmjs.com/package/scale-ratio"
            }

        ];

        return (

            <div className="container-play">
                {playthings.map(function (object, i) 
                {

                    return <PlayThing part={object} key={i} />;

                })}
            </div>

        );
    }
}


