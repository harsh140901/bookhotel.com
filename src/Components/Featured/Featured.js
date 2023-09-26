import './Featured.css'
import { useDispatch } from 'react-redux'
import { updateDestination, updateDate } from '../../Redux/Reducer'
import { useNavigate } from 'react-router-dom'


const Featured = () => {
    const dispatch = useDispatch()
    // const destination = useSelector((state)=>state.location.destination) 
    const navigate = useNavigate()
    //   const date = useSelector((state)=>state.location.date) 


    const handleCityClick = (cityName) => {
        //console.log('cityName is ', cityName)
        dispatch(updateDestination(cityName))
        dispatch(updateDate('2022-12-06'))
        navigate("/hotels")
    }

    return (
        <div className='featured'>
            <div className='featuredItem ' onClick={() => handleCityClick('mumbai')}>
                <img src='mumbai.jpg' alt='mumbaiImg' className='featuredImg'></img>
                <div className='featuredTitle'>
                    <h1 className='featuredText'>Mumbai</h1>
                    <h2 className='featuredSubText'>110+ properties</h2>
                </div>
            </div>
            <div className='featuredItem' onClick={() => handleCityClick('pune')}>
                <img src='pune.jpg' alt='puneImg' className='featuredImg'></img>
                <div className='featuredTitle'>
                    <h1 className='featuredText'>Pune</h1>
                    <h2 className='featuredSubText'>120+ properties</h2>
                </div>
            </div>
            <div className='featuredItem' onClick={() => handleCityClick('banglore')}>
                <img src='banglore.jpg' alt='bangloreImg' className='featuredImg'></img>
                <div className='featuredTitle'>
                    <h1 className='featuredText'>Banglore</h1>
                    <h2 className='featuredSubText'>150+ properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured