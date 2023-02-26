import './App.css';
import RobotCard from './features/robotCard/RobotCard';

const App = () => {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <RobotCard
        robot={{
          name: 'string',
          img: 'string',
          speed: 0,
          resistance: 0,
          dateOfCreation: '',
          id: 'id',
        }}
      />
    </div>
  );
};

export default App;
