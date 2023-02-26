import './App.css';
import Header from './features/header/Header';
import RobotCard from './features/robotCard/RobotCard';

const App = () => {
  return (
    <div className="App">
      <Header />
      <RobotCard
        robot={{
          id: 'id',
          img: 'string',
          name: 'string',
          speed: 0,
          resistance: 0,
          dateOfCreation: '',
        }}
      />
    </div>
  );
};

export default App;
