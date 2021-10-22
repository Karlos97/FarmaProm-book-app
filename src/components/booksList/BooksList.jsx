import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment } from 'react/cjs/react.production.min';
import classes from './BooksList.module.scss';
import Book from './Book';
import Spinner from '../UI/Spinner';
import { getAndAddBooksToBookList } from '../../store/actions/booksActions';
import {
  selectShowBooksList,
  selectShowLoadingBookDetailsData,
} from '../../store/selectors/selectors';

const BooksList = () => {
  const dispatch = useDispatch();

  const loadingBookListDataSatus = useSelector(
    selectShowLoadingBookDetailsData,
  );
  const booksList = useSelector(selectShowBooksList);

  useEffect(() => {
    if (!booksList) {
      dispatch(getAndAddBooksToBookList());
    }
  }, [dispatch, booksList]);

  return (
    <Fragment>
      <ul className={classes['books-list']}>
        {booksList?.map((book) => (
          <Book
            title={book.title}
            subtitle={book.subtitle}
            authors={book.authors}
            publishedDate={book.publishedDate}
            description={book.description}
            smallThumbnail={book.smallThumbnail}
            id={book.id}
            key={book.id}
          />
        ))}
        <Spinner loading={loadingBookListDataSatus} />
      </ul>
    </Fragment>
  );
};
export default BooksList;
