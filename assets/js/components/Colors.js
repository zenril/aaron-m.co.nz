import React from 'react';
import Vivus from 'vivus';
import Please from 'pleasejs';

export default class Branching extends React.Component {

constructor(props) {
    super(props);
    var c = Please.make_color({ golden: false, saturation: 1, colors_returned: 10 });
     this.state = {
      "color1": c[0] != "#aN" ? c[0] : c[1],
      "color2": c[2] != "#aN" ? c[2] : c[3],
      "color3": c[4] != "#aN" ? c[4] : c[5]
    };
  }

  componentDidMount() {
    var t = new Vivus('branches');
    t.play(1, function (obj) {
      obj.el.classList.add('finished');
    })
  }

  render() {
    return (
        <style>
            {`
            .color3,.navigation{
              background-color:"+ this.state.color3 + ";
            }
            .color3t, h2, a, a:active, a:hover , h1{
              color:"+ this.state.color3 + ";
            }
            .border-style-color3{
              border:1px solid " + this.state.color3 + ";
            }
           `}
        </style>

    );
  }
}
