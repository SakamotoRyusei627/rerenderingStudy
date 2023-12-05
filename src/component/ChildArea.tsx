import React, { memo } from 'react'

const divStyle = {
  width: '100%',
  height: '200px',
  backgroundColor: 'red'
}

const buttonStyle = {
  backgroundColor: 'blue',
  border: '1px solid #888',
  padding: '8px 15px',
  margin: '10px',
  borderRadius: '5px',
  color: 'white',
  fontSize: '16px',
  // 他のスタイルプロパティを追加できます
}

// パターン1
type Props = {
  open: boolean
}
export function ChildArea({ open }: Props) {
  console.log('ChildArea')
  // @ts-ignore
  const data = [...Array(2000).keys()]
  data.forEach(()=>{
    console.log('重たい処理')
  })
  return (
    <>
      {open ? (<div style={divStyle}><p>子コンポーネント</p></div>) : null}

    </>
  )
}

// パターン2
// type Props = {
//   open: boolean
// }
// export const ChildArea =memo( ({ open }: Props)=> {
//   console.log('ChildArea')
//   // @ts-ignore
//   const data = [...Array(2000).keys()]
//   data.forEach(()=>{
//     console.log('重たい処理')
//   })
//   return (
//     <>
//       {open ? (<div style={divStyle}><p>子コンポーネント</p></div>) : null}
//
//     </>
//   )
// })

// パターン3
// パターン4
// type Props = {
//   open: boolean
//   onClickClose?: () => void
// }
// export const ChildArea = memo(({ open,onClickClose }: Props) => {
//   console.log('ChildArea')
//
//   // @ts-ignore
//   const data = [...Array(2000).keys()]
//   data.forEach(() => {
//     console.log('重たい処理')
//   })
//   return (
//     <>
//       {open ? (
//         <div style={divStyle}>
//           <p>子コンポーネント</p>
//           <button style={buttonStyle} onClick={onClickClose}>閉じる</button>
//         </div>
//       ) : null}
//
//     </>
//   )
// })
