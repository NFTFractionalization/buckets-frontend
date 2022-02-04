import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className=" bg-black pt-10 text-center">
        <h1 className="text-white  text-6xl">
          Next-gen NFT investing <p className="text-transparent bg-clip-text bg-gradient-to-br from-[#CE4DA4] to-[#7353E5]"> For modern investors</p>
        </h1>
        <h3 className="text-gray-600 p-6 m-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam aliquam quam viverra purus tellus purus. Convallis fusce</h3>
      <span>
        <button className="bg-gray-500 ">ddd</button>
      </span>
      </div>
    </div>
  );
}

export default App;
