var React = require('react');
import Splash from '../components/Splash.js';

export default React.createClass({
    render: function () {

        var IMAGES_TEST =
        [{      
                name: "Waikato Diocesan Prospectus",
                src: ["/assets/img/samples/dio"],
                link: "http://prospectus.waikatodiocesan.school.nz",
                built: "SilverStripe",
                desc: (<span className="color3">Waikato Diocesan Prospectus Website was built in SilverStripe. I worked with the designer to make this look good on large screens while using a responsive structure to work on mobile.</span>),
        }];
        
        return (

            <div className="example-container">
               
                    {IMAGES_TEST.map(function(object, i){
                        
                        return <Splash obj={object} key={i} />;
                        
                    })}
              
            </div>

        );
    }
});


 