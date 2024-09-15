import './amount.css'
const Amount = ({curamt,changeamt}) => {

    
  return (
    <div className="amtinp">
        <label htmlFor="amt">Amount: </label>
        <input type="number" id="amt" placeholder="Amount" value={curamt} onChange={(e)=>changeamt(e.target.value)}/>
    </div>
  )
}

export default Amount