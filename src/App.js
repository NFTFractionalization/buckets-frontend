import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import BucketView from './components/BucketView';
import OutlinedButton from './components/OutlinedButton';
import ConnectBanner from './components/ConnectBanner';
function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className=" bg-black pt-10 text-center">
        <h1 className="text-white  text-6xl">
          Next-gen NFT Liquidity <p className="text-transparent bg-clip-text bg-gradient-to-br from-[#CE4DA4] to-[#7353E5]"> For modern investors</p>
        </h1>
        <h3 className="text-gray-600 p-6 m-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam aliquam quam viverra purus tellus purus. Convallis fusce</h3>
        <button className=" rounded-3xl bg-gradient-to-r p-[3px] from-[#7928ca] to-[#ff0080]">
          <div className="flex flex-col justify-between  bg-black rounded-3xl">
            <div className="text-white decoration-4 text-light flex justify-between m-2 pl-3 pr-3">
              Browse Buckets
            </div>
          </div>
        </button>
        
        <button className="bg-gray-700 text-white rounded-3xl m-2 p-3">
          <div className="pl-3 pr-3">LIQ your NFT</div>
        </button>
        <h1 className="text-white text-4xl p-9">Current Buckets</h1>
        <BucketView />
        <OutlinedButton text="Browse All"/>
      <div className=" pt-6 flex flex-wrap justify-center text-white">
        <h2> Built-in Asset Verification and live asset price feeds Powered by</h2>
        <p className="text-gray-400"></p>
      </div>
      <ConnectBanner/>  
      </div>
      
    </div>
  );
}

export default App;
