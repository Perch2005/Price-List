import React from 'react'
import ListItem from '../list-item'

import './list.css'
const listData = [
    {
        id:1,
        product:'hat',
        price:5,
        color:'blue'
    },
    {
        id:2,
        product:'scarf',
        price:10,
        color:'gray'
    },
    {
        id:3,
        product:'boots',
        price:20,
        color:'brown'
    },
    {
        id:4,
        product:'dress',
        price:30,
        color:'purple'
    },
    {
        id:5,
        product:'coat',
        price:15,
        color:'black'
    }


]
const List = () =>{
   
    return(
        <div className = "list">
            
         {
             listData.map((data) => (<ListItem data = {data}/>))
         }
        </div>
    )
}

export default List