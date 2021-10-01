import React from 'react'
import Save from './Save.js'
import List from './List.js'
import monchService from '../services/monch'

const Left = ({list, setList, title, pageURL}) => {


    return (
        <div>
        {title}
            {list.map((item, idx)=>
            <List key={idx} item={item} list={list} setList={setList} pageURL={pageURL}/>
            )}
            <Save list={list} pageURL = {pageURL} />
        </div>
    )

    

}

export default Left