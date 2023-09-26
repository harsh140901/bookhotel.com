import './Mail.css'
import '../../data.json'

const Mail = () => {


  return (
    <div className='mail'>
        <h1 className='mailTitle'>Save time, Save money</h1>
        <span className='mailDesc'>Sign Up for best deals</span>
        <div className='mailInputContainer'>
            <input type='text' placeholder='Enter your email' />
                <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Mail