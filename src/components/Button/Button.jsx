const Button = ({children, size, color, onClick}) => {
  return (
    <button onClick={onClick} className={`button button--${size} button--${color}`}>{children}</button>
  )
}

export default Button