var React = require('react');
import classSet from 'classset';


export default React.createClass({
    render: function () {

        var classes = classSet({
            'description': true
        });

        return (

            <div className={classes}>
                <h1>{this.props.obj.name}</h1>
                <h3>Built with: {this.props.obj.built}</h3>
                <a href={this.props.obj.link}>{this.props.obj.link}</a>
                 {this.props.obj.desc}
            </div>

        );
    }
});


