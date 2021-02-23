// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

//?? Exercise
// function UsernameForm({onSubmitUsername}) {
//   function handleSubmit(event){
//     event.preventDefault();
//     onSubmitUsername(event.target.elements.usernameInput.value)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="usernameInput">Username:</label>
//         <input id="usernameInput" type="text" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// function App() {
//   const onSubmitUsername = username => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }

//?? Extra Credit 1
// function UsernameForm({onSubmitUsername}) {
//   const usernameInputRef = React.useRef()

//   function handleSubmit(event) {
//     event.preventDefault()
//     onSubmitUsername(usernameInputRef.current.value)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="usernameInput">Username:</label>
//         <input id="usernameInput" type="text" ref={usernameInputRef} />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// function App() {
//   const onSubmitUsername = username => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }

//?? Extra Credit 2

// function UsernameForm({onSubmitUsername}) {
//   const [error, setError] = React.useState(null)

//   function handleSubmit(event) {
//     event.preventDefault()
//     onSubmitUsername(event.target.elements.usernameInput.value)
//   }

//   function handleChange(event) {
//     const {value} = event.target
//     const isLowerCase = value === value.toLowerCase()
//     setError(isLowerCase ? null : 'Username must be lower case')
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="usernameInput">Username:</label>
//         <input id="usernameInput" type="text" onChange={handleChange} />
//       </div>
//       <div role="alert" style={{color: 'red'}}>
//         {error}
//       </div>
//       <button disabled={Boolean(error)} type="submit">
//         Submit
//       </button>
//     </form>
//   )
// }

// function App() {
//   const onSubmitUsername = username => alert(`You entered: ${username}`)
//   return (
//     <div style={{minWidth: 400}}>
//       <UsernameForm onSubmitUsername={onSubmitUsername} />
//     </div>
//   )
// }

//?? Extra Credit 3
function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(username)
  }

  function handleChange(event) {
    setUsername(event.target.value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          onChange={handleChange}
          value={username}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return (
    <div style={{minWidth: 400}}>
      <UsernameForm onSubmitUsername={onSubmitUsername} />
    </div>
  )
}

export default App
