import React from 'react';
import Vivus from 'vivus';
import Please from 'pleasejs';

export default class Branching extends React.Component {

constructor(props) {
    super(props);
    var c = Please.make_color({ golden: false, saturation: 1, colors_returned: 10 });
     this.state = {
      "color1": c[0] != "#NaN" ? c[0] : c[1],
      "color2": c[2] != "#NaN" ? c[2] : c[3],
      "color3": c[4] != "#NaN" ? c[4] : c[5]
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

      <svg
        id='branches'
        viewBox='0 0 38.782765 1392.148'
        {...this.props}
      >
        <style>
          {"\
            .color3,.navigation{\
              background-color:"+ this.state.color3 + ";\
            }\
            .color3t, h2, a, a:active, a:hover , h1{\
              color:"+ this.state.color3 + ";\
            }\
            .border-style-color3{\
              border:1px solid " + this.state.color3 + ";\
            }\
            "}
        </style>
        <path
          fill='none'
          stroke={this.state.color3}
          strokeWidth='1.5'
          d='M19.47 899.45c0-2.522.054-5.053.252-7.566.208-2.653.577-5.287 1.212-7.871 1.236-5.034 3.348-9.803 5.5-14.518 2.153-4.716 4.265-9.485 5.501-14.518 1.236-5.034 1.464-10.254 1.464-15.437l-.001-169.49c0-5.184-.227-10.404-1.464-15.437-1.236-5.034-3.348-9.803-5.5-14.518s-4.265-9.485-5.501-14.518c-1.236-5.034-1.464-10.254-1.464-15.437'
          style={{
            colorRendering: 'auto',
            color: '#000',
            isolation: 'auto',
            mixBlendMode: 'normal',
            shapeRendering: 'auto',
            solidColor: '#000',
            imageRendering: 'auto',
          }}
        />
        <path
          fill='none'
          stroke={this.state.color1}
          strokeWidth='1.5'
          d='M5.47 1392.13V899.44c0-5.184.227-10.404 1.464-15.437 1.236-5.034 3.348-9.802 5.5-14.518 2.153-4.715 4.265-9.484 5.501-14.518 1.236-5.034 1.464-10.254 1.464-15.437-.004-80.393.003-319.07.003-399.47'
        />
        <g
          transform='translate(567.96 209.93)'
        >
          <path
            fill='none'
            stroke={this.state.color2}
            strokeWidth='1.5'
            d='M-562.49-209.93V630.2c0 5.184.227 10.404 1.464 15.437 1.236 5.034 3.348 9.802 5.5 14.518 2.152 4.716 4.265 9.484 5.501 14.518 1.236 5.034 1.464 10.254 1.464 15.437v53.023'
            style={{
              colorRendering: 'auto',
              color: '#000',
              isolation: 'auto',
              mixBlendMode: 'normal',
              shapeRendering: 'auto',
              solidColor: '#000',
              imageRendering: 'auto',
            }}
          />
          <g
            fillRule='evenodd'
          >
            <circle
              className='circle' data-ignore="true"
              cx='-534.43'
              cy='458.4'
              r='5.253'
              fill={this.state.color3}
              style={{
                colorRendering: 'auto',
                color: '#000',
                isolation: 'auto',
                mixBlendMode: 'normal',
                shapeRendering: 'auto',
                solidColor: '#000',
                imageRendering: 'auto',
              }}
            />
            <circle
              className='circle' data-ignore="true"
              cx='-534.5'
              cy='515.46'
              r='5.253'
              fill={this.state.color3}
              style={{
                colorRendering: 'auto',
                color: '#000',
                isolation: 'auto',
                mixBlendMode: 'normal',
                shapeRendering: 'auto',
                solidColor: '#000',
                imageRendering: 'auto',
              }}
            />
            <circle
              className='circle' data-ignore="true"
              cx='-548.6'
              cy='572.47'
              r='5.253'
              fill={this.state.color1}
              style={{
                colorRendering: 'auto',
                color: '#000',
                isolation: 'auto',
                mixBlendMode: 'normal',
                shapeRendering: 'auto',
                solidColor: '#000',
                imageRendering: 'auto',
              }}
            />
            <circle
              className='circle' data-ignore="true"
              cx='-562.71'
              cy='629.43'
              r='5.253'
              fill={this.state.color2}
              style={{
                colorRendering: 'auto',
                color: '#000',
                isolation: 'auto',
                mixBlendMode: 'normal',
                shapeRendering: 'auto',
                solidColor: '#000',
                imageRendering: 'auto',
              }}
            />
            <circle
              className='circle' data-ignore="true"
              cx='-548.57'
              cy='686.4'
              r='5.253'
              fill={this.state.color2}
              style={{
                colorRendering: 'auto',
                color: '#000',
                isolation: 'auto',
                mixBlendMode: 'normal',
                shapeRendering: 'auto',
                solidColor: '#000',
                imageRendering: 'auto',
              }}
            />
            <circle
              className='circle' data-ignore="true"
              cx='-534.74'
              cy='458.68'
              r='5.253'
              fill={this.state.color3}
              style={{
                colorRendering: 'auto',
                color: '#000',
                isolation: 'auto',
                mixBlendMode: 'normal',
                shapeRendering: 'auto',
                solidColor: '#000',
                imageRendering: 'auto',
              }}
            />
          </g>
          <path
            fill='none'
            stroke={this.state.color2}
            strokeWidth='1.5'
            d='M-562.55 349.55c0-2.522.054-5.053.252-7.566.208-2.653.577-5.287 1.212-7.871 1.236-5.034 3.348-9.803 5.5-14.518 2.153-4.716 4.265-9.485 5.501-14.518 1.236-5.034 1.464-10.254 1.464-15.437'
            style={{
              colorRendering: 'auto',
              color: '#000',
              isolation: 'auto',
              mixBlendMode: 'normal',
              shapeRendering: 'auto',
              solidColor: '#000',
              imageRendering: 'auto',
            }}
          />
          <circle
            className='circle' data-ignore="true"
            cx='-548.71'
            cy='401.4'
            r='5.253'
            fill={this.state.color1}
            fillRule='evenodd'
            style={{
              colorRendering: 'auto',
              color: '#000',
              isolation: 'auto',
              mixBlendMode: 'normal',
              shapeRendering: 'auto',
              solidColor: '#000',
              imageRendering: 'auto',
            }}
          />
          <circle
            className='circle' data-ignore="true"
            cx='-562.5'
            cy='354.68'
            r='5.253'
            fill={this.state.color2}
            fillRule='evenodd'
            style={{
              colorRendering: 'auto',
              color: '#000',
              isolation: 'auto',
              mixBlendMode: 'normal',
              shapeRendering: 'auto',
              solidColor: '#000',
              imageRendering: 'auto',
            }}
          />
          <path
            fill='none'
            stroke={this.state.color1}
            strokeWidth='1.5'
            d='M-562.55 172.97c0 2.522.054 5.053.252 7.566.208 2.653.577 5.287 1.212 7.871 1.236 5.034 3.348 9.803 5.5 14.518 2.153 4.716 4.265 9.484 5.501 14.518 1.236 5.034 1.464 10.254 1.464 15.437'
            style={{
              colorRendering: 'auto',
              color: '#000',
              isolation: 'auto',
              mixBlendMode: 'normal',
              shapeRendering: 'auto',
              solidColor: '#000',
              imageRendering: 'auto',
            }}
          />
          <path
            fill='none'
            stroke={this.state.color2}
            strokeWidth='1.5'
            d='M-562.55 801.37c0-2.522.054-5.053.252-7.566.208-2.653.577-5.287 1.212-7.871 1.236-5.034 3.348-9.803 5.5-14.518 2.153-4.716 4.265-9.485 5.501-14.518 1.236-5.034 1.464-10.254 1.464-15.437'
            style={{
              colorRendering: 'auto',
              color: '#000',
              isolation: 'auto',
              mixBlendMode: 'normal',
              shapeRendering: 'auto',
              solidColor: '#000',
              imageRendering: 'auto',
            }}
          />
          <circle
            className='circle' data-ignore="true"
            cx='-548.64'
            cy='743.5'
            r='5.253'
            fill={this.state.color2}
            fillRule='evenodd'
            style={{
              colorRendering: 'auto',
              color: '#000',
              isolation: 'auto',
              mixBlendMode: 'normal',
              shapeRendering: 'auto',
              solidColor: '#000',
              imageRendering: 'auto',
            }}
          />
          <g
            fill={this.state.color1}
            fillRule='evenodd'
          >
            <circle
              className='circle' data-ignore="true"
              cx='-562.6'
              cy='800.47'
              r='5.253'
              style={{
                colorRendering: 'auto',
                color: '#000',
                isolation: 'auto',
                mixBlendMode: 'normal',
                shapeRendering: 'auto',
                solidColor: '#000',
                imageRendering: 'auto',
              }}
            />
            <circle
              className='circle' data-ignore="true"
              cx='-548.62'
              cy='230.65'
              r='5.253'
              style={{
                colorRendering: 'auto',
                color: '#000',
                isolation: 'auto',
                mixBlendMode: 'normal',
                shapeRendering: 'auto',
                solidColor: '#000',
                imageRendering: 'auto',
              }}
            />
            <circle
              className='circle' data-ignore="true"
              cx='-548.74'
              cy='287.65'
              r='5.253'
              style={{
                colorRendering: 'auto',
                color: '#000',
                isolation: 'auto',
                mixBlendMode: 'normal',
                shapeRendering: 'auto',
                solidColor: '#000',
                imageRendering: 'auto',
              }}
            />
            <circle
              className='circle' data-ignore="true"
              cx='-562.53'
              cy='173.65'
              r='5.253'
              style={{
                colorRendering: 'auto',
                color: '#000',
                isolation: 'auto',
                mixBlendMode: 'normal',
                shapeRendering: 'auto',
                solidColor: '#000',
                imageRendering: 'auto',
              }}
            />
            <circle
              className='circle' data-ignore="true"
              cx='-548.53'
              cy='230.65'
              r='5.253'
              style={{
                colorRendering: 'auto',
                color: '#000',
                isolation: 'auto',
                mixBlendMode: 'normal',
                shapeRendering: 'auto',
                solidColor: '#000',
                imageRendering: 'auto',
              }}
            />
          </g>
        </g>
      </svg>
    );
  }
}
