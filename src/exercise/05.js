// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

//?? Exercise 1
// const smallBox = (
//   <div
//     className="box box--small"
//     style={{fontStyle: 'italic', backgroundColor: 'lightblue'}}
//   >
//     small lightblue box
//   </div>
// );

// const mediumBox = (
//   <div
//     className="box box--medium"
//     style={{fontStyle: 'italic', backgroundColor: 'pink'}}
//   >
//     medium pink box
//   </div>
// );

// const largeBox = (
//   <div
//     className="box box--large"
//     style={{fontStyle: 'italic', backgroundColor: 'orange'}}
//   >
//     large orange box
//   </div>
// );

// function App() {
//   return (
//     <div>
//       {smallBox}
//       {mediumBox}
//       {largeBox}
//     </div>
//   )
// }

//?? Extra Credit 1 : Box component
// function Box(props){
//   return <div
//     className = {`box ${props.className}`}
//     style = {props.style}
//   >
//     {props.children}
//   </div>
// }

// function Box({style, className = '', ...otherProps}) {
//   return (
//     <div
//       className={`box ${className}`}
//       style={{fontStyle: 'italic', ...style}}
//       {...otherProps}
//     />
//   )
// }

// function App(){
//   return (
//     <div>
//       <Box className="box--small" style={{backgroundColor: 'lightblue'}}>small lightblue box</Box>
//       <Box className="box--medium" style={{backgroundColor: 'pink'}}>medium pink box</Box>
//       <Box className="box--large" style={{backgroundColor: 'orange'}}>large orange box</Box>
//     </div>
//   )
// }

//?? Extra Credit 2 : Box component

// function Box(props){
//   let className;
//   switch (props.size) {
//     case "small":
//       className = "box--small";
//       break;
//     case "medium":
//       className = "box--medium";
//       break;
//     case "large":
//       className = "box--large";
//       break;
//   }
//   return <div
//     className = {`box ${className}`}
//     style = {props.style}
//   >
//     {props.children}
//   </div>
// }

function Box({style, size, className = '', ...otherProps}) {
  const sizeClassName = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${className} ${sizeClassName}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
    </div>
  )
}

export default App
