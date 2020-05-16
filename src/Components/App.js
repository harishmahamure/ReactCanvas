import React from 'react';
import Canvas from './Canvas';
import Circle from './Circle';
import Image from './Image';
// import {Layer} from './fabric_canvas'
class App extends React.Component {
  state ={
    image: null,
    base64: null
  }
  handleChangeImage = e =>{
    console.log(e);
    this.reader = new FileReader();
    this.file = e.target.files[0];
    console.log(this.file);
    this.reader.addEventListener("load" ,(upload)=>{
      this.setState({
        image:upload.target
      },()=>{
        console.log(this.state.image);
      });
    });
    this.reader.readAsDataURL(this.file);
    setTimeout(()=>{
      this.setState({base64:this.state.image.result});
    },1000)
    

  }
  render() {
      
    return(
      <div>
         <Canvas>
             <Circle/>
             <Image base64={this.state.base64}/>
        </Canvas>
        <br></br>
        <input type="file" ref="file" name="file" id="file" onChange={this.handleChangeImage} encType="multipart/form-data" required/>
      </div>
    )
  }
}

export default App;