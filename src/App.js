import logo from './logo.svg';
import './App.css';
import ChatBox from './views/ChatBox';

function App() {
  return (
    <div className="App">
      <div className='w-3/4 text-center'>
        <ChatBox/>

        <ChatBox/>
        <ChatBox/>
      </div>
    </div>
  );
}

export default App;
