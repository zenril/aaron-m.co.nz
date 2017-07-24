var React = require('react');
import classSet from 'classset';


export default React.createClass({
    render: function () {

        var classes = classSet({
            'description': true
        });

        return (

            <div className={classes}>
                <h1>{this.props.name}</h1>
                <a href={this.props.link}>{this.props.link}</a>
                
                    {this.props.desc}
               
            </div>

        );
    }
});


