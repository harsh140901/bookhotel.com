import { faBuilding, faHotel, faHouse, faPhone, faSwimmingPool } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
// import logo from '../../assests/Logo.png'
import './Sidebar.css'
import { updateStayType } from '../../Redux/Reducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

  // const[isSidebarOpen,setisSidebarOpen] = useState(true)
  // const handleClick = ()=>{
  //   return(
  //     setisSidebarOpen(!isSidebarOpen)

  //   )
  // }
  const dispatch =useDispatch()
  const navigate =useNavigate()
  
  const stayType = useSelector((state)=> state.location.stayType)

  const handleSearch=(type)=>{
    console.log(stayType)
    dispatch(updateStayType(type))
    
    navigate('/hotels')
}
const handleContactClick=()=>{
  navigate('/contactus')
}

  return (
    <div className='sidebar'>
      <div className='sidebarContainer'>
        {/* <div className='sidebarTitleContainer'>
          <div href='/' className='sidebarLink'>
            <div>
              <img src={logo} alt='logo' className='sidebarTitleImg'></img>
            </div>
            <div>
              <h1 className='sidebarTitleText'>BookHotel.com</h1>
            </div>
          </div>
        </div> */}
        {/* <div className='arrowIconConatiner'>
          {isSidebarOpen &&
            <><FontAwesomeIcon icon={faArrowLeft} className="arrowIcon" onClick={handleClick}/></>
          }

        </div> */}

        <ul className='sidebarList'>
          <li className='listItem' onClick={()=> handleSearch('Hotel')}>
            <div className='sidebarLink'>
              <div><FontAwesomeIcon icon={faHotel} className="sidebarListImg" /></div>
              {/* <div><h1 className='sidebarListText'>Hotels</h1>
              </div> */}
            </div>
          </li>
          <li className='listItem'>
            <div className='sidebarLink'>
              <div><FontAwesomeIcon icon={faHouse} className="sidebarListImg" onClick={()=> handleSearch('Resort')}/></div>
              {/* <div><h1 className='sidebarListText'>Resorts</h1></div> */}
            </div>
          </li>
          <li className='listItem'>
            <div className='sidebarLink'>
              <div><FontAwesomeIcon icon={faSwimmingPool} className="sidebarListImg" onClick={()=> handleSearch('Villa')}/></div>
              {/* <div><h1 className='sidebarListText'>Villas</h1></div> */}
            </div>
          </li>
          <li className='listItem'>
            <div className='sidebarLink'>
              <div><FontAwesomeIcon icon={faBuilding} className="sidebarListImg" onClick={()=> handleSearch('Homestay')}/>
              </div>   
              {/* <div><h1 className='sidebarListText'> Homestay</h1></div> */}
            </div>
          </li>
          <li className='listItem'>
            <div className='sidebarLink' onClick={handleContactClick}>
              <div><FontAwesomeIcon icon={faPhone} className="sidebarListImg" /></div>
              {/* <div><h1 className='sidebarListText'>ContactUs</h1></div> */}
            </div>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Sidebar