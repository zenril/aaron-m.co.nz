var React = require('react');
import LeftItem3 from '../LeftItem3.js';
import RightItem3 from '../RightItem3.js';

export default React.createClass({
    render: function () {

        
        
        var IMAGES =
        [{
                src: "/img/samples/a.png",
                link: "https://www.harmonised.co.nz/",
                desc: "Built with SilverStripe. I developed the site and gave design input."
        },
        {
                src: "/img/samples/b.png",
                link: "https://www.printicular.com/nz/",
                desc: "Logo I developed for Printicular brand, a photo printing app developed by MEA"
        },        
        {
                src: "/img/samples/d.png",
                link: "http://my.rothbury.co.nz/",
                desc: "Built with static HTML and javascript.  I developed this site, the design was provided by and external source."
        },
        {
                src: "/img/samples/d.png",
                link: "http://my.rothbury.co.nz/",
                desc: "Built with static HTML and javascript.  I developed this site, the design was provided by and external source."
        },
        {
                src: "/img/samples/e.png",
                link: "https://www.savvykiwi.co.nz/",
                desc: "Built with Laravel.  I developed this site, the design was provided by and external source."
        },
        {
                src: "/img/samples/f.png",
                link: "https://www.savvykiwi.co.nz/",
                desc: "Built with Laravel.  I developed this site, the design was provided by and external source."
        },
        {
                src: "/img/samples/g.png",
                link: "http://www.seadragon.co.nz",
                desc: "Built with Wordpress.  I developed this site and worked with the designer."
        },
        {
                src: "/img/samples/h.png",
                link: "http://www.seadragon.co.nz",
                desc: "Built with Wordpress.  I developed this site and worked with the designer."
        },
        {
                src: "/img/samples/i.png",
                link: "http://www.seadragon.co.nz",
                desc: "Built with Wordpress.  I developed this site and worked with the designer."
        },
        {
                src: "/img/samples/j.png",
                link: "http://prospectus.waikatodiocesan.school.nz",
                desc: "Built with SilverStripe. I developed this site and gave design input."
        },
        {
                src: "/img/samples/k.png",
                link: "http://prospectus.waikatodiocesan.school.nz",
                desc: "Built with SilverStripe. I developed this site and gave design input."
        },
        {
                src: "/img/samples/l.png",
                link: "cloudfarmer.co.nz",
                desc: "Built with Symfony. I built the Phone API and maintained AngularJS front end."
        }];


        var IMAGES_TEST =
        [{      
                name: "Waikato Diocesan Prospectus",
                src: ["/img/samples/dio/1.png", "/img/samples/dio/2.png", "/img/samples/dio/3.png"],
                link: "http://prospectus.waikatodiocesan.school.nz",
                built: "SilverStripe",
                desc: (<div>I Built the Waikato Diocesan prospectus site while making design tweaks to keep elements consistant and fresh.</div>),
                mode: 1
        },{     
                name: "Sea Dragon",
                src: ["/img/samples/seadragon/1.png", "/img/samples/seadragon/2.png", "/img/samples/seadragon/3.png"],
                link: "http://www.seadragon.co.nz",
                built :"Wordpress",
                desc: (<div>I developed this site while working with the a designer to get a quick turn around.</div>),
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
                    })}
              
            </div>

        );
    }
});


 