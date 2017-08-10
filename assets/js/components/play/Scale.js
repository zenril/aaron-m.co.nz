var React = require('react');
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

export default class Scale extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            body : "" 
        };
    }    

    componentDidMount() {
        
         axios.get("https://raw.githubusercontent.com/zenril/scale-ratio/master/README.md").then(res => {           
            this.setState(state => 
                ({
                    body : res.data 
                })
            );
        });

    }


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

                <div className='col-sm-12'>
                   
                </div>

            </div>

        );
    }
}


