import React from 'react';
import ParZen from 'parzen';
import axios from 'axios';
import Markdown from 'react-remarkable';


export default class Parzen extends React.Component 
{

    constructor(props) 
    {
        super(props);
        this.samples = 10;
        this.words = {
            "root": [
                "The {{adj}} {{color}} {{animal}} {{action}} the {{adj}} {{animal}}.",
                "I saw {{a1:animal|an}}. It was {{adj|an|like:a1}} {{color}} {{a1}}."
            ],
            "adj": {
                "big": [
                    "substantial",
                    "considerable",
                    "great",
                    "huge",
                    "immense",
                    "enormous",
                    "extensive",
                    "colossal",
                    "massive",
                    "mammoth",
                    "vast",
                    "prodigious",
                    "tremendous"
                ],
                "small": [
                    "slight",
                    "minor",
                    "unimportant",
                    "trifling",
                    "trivial",
                    "insignificant",
                    "inconsequential",
                    "inappreciable",
                    "inconsiderable",
                    "negligible",
                    "nugatory",
                    "paltry"
                ]
            },
            "color": [
                "red",
                "candy",
                "lightening",
                "brown",
                "white",
                "purple",
                "peach",
                "almond",
                "amber",
                "amethyst"
            ],

            "animal": {
                "small": [
                    "fox",
                    "dog",
                    "cat",
                    "snake",
                    "ant",
                    "mouse",
                    "lemar",
                    "fly",
                    "quokka",
                    "goose",
                    "capybara"
                ],

                "big": [
                    "baboon",
                    "hippo",
                    "elephant",
                    "zebra",
                    "giraffe",
                    "moose",
                    "cow",
                    "bull",
                    "whale"
                ]
            },
            "action": [
                "jumped over",
                "ducked under",
                "fell into",
                "touched",
                "threw",
                "dragged"
            ],
            "pattern": [
                "{{bit}}{{bit}}{{bit}}",
                "{{bit}}<>{{bit}}",
                "{{bit}}{{bit}}{{bit}}{{bit}}{{bit}}{{bit}}"
            ],
            "bit": [
                "-",
                ".",
                ",",
                "[",
                "{",
                "}",
                "+",
                "=",
                "~",
                "!",
                "_",
                "/",
                "@",
                "#",
                "%",
                " ",
                " ",
                " ",
                " ",
                " ",
                "&"
            ]
        };


        this.state = {
            messages: [
            ],
            list : JSON.stringify(this.words,null, 4),
            body : "" 
        };

        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    componentDidMount() 
    {
        var pz = new ParZen(this.words);

        var messages = [
        ];
        for (var index = 0; index < this.samples; index++) 
        {
            messages.push(pz.build());            
        }

        this.setState(() => 
            ({
                messages:messages
            })
        );

        axios.get("https://raw.githubusercontent.com/zenril/parzen/master/README.md").then(res => 
        {
            this.setState(() => 
                ({
                    body : res.data 
                })
            );
        });
    }


    handleKeyUp(e) 
    {
        let str = e.target.value;
        var json = JSON.parse(str);
        var pz = new ParZen(json);

        var messages = [
        ];
        for (var index = 0; index < this.samples; index++) 
        {
            messages.push(pz.build());            
        }

        this.setState(() => ({
            list: str,
            messages : messages
        }));
    }

    render() 
    { 
        return (

            <div className="container-play">
                <h1>Modify the JSON</h1>
                <h2>Just keep the &quot;root&quot; node</h2>

                <div className='col-sm-8'>
                    <h3>Input</h3>
                    <textarea onKeyUp={this.handleKeyUp}>
                        {
                            this.state.list
                        }
                    </textarea>
                </div>
                
                <div className='col-sm-4'>
                    <h3>Output</h3>
                    {this.state.messages.map(function(object, i)
                    {
                            
                        return <div key={i} className='parzen-line'> {object} </div>;
                        
                    })}
                </div>
                
                <div className='col-sm-12'>
                    <Markdown source={this.state.body} />
                </div>

            </div>

        );
    }
}


