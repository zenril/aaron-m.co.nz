var React = require('react');
var ParZen = require('parzen');

export default class Parzen extends React.Component {

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

        this.setState((state) => {state.messages.push(sentence);});

    }

    render() { 
        return (

            <div className="container-play">
                {this.state.messages.map(function(object, i){
                        
                    return <span key={i} > {object} </span>;
                    
                })}
            </div>

        );
    }
}


