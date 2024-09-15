import './from.css'
const From = ({fromcur,chnagefrom}) => {
  
  return (
    <div className="fromamt">
        <label htmlFor="fromcur">From Currency:</label>
        <select name="From" id="fromcur" value={fromcur} onChange={(e)=>chnagefrom(e.target.value)}>
            <option value="USD">USD</option>
            <option value="YER">YER</option>
            <option value="INR">INR</option>            
            <option value="EUR">EURO</option>
            
        </select>
    </div>
  )
}

export default From