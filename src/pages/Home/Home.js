
import Featured from "../../Components/Featured/Featured"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Mail from "../../Components/Mail/Mail"
import Navbar from "../../Components/Navbar/Navbar"
import Sidebar from "../../Components/Sidebar/Sidebar"
import PropertyList from "../../Components/PropertyList/PropertyList"
import './Home.css'


const Home = () => {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <Navbar />
        <Header />
        <div className="homeContainer">
          <Featured />
          <span className="homeTitle ">Browse by hotel type</span>
          <PropertyList />
          <Mail />
          <Footer />
        </div>
      </div>
      
    </div>

  )
}

export default Home