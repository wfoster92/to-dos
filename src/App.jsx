import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ToDo from './components/ToDo'
import './App.css'

function App() {
  const [toDos, setToDos] = useState([])
  const [tempTask, setTempTask] = useState('')
  const [tempStatus, setTempStatus] = useState('New')

  const handleSubmit = (e) => {
    e.preventDefault()
    let currentToDo = {
      task: tempTask,
      status: tempStatus,
      id: uuidv4(),
    }
    setToDos((prevState) => [...prevState, currentToDo])
    setTempTask('')
    setTempStatus('New')
  }

  return (
    <>
      <h1>To Dos</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='task'>Task: </label>
        <input
          type='text'
          htmlFor='task'
          id='task'
          name='task'
          value={tempTask}
          onChange={(e) => setTempTask(e.target.value)}
          required
        ></input>
        <label htmlFor='status' style={{ marginLeft: '8px' }}>
          Status:{' '}
        </label>
        <select
          name='status'
          id='status'
          onChange={(e) => setTempStatus(e.target.value)}
          style={{ height: '24px' }}
        >
          <option value='New'>New</option>
          <option value='In Progress'>In Progress</option>
          <option value='Done'>Done</option>
        </select>
        <input type='submit' value={'Submit'} style={{ marginLeft: '8px' }} />
      </form>

      <ol>
        {toDos.map((toDo) => {
          return (
            <ToDo
              task={toDo.task}
              status={toDo.status}
              id={toDo.id}
              toDos={toDos}
              setToDos={setToDos}
            />
          )
        })}
      </ol>
    </>
  )
}

export default App
