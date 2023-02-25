import './App.css';
import RobotCard from './features/robotCard/RobotCard';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <RobotCard
        robot={{
          id: 0,
          img: 'string',
          name: 'string',
          speed: 0,
          resistance: 0,
          dateOfCreation: '',
        }}
      />
    </div>
  );
}

export default App;
