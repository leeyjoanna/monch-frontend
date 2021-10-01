import React, {useState} from 'react' 
import monchService from '../services/monch'


const List = ({item, list, setList, pageURL}) => {
    console.log(`list item ${item.name}`)

    const handleRemoveList = (e) => {
        const itemAPI = e.target.value
        setList(list.filter(n=> n.id !== itemAPI))
        
        console.log(itemAPI)
        if(pageURL !=''){
            monchService
                .deleteEntry(itemAPI, pageURL)
                .then(res => console.log(res))
                .catch(e => console.log(e))
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
                    
                    <button value={item.id} onClick={handleRemoveList}>Remove from list</button>
                </div>
            </div>
        </div>
    )
}

export default List
