import React, {useState} from 'react'
import monchService from '../services/monch'

const Save = ({list, pageURL}) => {

    const handleSave = () => {
        const title = document.getElementById('title-name').value
        const date = document.getElementById('event-date').value
        console.log(date)
        if (title===''){
            alert('please add a title')
            return
        }
        const listArray = []
        for (let i= 0; i < list.length; i++){
            listArray.push(list[i].id)
        }
        const saveData = {
            title: title,
            date: date,
            restaurants: listArray
        }
        monchService
            .saveList(saveData)
            .then(response => {
                window.location = `/${response.redirect}`
            })
            .catch(e => console.log(e))
        
        
    }

    if (list.length > 0){
        if (pageURL !='')
        return (
            <div>
            </div>
        )
        else {
            return (
                <div>
                    <div class ='search-div'>Name your list:<input type='text' id='title-name' autoComplete='off'></input></div>
                    <div class='search-div'>Date of event:<input type='date' id='event-date' acutcomplete='off'></input></div>
                    <div><button onClick={handleSave}>Save list</button></div>
                </div>
            )
        }
    }
    return(
        <div></div>
    )
}

export default Save

