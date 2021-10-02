import React, { useEffect, useState } from 'react'
import './App.css';
import Right from './components/Right.js'
import Left from './components/Left.js'
// import List from './components/List.js'
import monchService from './services/monch'


const App = () => {
  const [ list, setList ] = useState([])
  const [ title, setTitle ] = useState('')
  const [ date, setDate] = useState('')
  const [name, setName] = useState('')

  let pageURL = (window.location.href).split('/')[3]

  const hook = () => {
      monchService  
        .getAllServer(pageURL)
        .then(response => {
          // console.log('useEffect')
          // console.log('response', response)
          setTitle(response.title)
          setDate(response.date)
          setList(response.restaurants)
        })
    }

  useEffect(hook, [])
  
  const handleHome = () => {
    window.location.href='/'
    console.log('home button cool')
    return false
  }

  return(
    <div id='body'>
      <div id='nav-bar'>
        <div id='monch-title' onClick= {handleHome}> Let's monch !</div>
        <div id='contact'>A personal project, by <a id='personal-link' href='http://jojopuff.herokuapp.com' target='_blank'>Joanna Lee.</a> &#169; 2021</div>
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
