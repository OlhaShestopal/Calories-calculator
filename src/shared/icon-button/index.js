import './style.scss'

function IconButton(props) {
  const classNames = props.className ? `icon-button ${props.className}` : 'icon-button';

  return (
    <button
      {...props}
      className={`${classNames} icon-button--${props.icon}`}
    />
  )
}

export {
  IconButton
}