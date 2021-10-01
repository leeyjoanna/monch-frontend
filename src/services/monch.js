import axios from 'axios'
// const baseUrl = '/'

const getAllServer = (uuid) => {
    const request = axios.get(`/myList/${uuid}`)
    return request.then(response => response.data)
}

const searchTemp = (searchTerms) => {
    const request = axios.get(`api/searchResult/`, {params: searchTerms})
    return request.then(response => response.data)
}

const getIndividual = (yelpID) => {
    const request = axios.get(`api/searchResult/id`, {params: yelpID})
    return request.then(response => response.data)
}

const saveList = (saveData) => {
    const request = axios.post('newList', {saveData})
    return request.then(response => response.data)
}

const updateList = (itemAPI, uuid) => {
    const request = axios.put(`/myList/${uuid}`, {itemAPI})
    return request.then(response => response.data)
}

const deleteEntry = (itemAPI, uuid) => {
    const request = axios.delete(`/myList/${uuid}`, {data: {itemAPI}})
    return request.then(response => response.data)
}

const vote = (itemAPI, uuid, name) => {
    const request = axios.put(`/myList/${uuid}/votes`, {data: {itemAPI, name}})
    return request.then(response => response.data)

}
export default{ getAllServer, searchTemp, getIndividual, saveList, updateList, deleteEntry, vote}