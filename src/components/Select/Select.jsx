const Select = ({children ,name}) => {
  return (
    <select name={name} className="select">{children}</select>
  )
}

export default Select