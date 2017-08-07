var React = require('react');
import Media from 'react-media'

import classSet from 'classset';
import Desc from '../components/Desc.js';

export default class Splash extends React.Component {
    render() {

        var classes = classSet({
            'example-img': true,
        });

        return (

            <div className={classes}>
                <div className='col-sm-12 gallery'>
                    <Media query={{ minWidth: 830 }}>
                        {matches => matches ? (
                            <img src={this.props.obj.src[0] + "/splash.jpg"} />
                        ) : (
                            <img src={this.props.obj.src[0] + "/thumb.jpg"} />
                        )}
                    </Media>
                </div>


                <Desc obj={this.props.obj} />


                <div className="clearfix"></div>
            </div>

        );
    }
}