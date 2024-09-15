import './App.css'
import Title from './title'
import Heading from './heading'
import Amount from './amount'
import { useEffect, useState } from "react"
import From from './from'
import Tocur from './tocur'
import Button from './button'
function App() {
  const[curamt,changeamt]=useState('')
  const [fromcur,chnagefrom]=useState('USD')
  const [tocur,chnagetocur]=useState('INR')
  const [amt,conamt]=useState(null)


useEffect(()=>{
  const getter=()=>{
    console.log(curamt,fromcur,tocur)
   }
  getter()
    const getdata=async()=>{
      try {
        const responsee = await fetch(`https://v6.exchangerate-api.com/v6/b4be06c6e42246cc91f78147/latest/${fromcur}`)
        const data = await responsee.json();
        console.log(data);
        if (data.result === 'success') {
          const rate = data.conversion_rates[tocur];        
          const convertedAmount = curamt * rate;
          conamt(convertedAmount.toFixed(2))
          return convertedAmount;
      } else {
          console.error("Error fetching exchange rate:", data.error);
      }
    } catch (error) {
        console.log("Fetch error:", error);
    }
  }
  getdata()
},[curamt,fromcur,tocur])
     

  return (
    <>
      <Title/>
      <Heading />
      <Amount curamt={curamt}
      changeamt={changeamt}/>
      <From fromcur={fromcur} 
      chnagefrom={chnagefrom}/>
      <Tocur tocur={tocur}
       chnagetocur={chnagetocur}/>
      <Button curamt={curamt}
       fromcur={fromcur}
      tocur={tocur}
      amt={amt}/>
    </>
  )
}

export default App
