import React, {useState} from 'react' 
import monchService from '../services/monch'
import yelplogo from './yelpimg/yelp_logo.png'



const List = ({item, list, setList, pageURL, name}) => {
    console.log(`list item ${item.name}`)
    console.log(`page URL ${pageURL}`)
    console.log(`name ${name}`)
    console.log(`vote ${item.votes}`)
    console.log(`stars ${item.rating}`, typeof item.rating)

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
                        <div id='item-name'>{item.name}</div>
                        <div id='item-rating'>{item.rating} stars | {item.review_count} reviews</div>
                        <div id='item-address'>
                        <div>{item.location.address1}</div>
                        <div>{item.location.city}, {item.location.state} {item.location.zipcode}</div>
                        <div></div>
                    </div>
                    </div>
                    <div className='list-button-container'>
                        <div><button value={item.id} onClick={handleVoting}>Vote for this place</button></div>
                        <div><button value={item.id} onClick={handleRemoveList}>Remove from list</button></div>
                    </div>
                </div>
                <div className='bottom-row-container'>
                <div className='voters'>
                    Voted for here: {item.votes.toString()}
                </div>
                <div className='logo-container'>
                        <div id='yelp-logo-container'><a href={item.url} target="_blank"><img id='yelp-logo' src={yelplogo}></img></a></div>
                </div>
                </div>

            </div>
        )
    }
    return(
        <div className= 'list-individ-container'>
            <div className='list-individ-container-yelpinfo'>
                <div className='list-img-container'>
                    <img className ='icon-img' src= {item.image_url} alt= 'yelp selected image'></img>
                </div>
                <div className='list-data-container'>
                    <div id='item-name'>{item.name}</div>
                    <div id='item-rating'>{item.rating} stars | {item.review_count} reviews</div>
                    <div id='item-address'>
                    <div>{item.location.address1}</div>
                    <div>{item.location.city}, {item.location.state} {item.location.zipcode}</div>
                    <div></div>
                </div>
                </div>
                <div className='list-button-container'>
                    <div><button value={item.id} onClick={handleRemoveList}>Remove from list</button></div>
                </div>
            </div>
            <div className='bottom-row-container'>
            <div className='voters'>
            </div>
            <div className='logo-container'>
                    <div id='yelp-logo-container'><a href={item.url} target="_blank"><img id='yelp-logo' src={yelplogo}></img></a></div>
            </div>
            </div>

        </div>
        
    )
}

export default List
