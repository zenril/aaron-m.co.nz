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
                        {this.props.obj.desc}
                </div>
            </div>

        ); 
    }
});