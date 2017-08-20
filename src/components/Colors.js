import React from 'react';
import Please from 'pleasejs';
import col from 'color';

let instance = null;

export default class Colors 
{

    constructor() 
    {
    
        if(!instance)
        {
            instance = this;
        }

        var c = Please.make_color(
            { 
                golden: false,
                saturation: 1,
                colors_returned: 20 
            }, 
            {
                scheme_type: 'complementary'
            }
        );

        this.colors = [
        ];
        c.forEach((element) => 
        {
            if(element.length == 7)
            {
                this.colors.push(element);
            }
        }, this);

        this.color1 = this.colors[0];
        this.color2 = this.colors[1];
        this.color3 = this.colors[2];

        this.light3 = col( this.color3 ).mix(col("white"), 0.8);

        return instance;
    }

    render() 
    {
        var self = this;
        return () => (
            <style>
                {`
              .color3,.navigation{
                background-color:`+ self.color3 + `;
              }
              .color3t, h2, a, a:active, a:hover , h1{
                color:`+ self.color3 + `;
              }
              .border-style-color3{
                border:1px solid ` + self.color3 + `;
              }

              code, table td{
                background:` + self.light3 + `;
              }

              pre code {
                border-left:5px solid ` + self.color3 + `;
              }
              `}
            </style>

        );
    }
}

Colors.displayName = "Colors";
