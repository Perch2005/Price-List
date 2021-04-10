import React from 'react'
import ListItem from '../list-item'
import './list.css'


const List = ({listDatas,listData}) =>{

    return(
        <div className = "col">
        <div className = {`list_slider activ_slider_${listData.index}`}>
<div className = "list_slider_wraper" style = {{
    'transform': `translateX(-${listData.index*(100/listDatas.length)}%)`
}}>
         {
             listDatas.map((data) => (<ListItem data = {data}/>))
         }
         
         </div>
        </div>
        </div>
    )
}

export default List