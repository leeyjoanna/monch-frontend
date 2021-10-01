import React, {useState} from 'react'
import monchService from '../services/monch'

const Save = ({list, pageURL}) => {

    const handleSave = () => {
        const title = document.getElementById('title-name').value
        const listArray = []
        for (let i= 0; i < list.length; i++){
            listArray.push(list[i].id)
        }
        const saveData = {
            title: title,
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
                    <input id='title-name' autoComplete='off'></input>
                    <button onClick={handleSave}>Save list</button>
                </div>
            )
        }
    }
    return(
        <div></div>
    )
}

export default Save

