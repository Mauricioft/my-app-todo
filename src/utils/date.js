const parseDate = ({ date }) => {
  return new Date(date).toDateString()
}

export {
  parseDate
}
