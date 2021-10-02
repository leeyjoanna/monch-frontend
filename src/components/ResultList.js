import React, {useState} from 'react'
import monchService from '../services/monch'
import yelplogo from './yelpimg/yelp_logo.png'

const ResultList = ({item, list, setList, pageURL}) => {    
    const handleAddList = (e) => {
        console.log(`result list itemID: ${e.target.value}`)
        const itemAPI = {id: e.target.value}

        function doesExist(checkID) {
            return list.some((n) => {
              return n.id === checkID;
            }); 
          }


        if(doesExist(itemAPI.id)){
            alert('you\'ve added this already!')
            return
        }
        monchService
            .getIndividual(itemAPI)
            .then(response => {
                response.votes = []
                setList(list.concat(response))})
            .catch(e => console.log(e))

        if(pageURL != ''){
            monchService    
                .updateList(itemAPI, pageURL)
                .then( response => console.log(response))
                .catch(e => {console.log(e)})
        }
    }    
    console.log(item.location)
    return(
        <div className='list-individ-container'>

            <div className='list-individ-container-yelpinfo'>
                <div className='list-img-container'>
                    <img className ='icon-img' src= {item.image_url} alt= 'yelp selected image'></img>
                </div>
                <div className='list-data-container'>
                    <div id='item-name'> {item.name}</div>
                    <div id='item-rating'> {item.rating} stars | {item.review_count} reviews</div>
                    <div id='item-address'>
                        <div>{item.location.address1}</div>
                        <div>{item.location.city}, {item.location.state} {item.location.zipcode}</div>
                        <div></div>
                    </div>
                </div>
                <div className='list-button-container'>
                    <div><button value={item.id} onClick={handleAddList}>Add to list</button></div>
                </div>
            </div>

            <div className='bottom-row-container'>
                <div className='logo-container'>
                    <div id='yelp-logo-container'><a href={item.url} target='_blank'><img id='yelp-logo' src={yelplogo}></img></a></div>
                </div>
            </div>

        </div>
    )
}

export default ResultList