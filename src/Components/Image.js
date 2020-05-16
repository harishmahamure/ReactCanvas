import React, { Component } from 'react';

const Konva = window.Konva;
class Circle extends Component {
    state ={
        base64Image: null,
    }
    

    componentWillReceiveProps(nextProps) {

        if(nextProps.base64Image !== this.props.base64Image){
            this.setState({base64Image:nextProps.base64Image});
        }
    }

    shouldComponentUpdate(){
        return true
    }

    componentWillUpdate(){
        this.image = new Image();
        this.image.src =`${this.state.base64Image}`;
        this.image.addEventListener("load",() => {
            const konva = new Konva.Image({
                x:20,
                y:20,
                image:this.image,
                width:this.props.canvas.attrs.width/2,
                height:this.props.canvas.attrs.height/2,
                draggable:true,
            });
            this.props.layer.add(konva);
        });
    }
    componentDidUpdate() {
        let image = new Image();
        image.src =`${this.state.base64Image}`;
        console.log(image);
        image.addEventListener("load",() => {
            console.log("loaded");
            const konva = new Konva.Image({
                x:20,
                y:20,
                image,
                width:this.props.canvas.attrs.width/2,
                height:this.props.canvas.attrs.height/2,
                draggable:true,
            });
            this.props.layer.add(konva);
        });
    }

    componentDidMount() {
        Konva.Image.fromURL("https://static.canva.com/marketplace/contextualThumbnails/mobile_first_presentation%401x.png",
        (image) => {
            console.log(image)
            this.props.layer.add(image);
        })
    }
    
    render() {
        return null
    }
}
export default Circle;