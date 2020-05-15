import React, { Component } from 'react'
import PropTypes from 'prop-types';

const Konva = window.Konva;

class Canvas extends Component {
    state ={
        canvas: null,
        width: null,
        height: null,
        layer: null,
    }
    componentDidMount() {
        const canvas = new Konva.Stage({ 
            container: this.c,
            height:this.props.height,
            width:this.props.width
        });
        console.log(canvas);
        const layer = new Konva.Layer();
        this.setState({canvas,layer});
        canvas.add(layer);
        layer.draw();
    }
    
    render() {
        // console.log(Konva);
        // console.log(this.state.canvas);
        const children = React.Children.map(this.props.children,children =>{
            return React.cloneElement(children,{
                canvas:this.state.canvas,
                layer:this.state.layer
            })
        });
        return (
            <React.Fragment>
                <canvas id="container" ref={c=> (this.c = c) } width= {this.props.width} height= {this.props.height}/>
                {this.state.canvas && children}
                <p>hello</p>
            </React.Fragment>
        )
    }
    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
    }
    static defaultProps = {
        width:600,
        height:400
    }
}

export default Canvas;
