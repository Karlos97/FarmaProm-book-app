import { NavLink } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import classes from './GoBackToBooksListButton.module.scss';

const GoBackToBooksListButton = () => (
  <>
    <NavLink
      to="/"
      activeClassName={classes.link.active}
      className={classes.link}
    >
      <HiArrowNarrowLeft className={classes.arrow} />
      <span>Books List</span>
    </NavLink>
  </>
);

export default GoBackToBooksListButton;
