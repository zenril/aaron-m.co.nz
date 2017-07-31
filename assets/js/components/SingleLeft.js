var React = require('react');
import classSet from 'classset';
import Desc from '../components/Desc.js';

export default React.createClass({
    render: function () {

        var classes = classSet({
            'example-img': true,
        });

        return (

            <div className={classes}>
                
                <div className='col-sm-8 gallery'>
                    <div className='col-sm-12 no-thingo'>
                        <img src={this.props.obj.src[0]} />
                    </div>
                </div>

                <div className='col-sm-4'>
                      <Desc obj={this.props.obj} />
                </div>

                <div className="clearfix"></div>
            </div>
 
        ); 
    }
}); 