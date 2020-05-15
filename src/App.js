import React from 'react';
import Canvas from './Canvas';
import Circle from './Circle';
// import {Layer} from './fabric_canvas'
class App extends React.Component {
  
  render() {
    console.log(window)
    return(
      <div>
         <Canvas>
             <Circle/>
        </Canvas>
      </div>
    )
  }
}

export default App;