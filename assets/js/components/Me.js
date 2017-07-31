var React = require('react');
import classSet from 'classset';


export default React.createClass({
    render: function () {

        var classes = classSet({
            'card': true,
            'isamea': true, 
            'show-state': !this.props.hide,
            'hide-state': this.props.hide
        });

        return (

            <div className={classes}>
                <h1><strong>Aaron Meredith</strong></h1>
                <h2 className='color3t'>Full Stack Web Developer</h2>
                <p>
                    Wellington, New Zealand
                    <br/>
                    aaron@aaron-m.co.nz
                    <div>
                        <a target="_blank" href='/assets/docs/aaron-meredith-cv.pdf'>View my CV</a>
                    </div>
                    <div className="jobs">
                        <h2>
                            Work History
                        </h2>
                        <div className='row job-position'>

                            <div className='col-sm-3 fex name'>
                                <p><strong>MEA Mobile</strong></p>
                                <p>Wellington, New Zealand</p>
                                <p>Aug 2012 - Present</p>
                            </div>

                            <div className='col-sm-1 line fex'>
                                <div className="line-bar color3">
                                    <div className="line-ball color3"></div>
                                </div>
                            </div>

                            <div className="col-sm-8 fex description">
                                <p><strong>Web Developer</strong></p>
                                <p>Developing and maintaining the front end and back end functionality of
                                websites.</p>
                                <p>Developing and maintaining API's.</p>
                                <p>Engaging with clients during design, development and support of projects.</p>
                                <p>Writing cross-browser, responsive, compliant HTML5, CSS3 & JavaScript</p>
                                <p>Using tools that include Gulp, Webpack, Sass, Composer.</p>
                                <p>Managing Linux based Amazon Ec2 servers for hosting.</p>
                                <p>Designing buttons, banners, logos for websites</p>
                            </div>
                            <div className='clearfix'></div>
                        </div>
    
                        <div className='row job-position'> 
                            <div className='col-sm-3 fex name'>
                                <p><strong>Rimuhosting</strong></p>
                                <p>Cambridge, New Zealand</p>
                                <p>Nov 2009 - Aug 2012</p>
                            </div>

                            <div className='col-sm-1 line fex'>
                                <div className="line-bar color3">
                                    <div className="line-ball color3"></div>
                                </div>
                            </div>
                            
                            <div className="col-sm-8 fex description">
                                <p><strong>Web Developer / Desiginer</strong></p>
                                <p>This was a full time paid internship during the summer break of the second year</p>
                                of study. After the internship I took on a full time position.
                                <p>Frontend development which included Java, JSP, Servlets, Javascript, CSS</p>

                            </div>
                            <div className='clearfix'></div>
                        </div>
                    </div>
                </p>
            </div>

        );
    }
});


