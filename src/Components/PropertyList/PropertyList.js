import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateStayType } from '../../Redux/Reducer'
import './PropertyList.css'

const PropertyList = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleClick = (type)=>{
        dispatch(updateStayType(type))
        navigate("/hotels")
    }
    
  return (
    <div className='pList'>
        <div className='pListItem' onClick={()=>handleClick('Hotel')}>
            <img src='hotel.jpg' alt='hotel' className='pListImg'/>
                <div className='pListTitles'>
                    <h1 className='pListTitle'>Hotels</h1>
                    <h2 className='pListSubTitle'>129 hotels</h2>
                </div>
        </div>
        <div className='pListItem' onClick={()=>handleClick('Resort')}>
            <img src='resort.jpg' alt='resort' className='pListImg'/>
                <div className='pListTitles'>
                    <h1 className='pListTitle'>Resorts</h1>
                    <h2 className='pListSubTitle'>129 resorts</h2>
                </div>
        </div>
        <div className='pListItem' onClick={()=>handleClick('Villa')}>
            <img src='villa.jpg' alt='villa' className='pListImg'/>
                <div className='pListTitles'>
                    <h1 className='pListTitle'>Villas</h1>
                    <h2 className='pListSubTitle'>129 villas</h2>
                </div>
        </div>
        <div className='pListItem' onClick={()=>handleClick('Homestay')}>
            <img src='homestay.jpg' alt='homestay' className='pListImg'/>
                <div className='pListTitles'>
                    <h1 className='pListTitle'>Homestay</h1>
                    <h2 className='pListSubTitle'>129 homestay</h2>
                </div>
        </div>
        
    </div>
  )
}

export default PropertyList