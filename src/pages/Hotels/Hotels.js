import './Hotels.css'
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import { useEffect, useState } from 'react';
import SearchItem from '../../Components/SearchItem/SearchItem';
import { useSelector, useDispatch } from 'react-redux'
import {updateDestination , updateDate } from '../../Redux/Reducer'
import { Navigate } from 'react-router-dom';

const Hotels = () => {
  const [hotels,setHotels] = useState([])
  const dispatch = useDispatch()
  const destination = useSelector((state)=>state.location.destination) 
  const date = useSelector((state)=>state.location.date) 
  const stayType = useSelector((state)=>state.location.stayType)
  
  const handleSearch=()=>{
    Navigate("/hotels")
  }

  useEffect(() => {
    fetch('/data2.json')
    .then(res=>res.json())
    .then(res=>
      {
        const filterHotels = res.filter(hotel=>{
          // console.log(hotel.Date,date)
          //console.log(hotel.date.toString()===date.toString());

          if(destination && date && stayType){
            return hotel.destination===destination && hotel.Date.toString()===date.toString() && hotel.type===stayType;
          }
          else if(destination && date){
            return hotel.destination===destination && hotel.Date.toString()===date.toString()
          }
          else if(destination && stayType){
            return hotel.destination===destination && hotel.type===stayType;
          }
          else if(date && stayType){
            return  hotel.Date.toString()===date.toString() && hotel.type===stayType;
          }
          else if(date){
            return hotel.Date.toString()===date.toString()
          }
          else if(stayType){
            return hotel.type===stayType
          }
          else if(destination){
            return hotel.destination===destination
          }
          else{
            return hotel
          }


          // console.log(hotel.date.toString()===date.toString());
        })
        // console.log(filterHotels);
        // console.log(hotel.date.toString()===date.toString());
        setHotels(filterHotels)
      }
      )
  }, [destination,date,stayType])
  

  return (
    <div>
      <Navbar />
      <Header />
      <div className='hotelsContainer'>
        <div className='hotelsWrapper'>
          <div className='hotelsSearch'>
            <h1 className='hotelsTitle'>Search</h1>
            <div className='isItem'>
              <label>Destination</label>
              <input  defaultValue={destination} value={destination} type='text'
                onChange={e=>dispatch(updateDestination(e.target.value))}
              ></input>
            </div>
            <div className='isItem'>
              <label>checkInDate</label>
              <input className="headerSearchInput" type="date"  value={date} placeholder="Select a date"
                  onChange={e=>dispatch(updateDate(e.target.value))}>
              </input>
            </div>
              <button className='searchBtn' onClick={handleSearch}>Search</button>
          </div>
          <div className='hotelsResult'>
            { hotels.map((item)=>{
              return(
                <SearchItem 
                  key={item.id}
                  name={item.Name}
                  rating={item.Rating}
                  price={item.Price}
                  type={item.type} 
                  destination={item.destination}
                  hotelid ={item.id}
               />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotels