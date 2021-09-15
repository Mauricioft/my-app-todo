import { useState } from 'react'
import useSaveTask from '../../hooks/useSaveTask'

const TaskForm = () => {
  const [description, setDescription] = useState('')
  const { addTask, hasLoading } = useSaveTask()

  const handleChange = evt => setDescription(evt.target.value)

  const handleSubmit = evt => {
    evt.preventDefault()
    addTask({ description })
  }

  return (
    <div className='row align-items-center justify-content-center | vh-90'>
      <form
        onSubmit={handleSubmit}
        className='col-sm-12 col-md-4 | bg-light | p-4 | shadow-sm | rounded'
      >
        <h2 className='mb-4 | fs-3 | text-center'>A Task</h2>

        <div className='mb-3'>
          <input
            type='text'
            name='description'
            placeholder='Write description'
            className='form-control'
            value={description}
            onChange={handleChange}
            autoFocus
          />
        </div>

        <div className='d-grid gap-2 pt-4'>
          <button
            disabled={hasLoading}
            className='btn btn-primary'
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export {
  TaskForm
}
