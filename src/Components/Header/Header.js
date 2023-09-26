import { faBuilding, faCalendarDays, faHotel, faHouse, faPhone, faSwimmingPool } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { useState } from "react";
// import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
// import { format } from "date-fns";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import {updateDestination ,updateDate ,updateStayType} from '../../Redux/Reducer'

const Header = () => {
    const destination = useSelector((state)=>state.location.destination) 
    const date = useSelector((state)=> state.location.date)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSearch=(type)=>{
        dispatch(updateStayType(type))
        navigate("/hotels")
    }

    

  return (
    <div className="header">
        <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItem" onClick={()=> handleSearch('Hotel')}>
                        <FontAwesomeIcon icon={faHotel} />
                        <span>Hotels</span>            
                </div>
                <div className="headerListItem" onClick={()=> handleSearch('Resort')}>
                    <FontAwesomeIcon icon={faHouse} />
                    <span>Resorts</span>
                </div>
                <div className="headerListItem" onClick={()=> handleSearch('Villa')}>
                    <FontAwesomeIcon icon={faSwimmingPool} />
                    <span>Villas</span>
                </div>
                <div className="headerListItem" onClick={()=> handleSearch('Homestay')}>
                    <FontAwesomeIcon icon={faBuilding} />
                    <span>Homestay</span>
                </div>
                <div className="headerListItem" onClick={handleSearch}>
                    <FontAwesomeIcon icon={faPhone} />
                    <span>ContactUs</span>         
                </div>
            </div>

            <div>
                <h1 className="headerTitle">A lifetime of Discounts? It's Genius.</h1>
                <p className="headerDesc">Get rewarded on your hotel booking.Book now and get flat 20% discount.</p>
            </div>

            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon className="headerIcon" icon={faHotel} />
                    <input className="headerSearchInput" type="text" value={destination} placeholder="Where are you going?" 
                        onChange={e=>dispatch(updateDestination(e.target.value))}></input>
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon className="headerIcon" icon={faCalendarDays} />
                    <input className="headerSearchInput" type="date" placeholder="Select a date" value={date}
                        onChange={e=>dispatch(updateDate(e.target.value))}>
                     </input>
        
                </div>
                <div className="headerSearchItem">
                    <button className="headerBtn" onClick={handleSearch}>Search</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Header