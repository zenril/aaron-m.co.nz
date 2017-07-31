var React = require('react');
import classSet from 'classset';


export default React.createClass({
    render: function () {

        var classes = classSet({
            'card': true,
            'show-state': !this.props.hide,
            'hide-state': this.props.hide
        });

        return (

            <div className={classes}>
                <h1>Aaron Meredith</h1>
                <h2>Full Stack Web Developer</h2>
                <p>
                    Wellington, New Zealand
                    <br/>
                    aaron@aaron-m.co.nz
                    <div>
                        <a href=''>My CV</a>
                    </div>
                </p>
            </div>

        );
    }
});


