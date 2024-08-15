import { Chip } from '@mui/material'
import React from 'react'
import { IoIosClose } from "react-icons/io";
import { BsPlus } from "react-icons/bs";

const CustomChip = ({onClick,label, status}) => {
  return (
    <Chip
    label={label}
    onDelete={onClick}
    onClick={onClick} 
    deleteIcon={status ? <IoIosClose /> : <BsPlus />}
    variant={status ? "outlined" : "filled"}
    sx={{bgcolor:status ? "rgb(from #0071D4 r g b / 8%)" : "", minWidth:80}}
    color={status ? "primary" : "default"}
  />
  )
}

export default CustomChip