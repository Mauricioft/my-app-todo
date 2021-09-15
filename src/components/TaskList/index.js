import { useState } from 'react'
import PropTypes from 'prop-types'
import { FaFilter, FaSortAlphaDown, FaSortAlphaUpAlt } from 'react-icons/fa'
import useSortableData from '../../hooks/useSortableData'
import useFilteredTask from '../../hooks/useFilteredTask'
import { parseDate } from '../../utils/date'

const TaskList = ({ tasks }) => {
  const [isCheck, setIsCheck] = useState([])
  const [keyword, setKeyword] = useState('')
  const { items, requestSort, sortConfig } = useSortableData({ items: tasks })
  const { filteredList } = useFilteredTask({ items, keyword })

  const getClassNamesFor = name => {
    if (!sortConfig) return
    return sortConfig.key === name
      ? sortConfig.direction
      : undefined
  }

  const iconSort = tag => {
    const icons = {
      ascending: <FaSortAlphaUpAlt />,
      descending: <FaSortAlphaDown />
    }
    const sort = getClassNamesFor(tag)
    return !sort
      ? <FaFilter />
      : icons[sort]
  }

  const onItemSelect = evt => {
    const { id, checked } = evt.target
    setIsCheck([...isCheck, id])
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id))
    }
  }

  const handleChange = evt => setKeyword(evt.target.value)

  return (
    <>
      <div className='row'>
        <div className='col-xs-12 col-md-4'>
          <div className='py-3'>
            <input
              type='text'
              value={keyword}
              onChange={handleChange}
              placeholder='Search'
            />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>Check</th>
                <th>
                  <span
                    className='cursor-pointer'
                    onClick={() => requestSort('description')}
                  >
                    Description
                    { iconSort('description') }
                  </span>
                </th>
                <th>
                  <span
                    className='cursor-pointer'
                    onClick={() => requestSort('completed')}
                  >
                    Completed
                    { iconSort('completed') }
                  </span>
                </th>
                <th>
                  <span
                    className='cursor-pointer'
                    onClick={() => requestSort('createdAt')}
                  >
                    Created at
                    { iconSort('createdAt') }
                  </span>
                </th>
                <th>
                  <span
                    className='cursor-pointer'
                    onClick={() => requestSort('updatedAt')}
                  >
                    Updated at
                    { iconSort('updatedAt') }
                  </span>
                </th>
                <th>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {
                filteredList.map(item => {
                  return (
                    <tr key={item._id}>
                      <th>
                        <input
                          type='checkbox'
                          name={item._id}
                          id={item._id}
                          checked={isCheck.includes(item._id)}
                          onChange={onItemSelect}
                        />
                      </th>
                      <td>{item.description}</td>
                      <td>{item.completed ? 'True' : 'False'}</td>
                      <td>{parseDate({ date: item.createdAt })}</td>
                      <td>{parseDate({ date: item.updatedAt })}</td>
                      <td>Actions</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired
}

export default TaskList
