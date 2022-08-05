import styles from '../styles/Home.module.css';
import SideBar from '../components/SideBar';
import MainContent from '../components/MainContent';

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className='h-screen shadow-lg bg-slate-700 text-white text-lg font-bold text-center py-5 row-span-12 col-span-2'>
          <SideBar />
        </div>
        <div className='shadow-lg bg-white text-lg font-bold p-10 col-span-10'>
          <MainContent />
        </div>
      </div>
    </div>
  )
}

export default Home;