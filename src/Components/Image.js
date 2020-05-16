import React, { Component } from 'react'


const Konva = window.Konva;
class Circle extends Component {
    
    
    componentDidMount() {
        this.image = new window.Image();
        this.image.src ="https://www.ikea.com/sg/en/images/products/havsta-coffee-table__0735534_PE739991_S5.JPG?f=m";
        this.image.addEventListener('load',()=>{
            this.konva = new Konva.Image({
                x:0,
                y:0,
                image:this.image,
                width:this.props.canvas.attrs.width/2,
                height:this.props.canvas.attrs.height/2,
                draggable:true,
            });
            this.props.layer.add(this.konva);
        });
        
        
    }
    
    render() {
        console.log(this.props.base64);
        return null
    }
}
export default Circle;