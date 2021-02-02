import './style.scss';

function Button({ children, ...props }) {
  const classNames = props.className ? `button ${props.className}` : 'button';

  return (
    <button
      {...props}
      className={classNames}
    >
      {children}
    </button>
  )
}

export {
  Button
}