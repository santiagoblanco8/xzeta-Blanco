import React from 'react'

export default function TestVocal() {

function handleOnKeyDown(evt) {
    do (evt.preventDefault())
    while(
        evt.altKey === true
    )   
}


  return (
    <input onKeyDown={handleOnKeyDown}></input>
  )
}
