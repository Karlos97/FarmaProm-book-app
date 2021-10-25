import React from 'react';
import GoBackToBooksListButton from '../../UI/GoBackToBookList/GoBackToBooksListButton';
import classes from './MainNavigation.module.scss';

const MainNavigation = () => (
  <nav className={classes.nav}>
    <GoBackToBooksListButton />
  </nav>
);

export default MainNavigation;
