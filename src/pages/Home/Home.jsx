import wave from '../../assets/wave.svg'
import Banner from '../../components/Banner/Banner';

const Home = () => {
    return (
        <div className='min-h-[calc(100vh-116px)] relative'>
           <Banner/>
           <img className='w-full absolute bottom-0' src={wave} alt="" />
        </div>

    );
};

export default Home;