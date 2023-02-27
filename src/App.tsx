import './App.css';
import RobotCardList from './features/robotCardList/RobotCardList';

const App = () => {
  return (
    <div className="App">
      <h1 className="app__title">All your favourite robots in one place!</h1>
      <RobotCardList />
    </div>
  );
};

export default App;
