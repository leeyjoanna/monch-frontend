import React, {useState} from 'react'
import monchService from '../services/monch'

const ResultList = ({item, list, setList, pageURL}) => {    
    const handleAddList = (e) => {
        console.log(`result list itemID: ${e.target.value}`)

        const itemAPI = {id: e.target.value}

        monchService
            .getIndividual(itemAPI)
            .then(response => setList(list.concat(response)))
            .catch(e => console.log(e))

        if(pageURL != ''){
            monchService    
                    .updateList(itemAPI, pageURL)
                    .then( response => console.log(response))
                    .catch(e => {console.log(e)})
        }
    }    
                
    return(
        <div className='list-individ-container'>
            <div className='list-img-container'>
                <img className ='icon-img' src= {item.image_url} alt= 'yelp selected image'></img>
            </div>
            <div className='list-data-container'>
                <div>{item.name}</div>
                <div>{item.rating} stars</div>
                <div>
                    <button value={item.id} onClick={handleAddList}>Add to list</button>
                </div>
            </div>
        </div>
    )
}

export default ResultList