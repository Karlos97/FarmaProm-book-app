import GoBackToBooksListButton from '../UI/GoBackToBooksListButton';
import classes from './MainNavigation.module.scss';

const MainNavigation = () => (
  <nav className={classes.nav}>
    <ul>
      <li>
        <GoBackToBooksListButton />
      </li>
    </ul>
  </nav>
);

export default MainNavigation;
