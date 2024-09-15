import './toamt.css'
const Tocur = ({tocur,chnagetocur}) => {
  return (
    <div className='toamt'>
        <label htmlFor="tocur">To Currency:</label>
        <select name="to" id="tocur" value={tocur} onChange={(e)=>chnagetocur(e.target.value)}>
            <option value="USD">USD</option>
            <option value="YER">YER</option>
            <option value="INR">INR</option>            
            <option value="EUR">EUR</option>
        </select>
    </div>
  )
}

export default Tocur