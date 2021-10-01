import React, { useEffect, useState } from 'react'
import './App.css';
import Right from './components/Right.js'
import Left from './components/Left.js'
// import List from './components/List.js'
import monchService from './services/monch'


const App = () => {
  const [ leftPage, setLeftPage ] = useState('homeLeft')
  const [ rightPage, setRightPage ] = useState('homeRight')
  const [ list, setList ] = useState([])
  const [ title, setTitle ] = useState('')
  const [ date, setDate] = useState('')
  const [name, setName] = useState('')
  // const [ pageURL, setPageURL ] = useState('/')

  const pageURL = (window.location.href).split('/')[3]

  const hook = () => {
    monchService  
      .getAllServer(pageURL)
      .then(response => {
        setTitle(response.title)
        setDate(response.date)
        setList(response.restaurants)
      })
  }
  useEffect(hook, [])
  

  return(
    <div>
      <div id='nav-bar'>
      Let's monch ! <br/><br/>
      </div>
      <div id='main-container'>
        <div id='left-container'>
          <Left list = {list} date={date} setList = {setList} pageURL = {pageURL} title = {title} name={name} setName={setName}/>
        </div>
        <div id='right-container'>
          <Right list={list} setList={setList} pageURL = {pageURL}/>
        </div>
        
      </div>
    </div>
  )
}


export default App;
