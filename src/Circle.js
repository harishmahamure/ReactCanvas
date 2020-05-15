import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Konva = window.Konva;
class Circle extends Component {
    
    
    componentDidMount() {
        console.log(this.props.canvas.attrs.height);
        const circle = new Konva.Circle({
            height: this.props.canvas.attrs.height,
            width: this.props.canvas.attrs.width,
            radius: 40,
            fill: "red"
        });
        this.props.layer.add(circle);
        this.props.layer.draw();
    }
    
    render() {
        return null
    }
}
export default Circle;