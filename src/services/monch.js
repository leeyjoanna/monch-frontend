import axios from 'axios'

const getHome = () => {
    const request = axios.get(`/`)
    return request.then(response => response.data)
}
const getAllServer = (uuid) => {
    const request = axios.get(`/monchapi/myList/${uuid}`)
    return request.then(response => response.data)
}

const searchTemp = (searchTerms) => {
    const request = axios.get(`/monchapi/searchResult/`, {params: searchTerms})
    return request.then(response => response.data)
}

const getIndividual = (yelpID) => {
    const request = axios.get(`/monchapi/searchResult/id`, {params: yelpID})
    return request.then(response => response.data)
}

const saveList = (saveData) => {
    const request = axios.post('/monchapi/newList', {saveData})
    return request.then(response => response.data)
}

const updateList = (itemAPI, uuid) => {
    const request = axios.put(`/monchapi/myList/${uuid}`, {itemAPI})
    return request.then(response => response.data)
}

const deleteEntry = (itemAPI, uuid) => {
    const request = axios.delete(`/monchapi/myList/${uuid}`, {data: {itemAPI}})
    return request.then(response => response.data)
}

const vote = (itemAPI, uuid, name) => {
    const request = axios.put(`/monchapi/myList/${uuid}/votes`, {data: {itemAPI, name}})
    return request.then(response => response.data)

}
export default{ getHome, getAllServer, searchTemp, getIndividual, saveList, updateList, deleteEntry, vote}