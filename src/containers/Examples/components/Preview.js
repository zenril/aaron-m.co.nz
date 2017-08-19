import React from 'react';
import Media from 'react-media'
import classSet from 'classset';

const Desc = (props) => 
{
    
    var classes = classSet({
        'description': true,
        'col-sm-12': true
    });

    return (

        <div className={classes}>
            <div className=''>
                <h1 className="color3">{props.obj.name}</h1>
            </div>
            <div className=''>

                <a className="color3" href={props.obj.link}>{props.obj.link}</a>
                <h3 className="color3">Built with: {props.obj.built}</h3>
            </div>
            <div className=' desco'>
                {props.obj.desc}
            </div>
        </div>

    );
    
}


export default class Preview extends React.Component 
{
    render() 
    {

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