import React from 'react';
import Canvas from './Canvas';
import Circle from './Circle';
import Image from './Image';
// import {Layer} from './fabric_canvas'
class App extends React.Component {
  state ={
    image: null,
    base64Image: null
  }
  handleChangeImage = e =>{
    this.reader = new FileReader();
    this.file = e.target.files[0];
    this.reader.addEventListener("load" ,(upload)=>{
      this.setState({
        image:upload.target
      },()=>{
        console.log(this.state.image);
      });
    });
    this.reader.readAsDataURL(this.file);
    setTimeout(()=>{
      this.setState({base64Image:this.state.image.result});
    },1000)
  }
  renderPreview = () => {
    if(!this.state.base64Image){
      return null;
    } 
    return (
       <div>
         <img src={this.state.base64Image} alt="" width="100" height="100"/>
       </div>
     )
  }
  render() {
    return(
      
      <div>
         <Canvas>
             <Circle/>
             <Image base64Image={this.state.base64Image}/>
        </Canvas>
        <br></br>
        <input type="file" ref="file" name="file" id="file" onChange={this.handleChangeImage} encType="multipart/form-data" required/>
          <span>{this.renderPreview()}</span>
      </div>
    )
  }
}

export default App;