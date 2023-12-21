import React from "react"
import { ColorBox } from "./Box.styled"


export const Box = ({color, dataId}) => {
  return(
    <ColorBox color={color} dataId={dataId}/>

  )
}