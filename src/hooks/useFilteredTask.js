import { useMemo } from 'react'

const useFilteredTask = ({ items = [], keyword = '' } = {}) => {
  const filteredList = useMemo(() => {
    return items.filter(item => {
      if (!keyword) return true
      return item.description.toLowerCase().indexOf(keyword.toLowerCase()) > -1
    })
  }, [items, keyword])

  return { filteredList }
}

export default useFilteredTask
