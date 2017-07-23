var React = require('react');
import classSet from 'classset';


export default React.createClass({
    render: function () {

        var classes = classSet({
            'example-img': true,
        });

        return (

            <div className={classes}>
                <div className="img-container">
                    <img src={this.props.obj.src} />
                </div>
                <div className="desc">
                    <a href={this.props.obj.link}>{this.props.obj.link}</a>
                    <p>{this.props.obj.desc}</p>
                </div>
            </div>
 
        ); 
    }
});