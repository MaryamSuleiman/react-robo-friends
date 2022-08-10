
import Cardlist from './components/Cardlist'
import './App.css'
import {useState} from 'react'
import users from './user.json'
import SearchBox  from './components/SearchBox'

function App() {
  // creating the state to be used 
  const [searchInput,setSearchInput] = useState('')
  const [searchUsers,setSearchUsers] = useState([])

  const updateSearchInput = (event)=>{
    let target = event.target.value
    setSearchInput(target)
    const filterRobot = target ? users.filter((user)=>(user.name.toLowerCase().includes(target.toLowerCase()))) : []
    setSearchUsers([...filterRobot])

  }

  return (
    <div className='container'>
      <h1>Robo Friends</h1>
     <SearchBox updateSearch = {updateSearchInput}/>
     <Cardlist users = {searchInput ? searchUsers : users} />
     </div>
  )
}

export default App
