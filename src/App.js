
import './App.css';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner'
import Features from './components/features/Features';
import Project from './components/project/Project';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <div className='max-w-screen-xl mx-auto'>
      <Navbar/>
      <Banner/>
      <Features/>
      <Project/>
      <Resume/>
      <Contact/>
      <Footer/>
      </div>
   
    </div>
  );
}

export default App;
