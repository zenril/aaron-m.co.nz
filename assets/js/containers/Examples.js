var React = require('react');
import LeftItem3 from '../components/LeftItem3.js';
import RightItem3 from '../components/RightItem3.js';
import RightItemSlit from '../components/RightItemSlit.js';
import LeftItemSlit from '../components/LeftItemSlit.js';
import SingleLeft from '../components/SingleLeft.js';
import SingleRight from '../components/SingleRight.js';

export default React.createClass({
    render: function () {

        
        
        var IMAGES =
        [{
                src: "/img/assets/samples/a.png",
                link: "https://www.harmonised.co.nz/",
                desc: "Built with SilverStripe. I developed the site and gave design input."
        },
        {
                src: "/img/assets/samples/b.png",
                link: "https://www.printicular.com/nz/",
                desc: "Logo I developed for Printicular brand, a photo printing app developed by MEA"
        },        
        {
                src: "/img/assets/samples/d.png",
                link: "http://my.rothbury.co.nz/",
                desc: "Built with static HTML and javascript.  I developed this site, the design was provided by and external source."
        },
        {
                src: "/img/assets/samples/d.png",
                link: "http://my.rothbury.co.nz/",
                desc: "Built with static HTML and javascript.  I developed this site, the design was provided by and external source."
        },
        {
                src: "/img/assets/samples/e.png",
                link: "https://www.savvykiwi.co.nz/",
                desc: "Built with Laravel.  I developed this site, the design was provided by and external source."
        },
        {
                src: "/img/assets/samples/f.png",
                link: "https://www.savvykiwi.co.nz/",
                desc: "Built with Laravel.  I developed this site, the design was provided by and external source."
        },
        {
                src: "/img/assets/samples/g.png",
                link: "http://www.seadragon.co.nz",
                desc: "Built with Wordpress.  I developed this site and worked with the designer."
        },
        {
                src: "/img/assets/samples/h.png",
                link: "http://www.seadragon.co.nz",
                desc: "Built with Wordpress.  I developed this site and worked with the designer."
        },
        {
                src: "/img/assets/samples/i.png",
                link: "http://www.seadragon.co.nz",
                desc: "Built with Wordpress.  I developed this site and worked with the designer."
        },
        {
                src: "/img/assets/samples/j.png",
                link: "http://prospectus.waikatodiocesan.school.nz",
                desc: "Built with SilverStripe. I developed this site and gave design input."
        },
        {
                src: "/img/assets/samples/k.png",
                link: "http://prospectus.waikatodiocesan.school.nz",
                desc: "Built with SilverStripe. I developed this site and gave design input."
        },
        {
                src: "/img/assets/samples/l.png",
                link: "cloudfarmer.co.nz",
                desc: "Built with Symfony. I built the Phone API and maintained AngularJS front end."
        }];


        var IMAGES_TEST =
        [{      
                name: "Waikato Diocesan Prospectus",
                src: ["/img/assets/samples/dio/1.png", "/img/assets/samples/dio/2.png", "/img/assets/samples/dio/3.png"],
                link: "http://prospectus.waikatodiocesan.school.nz",
                built: "SilverStripe",
                desc: (<div>I built the Waikato Diocesan prospectus site while making design tweaks to keep elements consistant and fresh.</div>),
                mode: 1
        },{     
                name: "Sea Dragon",
                src: ["/img/assets/samples/seadragon/1.png", "/img/assets/samples/seadragon/2.png", "/img/assets/samples/seadragon/3.png"],
                link: "http://www.seadragon.co.nz",
                built :"Wordpress",
                desc: (<div>I developed this site while working with a designer to get a quick turn around.</div>),
                mode: 2
        },
        {     
                name: "Harmonised",
                src: ["/img/assets/samples/harmonised/1.png", "/img/assets/samples/harmonised/2.png", "/img/assets/samples/harmonised/3.png"],
                link: "https://www.harmonised.co.nz/",
                built :"Silverstripe",
                desc: (<div>The harmonised website is single page site with a heavely modified admin interface. </div>),
                mode: 3
        },{     
                name: "Cloud Farmer",
                src: ["/img/assets/samples/agrecord/1.png"],
                link: "http://cloudfarmer.co.nz/",
                built :"Symfony",
                desc: (<div>I built an API that syncs with native phone applications, and maintained AngularJS on the front end.</div>),
                mode: 4
        },{     
                name: "SavvyKiwi",
                src: ["/img/assets/samples/savvy/1.png", "/img/assets/samples/savvy/2.png", "/img/assets/samples/savvy/3.png"],
                link: "https://www.savvykiwi.co.nz",
                built :"Laravel",
                desc: (<div>I built a custom CMS for the front sales pages. The Back end was built connecting to the same API's that the SavvyKiwi phone apps connected to.</div>),
                mode: 2
        }];
        
        

        function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
 
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        }

        IMAGES = shuffle(IMAGES);

        return (

            <div className="example-container">
               
                    {IMAGES_TEST.map(function(object, i){
                        if(object.mode == 1){    
                                return <LeftItem3 obj={object} key={i} />;
                        }
                        if(object.mode == 2){    
                                return <RightItem3 obj={object} key={i} />;
                        }
                        if(object.mode == 3){    
                                return <LeftItemSlit obj={object} key={i} />;
                        }
                        if(object.mode == 4){    
                                return <SingleRight obj={object} key={i} />;
                        }
                    })}
              
            </div>

        );
    }
});


 