import React, {useState} from 'react'
import ResultList from './ResultList'
import monchService from '../services/monch'


const Right = ({list, setList, pageURL}) => {
    const [ resultList, setResultList ] = useState([])
    
    const handleSearch = () => {
        const searchTerms = {
            term: document.getElementById('searchTerm').value, 
            location: document.getElementById('searchLocation').value
        }

        monchService
            .searchTemp(searchTerms)
            .then(response => setResultList(response))
            .catch(e => console.log(e))
    }

    return(
        <div>
            <div>
                <div class='search-div'>Search: <input id='searchTerm' type='text' autoComplete='off' placeholder='boba'/></div>
                <div class='search-div'>Location: <input id='searchLocation' type='text' autoComplete='off' placeholder='san francisco, ca'/></div>
                <button onClick={handleSearch}>Search</button>
            </div>
            <div>
                <br/>
                <ul>
                {resultList.map((item, idx) => 
                    <ResultList key={idx} item={item} list={list} setList={setList} pageURL = {pageURL}/>
                    )}
                </ul>
            </div>
        </div>
    )
    
}

export default Right