import { FC } from 'react';
import { Robot } from '../robotCard/robotCardSlice';
import RobotCard from '../robotCard/RobotCard';

interface CardListProps {
  robots: Robot[];
}

const RobotCardList: FC<CardListProps> = ({ robots }) => {
  return (
    <div>
      <ul className="robots-cards">
        {robots.map((robot) => (
          <li className="robots-cards" key={robot.id}>
            <RobotCard robot={robot} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RobotCardList;
