import SignupField from './components/SignupField';
import './css/App.min.css';

function App() {
  return (
    <div className="App">
      <div className='intro'>
        <h1>Learn to code by watching others</h1>
        <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
          but understanding how developers think is invaluable.</p>
      </div>
      <div className='signup-cont'>
        <div className='add'><p><span className='bold'>Try it free 7 days</span> then $20/mo. thereafter</p></div>
        <SignupField />
      </div>
    </div>
  );
}

export default App;
