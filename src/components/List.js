import React, {useState} from 'react' 
import monchService from '../services/monch'


const List = ({item, list, setList, pageURL, name}) => {
    console.log(`list item ${item.name}`)
    console.log(`page URL ${pageURL}`)
    console.log(`name ${name}`)
    console.log(`vote ${item.votes}`)

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
    const handleVoting = (e) => {
        const itemAPI = e.target.value
        monchService
            .vote(itemAPI, pageURL, name)
            .then(res => {
                console.log('response', res)
                setList(
                    list.map( n=> n.id !== itemAPI ? n : {...n, votes: res})
                )
            })
            .catch(e => console.log(e))

    }
    if (pageURL !== ''){
        return(
            <div className= 'list-individ-container'>
            <div className='list-individ-container-yelpinfo'>
                <div className='list-img-container'>
                    <img className ='icon-img' src= {item.image_url} alt= 'yelp selected image'></img>
                </div>
                <div className='list-data-container'>
                    <div>{item.name}</div>
                    <div>{item.rating} stars</div>
                </div>
                <div className='list-button-container'>
                    <div><button value={item.id} onClick={handleRemoveList}>Remove from list</button></div>
                    <div><button value={item.id} onClick={handleVoting}>Vote for this place</button></div>
                </div>
            </div>
            <div className='voters'>
                Voted for here: {item.votes.toString()}
            </div>
            </div>
        )
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
