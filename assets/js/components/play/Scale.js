var React = require('react');

export default class Scale extends React.Component {
    render() { 
        return (

            <div className="container-play">
                <div className='s-xs-60 s-sm-40 s-md-30 s-lg-20 scale'>
                    <div className='border-style-color3'>
                        <h1>Resize window</h1>
                        <div className='show-xs hidden-sm hidden-md hidden-lg'>
                            <h2>Height is 60% of width</h2>
                        </div>
 
                        <div className='hidden-xs show-sm hidden-md hidden-lg'>
                            <h2>Height is 40% of width</h2>
                        </div>

                        <div className='hidden-xs hidden-sm show-md hidden-lg'>
                             <h2>Height is 30% of width </h2>
                        </div>

                        <div className='hidden-xs hidden-sm hidden-md show-lg'>
                             <h2>Height is 20% of width</h2>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


