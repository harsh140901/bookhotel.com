import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchItem.css';

const SearchItem = ({ name,rating,price,type,destination , hotelid}) => {

    const [discPrice, setDiscPrice]= useState(price)
    const [pricedrop,setPricedrop] = useState(false)

    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate('/thankyou')
    }
    const handleDiscClick =()=>{
        console.log(discPrice)
        const newprice = Math.round(price*(0.9))
        setDiscPrice(newprice)
        setPricedrop(current=>!current)

    }

  return (
    <div className='searchItem'>
        <img src='room.jpg' alt='' className='siImg'/>
        <div className='siDesc'>
            <h1 className='siTitle'>{name} </h1>
            <span className='siTaciOp'>{type} </span>
            <span className='siDestination'>{destination} </span>
            <span className='siSubtitle'>Hotel with Air conditioning</span>
            <span className='siFeatures'>Entire  studio 1 bathroom 1 full bed</span>
            <span className='siCancelOp'>Free cancellation</span>
            <span className='siCancelOpSubtitle'>You can cancel later so lock in this great price today!</span>

        </div>
        <div className='siDetails'>
            <div className='siRating'>
                <span>{rating}</span>

                
            </div>
            
            <div className='siDetailsTexts'>
                {pricedrop ?
                <><span className='sidiscPrice'>Rs {discPrice}</span></>
                :<span className='siPrice'>Rs {discPrice}</span>
                }
                
                <span className='sitaxOp'>Includes taxes and fees</span>
                <button className='siBook' onClick={handleClick}>Book Now</button>
                <button className='siBook' onClick={handleDiscClick}>Avail Discount</button>
                
            </div>
        </div>

    </div>
  )
}

export default SearchItem