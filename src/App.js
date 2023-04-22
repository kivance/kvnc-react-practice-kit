import './App.css';
import Navbar from './components/navbar'

// https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/c1eea051-07ec-4050-aeb5-6eaccb0ace2b/TR-tr-20230417-popsignuptwoweeks-perspective_alpha_website_large.jpg


function App() {

  const bgStyle = {
    backgroundImage: 'linear-gradient(103.24deg, rgba(0, 8, 29, 0.9) 23.83%, rgba(0, 8, 29, 0.3) 96.1%),url(https://cdn.discordapp.com/attachments/1020759917663101053/1098952756582162553/TR-tr-20230417-popsignuptwoweeks-perspective_alpha_website_large.png)'
  }


  return (
    <div className=" w-screen">
      <div style={bgStyle} className=' bg-bgimg bg-no-repeat bg-cover w-full min-h-[34rem]'>
    <Navbar></Navbar>
    </div>
    </div>
  );
}

export default App;