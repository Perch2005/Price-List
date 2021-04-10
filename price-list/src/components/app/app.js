import React,{useState} from 'react'
import List from '../list'
import './app.css'

const App = () =>{
    const [listDatas,setListDatas] = useState([
        {
            id:1,
            index:0,
            product:'hat',
            price:5,
            color:'blue'
        },
        {
            id:2,
            index:1,
            product:'scarf',
            price:10,
            color:'gray'
        },
        {
            id:3,
            index:2,
            product:'boots',
            price:20,
            color:'brown'
        },
        {
            id:4,
            index:3,
            product:'dress',
            price:30,
            color:'purple'
        },
        {
            id:5,
            index:4,
            product:'coat',
            price:15,
            color:'black'
        }
    
    
    ])
    const [listData,setListData] = useState(listDatas[0])
    
    const nextItem = () => {
        const newIndex = listData.index + 1
        setListData(listDatas[newIndex])
    }
    const prevItem = () => {
        const newIndex = listData.index - 1
        setListData(listDatas[newIndex])
    }
    return(
        <div>
            <div className = "slider_buttons_group">
            <button className = "slider_button" disabled = {listData.index === listDatas.length - 1} onClick = {nextItem}>Next</button>
            <button className = "slider_button" disabled = {listData.index === 0} onClick = {prevItem}>Prev</button>
            </div>

<List listDatas = {listDatas} listData = {listData} />
        </div>
    )
}

export default App