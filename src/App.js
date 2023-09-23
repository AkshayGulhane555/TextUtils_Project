
import './App.css';
import Navbar from "./component/Navbar";
import TextForm from './component/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About TextUtils" />
      {/* call the Navigation code form call Navbar function */}
      <div className="container">
        <TextForm />
        {/* div className = "container" se box chota ho ke center me aa gaya */}
      </div>
    </>
  );
}

export default App;
