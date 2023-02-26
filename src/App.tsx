import './App.css';
import Header from './features/header/Header';
import RobotCard from './features/robotCard/RobotCard';

const App = () => {
  return (
    <div className="App">
      <Header />
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
