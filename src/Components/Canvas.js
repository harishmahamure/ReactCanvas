import React from 'react'
import PropTypes from 'prop-types';
import mime from 'mime';
const Konva = window.Konva;
const height = window.innerHeight-100;
const width = window.innerWidth-100;

class Canvas extends React.Component {
    state ={
        canvas: null,
        width: null,
        height: null,
        layer: null,
        children: null,
    }
    componentDidMount() {
        console.log("Mounted");
         this.canvas = new Konva.Stage({ 
            container: this.c,
            height,
            width
        });
        this.layer = new Konva.Layer();
        this.setState({canvas:this.canvas,layer:this.layer});
        this.canvas.add(this.layer);
        this.layer.draw();
    }
    componentWillReceiveProps(nextProps){

    }
    shouldComponentUpdate(){
        return true
    }
    componentWillUpdate(){
        this.canvas.add(this.layer);
        this.layer.draw();
    }
    handleClick = e => {
        console.log(mime)
        function makeFile(){
            return{
                mime: 'image/png',
                file:"canvas.png",
                contents:this.state.canvas.toDataURL({pixelRatio:3})
            }
        }
        makeFile();
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
                <div id="container" ref={c=> (this.c = c) }>
                </div>
                {this.state.canvas && children}
                <button onClick={this.handleClick}>
                    Download copy
                </button>
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
