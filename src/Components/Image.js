import React from 'react';

const Konva = window.Konva;
class Circle extends React.Component {
    state ={
        base64Image: null,  
    }
    

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if(nextProps.base64Image !== this.props.base64Image){
            this.setState({base64Image:nextProps.base64Image});
        }
    }

    shouldComponentUpdate(){
        console.log("updated props");
        return true
    }

    componentDidUpdate() {
        console.log("updated component");
        let image = new Image();
        image.src =`${this.state.base64Image}`;
        // console.log(image);
        image.addEventListener("load",() => {
            console.log("loaded");
            const konva = new Konva.Image({
                x:20,
                y:20,
                image,
                width:this.props.canvas.attrs.width,
                height:this.props.canvas.attrs.height,
                draggable:true,
            });
            this.props.layer.add(konva);
        });
    }

    componentDidMount(){
        console.log(this.props);
    }
    render() {
        return null
    }
}
export default Circle;