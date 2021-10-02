import React, { useState } from 'react'
import Save from './Save.js'
import List from './List.js'
import Welcome from './Welcome.js'


const Left = ({list, setList, title, date, pageURL, name, setName}) => {
 
    console.log('date', date)
    const handleNameSubmission = () => {
        const userName = document.getElementById('name-input').value 
        setName(userName)
    }
    if (pageURL !== '' && name === ''){
        return (
        <div>
            <div id='list-info-container'>
                <div id='list-title'>{title}</div>
                <div id='list-date'>{date.split('T')[0]}</div>
            </div>
            <div>
                <div>Please enter your name: <input id='name-input' type='text'></input></div>
                <button onClick={handleNameSubmission} id='submit-name'>Submit</button>
            </div>
        </div>
        )
    }

    return (
        <div id='left-list-container'>
        <div id='welcome-text'> <Welcome name={name}/></div>   
        <div id='list-info-container'>
            <div id='list-title'>{title}</div>
            <div id='list-date'>{date.split('T')[0]}</div>
        </div>
            {list.map((item, idx)=>
            <List key={idx} item={item} list={list} setList={setList} pageURL={pageURL} name={name}/>
            )}
            <Save list={list} pageURL = {pageURL} />
        </div>
    )

    

}

export default Left