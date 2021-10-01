import React, { useState } from 'react'
import Save from './Save.js'
import List from './List.js'
import Welcome from './Welcome.js'
import monchService from '../services/monch'

const Left = ({list, setList, title, date, pageURL, name, setName}) => {
 
    const handleNameSubmission = () => {
        const userName = document.getElementById('name-input').value 
        setName(userName)
    }
    if (pageURL !== '' && name === ''){
        return (
        <div>
            <div id='list-title'>{title}
            </div>
            <div>{date.split('T')[0]}</div>
            <div>
                <div>Please enter your name: <input id='name-input' type='text'></input></div>
                <button onClick={handleNameSubmission} id='submit-name'>Submit</button>
            </div>
        </div>
        )
    }

    return (
        <div>
            <Welcome name={name}/>
        <div id='list-title'>
            {title}
        </div>

            {list.map((item, idx)=>
            <List key={idx} item={item} list={list} setList={setList} pageURL={pageURL} name={name}/>
            )}
            <Save list={list} pageURL = {pageURL} />
        </div>
    )

    

}

export default Left