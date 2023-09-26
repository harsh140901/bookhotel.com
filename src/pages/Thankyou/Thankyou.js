import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import  './Thankyou.css'


const Thankyou = () => {
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate("/")
  }
  return (
    <div className="thankyouwrapper">
      <div className="thankyoucontainer">
      <FontAwesomeIcon icon={faCircleCheck} className='icon'/>
        <h1>Thank You!</h1>
        <span>Your details have been successfully submitted.</span>
        <span>Thanks!</span>
        <button className='Btn' onClick={handleClick} >OK</button>
      </div>
    </div>
  )
}

export default Thankyou