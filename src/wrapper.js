import React, {Component} from 'react';
import Konva from 'konva';
export default class extends Component{
    constructor(props){
        super(props);
        this.stage= React.createRef();
    }
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
    
    componentDidMount(){
        console.log(this.stage.current)
        let stage = new Konva.Stage({
            width:1024,
            height:1024,
            container: this.stage.current,
        });
        const layer = new Konva.Layer();
        const circle = new Konva.Circle({
            height: 1024/2,
            width:1024/2,
            radius:20,
            fill:'red'
        })
        layer.add(circle);
        stage.add(layer);
        layer.draw();
        console.log(stage)
    }
    
    
    
    render(){
        return(
            <canvas id="container" ref={this.stage}/>
        )
    }
}
