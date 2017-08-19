import React from 'react';
import Preview from './components/Preview';

export default class Examples extends React.Component 
{
    render() 
    {

        var images =
            [{
                name: "Waikato Diocesan Prospectus",
                src: ["/img/samples/dio"],
                link: "http://prospectus.waikatodiocesan.school.nz",
                built: "SilverStripe",
                desc: (<span className="color3">Waikato Diocesan Prospectus Website was built in SilverStripe. I worked with the designer to make this look good on large screens while using a responsive structure to work on mobile.</span>),
            }, {
                name: "Sea Dragon",
                src: ["/img/samples/seadragon"],
                link: "http://www.seadragon.co.nz",
                built: "Wordpress",
                desc: (<span className="color3">Sea dragon was a simple site built in Wordpress and required a fast turn around. </span>),
            },
            {
                name: "Harmonised",
                src: ["/img/samples/harmonised"],
                link: "https://www.harmonised.co.nz/",
                built: "Silverstripe",
                desc: (<span className="color3">Harmonised Website is made in SilverStripe, a single page full screen tiled page built for AUT's new safe social media support app.</span>),
            }, {
                name: "Cloud Farmer",
                src: ["/img/samples/agrecord"],
                link: "http://cloudfarmer.co.nz/",
                built: "Symfony",
                desc: (<span className="color3">Starting with an existing Angular project, I remodeled the database and built an API to communicate with the native apps we were also building. After the API was done we continued to work on the Angular app to develop support and features.  </span>),
            }, {
                name: "SavvyKiwi",
                src: ["/img/samples/savvy"],
                link: "https://www.savvykiwi.co.nz",
                built: "Laravel",
                desc: (<span className="color3">Using Laravel, I replicated the native app using all the data from the same API</span>),
            }];

        return (

            <div className="example-container">

                {images.map(function (object, i) {

                    return <Preview obj={object} key={i} />; 

                })}

            </div>

        );
    }
}


