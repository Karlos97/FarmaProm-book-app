import classes from './Header.module.scss';
import FarmaPromLogo from '../../images/logo_pl.png';

const Header = () => (
  <header className={classes['app-header']}>
    <h2>This is recruitment task for Farma Prom company.</h2>
    <div className={classes['app-header-block']}>
      <img
        src={FarmaPromLogo}
        alt="Leocode logo"
        className={classes['app-header-block-logo']}
      />
      <div className={classes['app-header-block-logo-name']}>Book App</div>
    </div>
  </header>
);
export default Header;
