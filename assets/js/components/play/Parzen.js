var React = require('react');
var ParZen = require('parzen');


export default class Parzen extends React.Component {

    constructor(props) {
        super(props);

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
            messages: [],
            list : JSON.stringify(this.words,null, 4)
        };

        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    componentDidMount() {
        var self = this;
        var pz = new ParZen(this.words);
        var sentence = pz.build();
        this.setState(state => 
            ({
                messages:[pz.build(),pz.build(),pz.build(),pz.build(),pz.build(),pz.build(),pz.build(),pz.build()]
            })
        );
    }


    handleKeyUp(e) {
        let str = e.target.value;
        var json = JSON.parse(str);
        var pz = new ParZen(json);

        this.setState(prevState => ({
            list: str,
            messages : [pz.build(),pz.build(),pz.build(),pz.build(),pz.build(),pz.build(),pz.build(),pz.build()]
        }));
    }

    render() { 
        return (

            <div className="container-play">
                <h1>Modify the JSON</h1>
                <h2>Just keep the "root" node</h2>

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
                    {this.state.messages.map(function(object, i){
                            
                        return <div key={i} className='parzen-line'> {object} </div>;
                        
                    })}
                </div>
            </div>

        );
    }
}


