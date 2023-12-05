import React, { useState, ChangeEvent, useCallback } from 'react'
import './App.css'
import { ChildArea } from './component/ChildArea'

const inputStyle = {
  backgroundColor: 'white',
  border: '1px solid #ccc',
  margin: '10px',
  padding: '5px',
  borderRadius: '3px',
  // 他のスタイルプロパティを追加できます
}

const buttonStyle = {
  backgroundColor: 'green',
  border: '1px solid #888',
  borderColor: 'black',
  padding: '8px 15px',
  margin: '10px',
  borderRadius: '5px',
  color: 'white',
  fontSize: '16px',
  // 他のスタイルプロパティを追加できます
}

// パターン1
// パターン2
function App() {
  console.log('App')
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)
  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value)
  const onChileOpen = () => setOpen(!open)

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} style={inputStyle}/>

      <button style={buttonStyle} onClick={onChileOpen}>表示</button>

      <ChildArea open={open} />
    </div>

  )
}


// パターン3
// function App() {
//   console.log('App')
//   const [text, setText] = useState('')
//   const [open, setOpen] = useState(false)
//
//   const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value)
//
//   const onChileOpen = () => setOpen(!open)
//
//   const onClickClose = () => setOpen(false)
//
//   return (
//     <div className="App">
//       <input value={text} onChange={onChangeText} style={inputStyle}/>
//
//       <button style={buttonStyle} onClick={onChileOpen}>表示</button>
//
//       <ChildArea open={open} onClickClose={onClickClose}/>
//
//     </div>
//   )
// }

// パターン4
// function App() {
//   console.log('App')
//   const [text, setText] = useState('')
//   const [open, setOpen] = useState(false)
//
//   const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value)
//
//   const onChileOpen = () => setOpen(!open)
//
//   const onClickClose = useCallback(() => setOpen(false), [])
//
//   return (
//     <div className="App">
//       <input value={text} onChange={onChangeText} style={inputStyle}/>
//
//       <button style={buttonStyle} onClick={onChileOpen}>表示</button>
//
//       <ChildArea open={open} onClickClose={onClickClose}/>
//       {/*<ChildArea open={open} onClickClose={()=>onClickClose}/>*/}
//
//     </div>
//   )
// }

export default App
