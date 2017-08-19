import React from 'react';
import Me from './components/Me';

export default class Home extends React.Component 
{
    render() 
    {
        return (
            <div className="container-home">
                <Me hide={true} />

                <div className="card card1">
                    <ul>
                        <li>
                            <strong>Environments</strong>
                            <ul>
                                <li>EC2</li>
                                <li>S3</li>
                                <li>CloudFront</li>
                                <li>Linux</li>
                                <li>Apache</li>
                                <li>Node.js</li>
                                <li>MySql</li>
                                <li>Bash</li>
                            </ul>
                        </li>

                        <li>
                            <strong>PHP</strong>
                            <ul>
                                <li>Symfony</li>
                                <li>Laravel</li>
                                <li>SilverStripe</li>
                                <li>Wordpress</li>
                            </ul>
                        </li>

                        <li>
                            <strong>JavaScript</strong>
                            <ul>
                                <li>React</li>
                                <li>AngularJS</li>
                                <li>Vue.js</li>
                            </ul>
                        </li>

                        <li>
                            <strong>Graphics</strong>
                            <ul>
                                <li>Photoshop / Gimp</li>
                                <li>Inkscape / Illustrator</li>
                            </ul>
                        </li>

                        <li>HTML</li>
                        <li>CSS, Sass, Less</li>
                        <li>jQuery</li>
                        <li>Bootstrap</li>

                    </ul>
                </div>

                <Me hide={false} />
            </div>

        );
    }
}
