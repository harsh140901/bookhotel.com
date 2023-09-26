import './Hotel.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import SearchItem from '../../Components/SearchItem/SearchItem'





const Hotel = () => {
  const[data,setData] = useState([])
  

  // const handleClick = (myid)=>{
  //    console.log(myid)
  //   // axios.put('/data2.json')

  // }

  useEffect(()=>{
    axios.get('/data2.json')
    .then((response) => {
        console.log(response.data)
         setData(response.data)
          console.log('in used effect')
    })
  },[])



  

  return (
    <div >
    
     {data && data.map(item =>{
      return(
      // <div className='box' key = {item.id}>
      //  <div> {item.first_name}</div>
      //  <button onClick={()=>handleClick(item.id)}>Change</button>
      // </div>)
      <SearchItem
                  key={item.id}
                  name={item.Name}
                  rating={item.Rating}
                  price={item.Price}
                  type={item.type} 
                  destination={item.destination}
               />
     )})}

    </div>
  )
}

export default Hotel