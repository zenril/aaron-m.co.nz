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
                
                <div className='col-sm-4'>
                      <Desc name={this.props.obj.name} link={this.props.obj.link} desc={this.props.obj.desc} />
                </div>

                <div className='col-sm-8 gallery'>
                    <div className='col-sm-4 no-thingo'>
                        <img src={this.props.obj.src[0]} />
                    </div>
                    <div className='col-sm-8 no-thingo'>
                        <div className='no-thingo vertical'>
                            <img src={this.props.obj.src[1]} />
                            <div className="clearfix"></div>
                        </div>
                        <div className='no-thingo vertical'>
                            <img src={this.props.obj.src[2]} />
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>

                <div className="clearfix"></div>
            </div>
 
        ); 
    }
}); 