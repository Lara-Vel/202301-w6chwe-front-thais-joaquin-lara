import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../App/hooks';
import { robotSelector } from './robotCardSlice';
import { toggleEdition } from './robotCardSlice';

interface RobotProps {
  robot: {
    id: number;
    img: string;
    name: string;
    speed: number;
    resistance: number;
    dateOfCreation: string;
  };
}
const RobotCard: FC<RobotProps> = ({ robot }) => {
  const { isEditting } = useAppSelector(robotSelector);
  const dispatch = useAppDispatch();
  return (
    <article>
      <h3>{robot.name}</h3>

      <img src={robot.img} alt="" />
      {!isEditting ? (
        <div>
          <p>{robot.speed}</p>
          <p>{robot.resistance}</p>
          <p>{robot.dateOfCreation}</p>
          <button
            type="button"
            aria-label="Activate status"
            onClick={() => dispatch(toggleEdition())}
          >
            icono change
          </button>
        </div>
      ) : (
        <form action="">
          <label htmlFor={'robot-speed'} title="speed">
            Speed
            <input
              type="number"
              id="robot-speed"
              name={robot.name}
              max="10"
              min="0"
            />
          </label>
          <label htmlFor={'robot-resistance'} title="resistance">
            Resistance
            <input
              type="number"
              id="robot-resistance"
              name={robot.name}
              max="10"
              min="0"
            />
          </label>
          <label htmlFor={'robot-date'} title="dateOfCreation">
            Date of creation
            <input type="date" id="robot-date" name={robot.name} value="" />
          </label>
          <button
            type="submit"
            aria-label="Deactivate status"
            onClick={() => dispatch(toggleEdition())}
          >
            icono change
          </button>
        </form>
      )}
      <div>
        <i>icono delete</i>
      </div>
    </article>
  );
};

export default RobotCard;
