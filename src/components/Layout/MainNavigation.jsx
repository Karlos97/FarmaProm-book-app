import GoBackToBooksListButton from '../UI/GoBackToBooksListButton';
import classes from './MainNavigation.module.scss';

const MainNavigation = () => (
  <nav className={classes.nav}>
    <GoBackToBooksListButton />
  </nav>
);

export default MainNavigation;
