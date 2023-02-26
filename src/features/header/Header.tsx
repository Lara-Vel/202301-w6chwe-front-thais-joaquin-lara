import { useAppDispatch, useAppSelector } from '../../App/hooks';
import './Header.css';
import { robotAsync, selectStatus } from './headerSlice';

export function Header() {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);

  return (
    <div>
      <div className="header__container">
        <div className="header__container-logo-text">
          <h3>All your favourite robots in one place!</h3>
        </div>
        <button
          className={
            status === 'loading'
              ? '.header__button-asyncButton'
              : '.header__button'
          }
          onClick={() => dispatch(robotAsync())}
        >
          View all robots
        </button>
      </div>
    </div>
  );
}

export default Header;
