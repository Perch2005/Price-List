import React from 'react'
import './list-item.css'

const ListItem = ({data}) =>{
    return(
       <div className = {`list_item list_item_${data.index}`} >
           <div className = "list_item_wraper">
        <h3>{data.product}</h3>
       <ul className = "list_item_ul">
           <li>{`Price: ${data.price}$`}</li>
           <li>{`Color: ${data.color}`}</li>
       </ul>
       </div>
        </div>
    )
}

export default ListItem