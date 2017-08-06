var React = require('react');
import classSet from 'classset';


export default React.createClass({
    render: function () {

        var classes = classSet({
            'description': true,
            'col-sm-12' : true
        });

        return (

            <div className={classes}>
                <div className=''>
                    <h1 className="color3">{this.props.obj.name}</h1>
                </div>
                <div className=''>
                   
                    <a className="color3" href={this.props.obj.link}>{this.props.obj.link}</a>
                    <h3 className="color3">Built with: {this.props.obj.built}</h3>
                </div>
                <div className=' desco'>
                    {this.props.obj.desc}
                </div>
            </div>

        );
    }
});