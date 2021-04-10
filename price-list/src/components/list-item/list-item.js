import React from 'react'
import './list-item.css'

const ListItem = ({data}) =>{
    return(
       <div className = "list_item_wraper">
           <div className = "list_item">
        <h3>Prices</h3>
       <ul className = "list_item_ul">
           <li>{`${data.product}: ${data.price}$`}</li>
           <li>{`color: ${data.color}`}</li>
       </ul>
       </div>
        </div>
    )
}

export default ListItem