var React = require('react');
import classSet from 'classset';


export default React.createClass({
    render: function () {

        var classes = classSet({
            'card': true,
            'show': !this.props.hide,
            'hide': this.props.hide
        });

        return (

            <div className={classes}>
                <h1>Aaron Meredith</h1>
                <h2>Full Stack Web Developer</h2>
                <p>
                    Wellington, New Zealand
                    <br/>
                    aaron@aaron-m.co.nz
                </p> 
            </div>

        );
    }
});


