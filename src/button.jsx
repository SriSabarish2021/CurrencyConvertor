import './btn.css'
const Button = ({curamt,fromcur,tocur,amt}) => {
  return (
    <div className='result'>
        <p>{curamt} {fromcur} EQUAL TO {amt} {tocur}</p>
    </div>
  )
}

export default Button