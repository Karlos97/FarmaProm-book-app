import { useLocation } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import {
  getAndAddBooksToBookList,
  incrementStartIndex,
  setLoadingBooksListDataStatus,
} from '../../store/actions/booksActions';
import MainNavigation from './MainNavigation';
import classes from './Layout.module.scss';
import Notification from '../UI/Notification';
import { booksPerFetch, delayForNextFetechBookList } from '../../config/config';
import {
  selectShowNotification,
  selectShowStartIndex,
} from '../../store/selectors/selectors';

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const listInnerRef = useRef();
  const dispatch = useDispatch();

  const [fetchingBooks, setFetchingBooks] = useState(false);

  const { isActive, status, title } = useSelector(selectShowNotification);
  const startIndex = useSelector(selectShowStartIndex);

  const isMainpage = pathname === '/';

  const onScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;

    if (listInnerRef.current) {
      const pageAtTheBottom =
        scrollTop + clientHeight >= scrollHeight - clientHeight / 4;
      if (pageAtTheBottom && isMainpage && !fetchingBooks) {
        setFetchingBooks(true);
        dispatch(setLoadingBooksListDataStatus(true));
        dispatch(getAndAddBooksToBookList('fiction', startIndex));
        dispatch(incrementStartIndex());

        setTimeout(() => {
          setFetchingBooks(false);
        }, delayForNextFetechBookList);
      }
    }
  };

  const mainElementClass = !isMainpage
    ? classes['book-list']
    : classes['book-details'];

  return (
    <>
      <div className={classes.app} onScroll={onScroll} ref={listInnerRef}>
        <Header />
        {isActive && <Notification status={status} title={title} />}
        {!isMainpage && <MainNavigation />}
        <main className={mainElementClass}>{children}</main>
      </div>
    </>
  );
};
export default Layout;
