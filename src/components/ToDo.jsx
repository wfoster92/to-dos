import { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import SaveIcon from '@mui/icons-material/Save'

const ToDo = (props) => {
  const { task, status, id, toDos, setToDos } = props
  const [isEditMode, setIsEditMode] = useState(false)
  const [tempStatus, setTempStatus] = useState(status)
  const [tempTask, setTempTask] = useState(task)

  const handleSave = () => {
    const tempToDo = {
      task: tempTask,
      status: tempStatus,
      id,
    }
    const indexToUpdate = toDos.findIndex((elem) => elem.id === id)
    let updatedToDos = [...toDos]
    updatedToDos[indexToUpdate] = tempToDo
    setToDos(updatedToDos)
    setIsEditMode(!isEditMode)
  }

  const handleDelete = (id) =>
    setToDos((prevState) => [...prevState.filter((elem) => elem.id !== id)])

  return isEditMode ? (
    <li>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{ display: 'inline-block' }}
        >
          <label htmlFor='task'>Task: </label>
          <input
            type='text'
            htmlFor='task'
            id='task'
            name='task'
            value={tempTask}
            onChange={(e) => setTempTask(e.target.value)}
            required
          ></input>{' '}
        </form>{' '}
        <label htmlFor='status' style={{ margin: '0 8px' }}>
          Status:{' '}
        </label>
        <select
          name='status'
          id='status'
          onChange={(e) => setTempStatus(e.target.value)}
        >
          <option value='New'>New</option>
          <option value='In Progress'>In Progress</option>
          <option value='Done'>Done</option>
        </select>
        <span style={{ marginLeft: '8px' }}>
          <SaveIcon onClick={handleSave} style={{ verticalAlign: 'middle' }} />
          <DeleteIcon
            onClick={() => handleDelete(id)}
            style={{ verticalAlign: 'middle' }}
          />
        </span>
      </div>
      <hr />
    </li>
  ) : (
    <li>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>
          {task} [{status}]{' '}
        </span>

        <span>
          <EditIcon
            onClick={() => setIsEditMode(!isEditMode)}
            style={{ verticalAlign: 'middle' }}
          />
          <DeleteIcon
            onClick={() => handleDelete(id)}
            style={{ verticalAlign: 'middle' }}
          />
        </span>
      </div>
      <hr />
    </li>
  )
}

export default ToDo
