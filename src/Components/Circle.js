import React from 'react'

const Konva = window.Konva;
class Circle extends React.Component {

    componentDidMount() {
        const y =  this.props.canvas.attrs.height/2;
        const x = this.props.canvas.attrs.width/2;
        const circle = new Konva.Circle({
            y,
            x,
            radius: 200,
            fill: "red",
            draggable:true
        });
        this.props.layer.add(circle);
        this.props.layer.draw();
    }
    
    render() {
        return null
    }

}
export default Circle;