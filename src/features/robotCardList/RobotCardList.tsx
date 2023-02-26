import RobotCard from '../RobotCard/RobotCard';
import { useAppDispatch, useAppSelector } from '../../App/hooks';
import { getRobotsList, robotsListSelector } from './robotCardListSlice';
import './RobotCardList.css';
import { useEffect } from 'react';

const RobotCardList = () => {
  const dispatch = useAppDispatch();
  const robotsSelector = useAppSelector(robotsListSelector);
  const { robots } = robotsSelector;

  useEffect(() => {
    dispatch(getRobotsList);
  }, [dispatch, robots]);

  return (
    <section className="robots__container">
      <button
        className="robots-container__btn"
        onClick={() => dispatch(getRobotsList())}
      >
        View all robots
      </button>
      <ul className="robots-container__list">
        {robots.map((robot) => (
          <li className="robots-cards" key={`${robot.id}-${robot.name}`}>
            <RobotCard robot={robot} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RobotCardList;
