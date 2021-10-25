import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Spinner from '../../UI/Spinner/Spinner';
import classes from '../Book/Book.module.scss';

import getBookDetails from '../../../helper/getData/getBookDetails';
import { setLoadingBookDetailsDataStatus } from '../../../store/actions/booksActions';
import { setNotification } from '../../../store/actions/notificationActions';

const BookDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const loadingBookDetailsData = useSelector(
    ({ booksOptions }) => booksOptions?.loadingBookDetailsData,
  );
  const error = useSelector(
    ({ notification }) => notification.status !== 'error',
  );
  const history = useHistory();
  if (!error) {
    history.goBack();
  }

  const [bookData, setBookData] = useState({
    title: '',
    subtitle: '',
    authors: '',
    publishedDate: '',
    description: '',
    thumbnail: '',
    acsTokenLink: '',
    publicDomain: '',
    id: '',
  });

  const { bookId } = params;

  const {
    title,
    subtitle,
    authors,
    publishedDate,
    description,
    thumbnail,
    acsTokenLink,
    publicDomain,
  } = bookData;

  useEffect(() => {
    dispatch(setLoadingBookDetailsDataStatus(true));

    getBookDetails(bookId)
      .then((book) => {
        setBookData(book);
        dispatch(
          setNotification({
            isActive: true,
            status: 'success',
            title: 'Book details fetched.',
          }),
        );
        dispatch(setLoadingBookDetailsDataStatus(false));
      })
      .catch(() => {
        dispatch(
          setNotification({
            isActive: true,
            status: 'error',
            title: 'Problem with fetching book details.',
          }),
        );
        dispatch(setLoadingBookDetailsDataStatus(false));
      });
  }, [dispatch, bookId]);

  return (
    <>
      <Spinner loading={loadingBookDetailsData} />
      {!loadingBookDetailsData && error && (
        <div className={classes.book}>
          <img
            className={classes['book-image']}
            alt="Book"
            src={thumbnail}
          />
          <div className={classes['book-top']}>
            <p className={classes['book-top-title-details']}>
              {title}
            </p>
            <p className={classes['book-top-subtitle']}>{subtitle}</p>
          </div>
          <h5 className={classes['book-authors']}>
            {`${authors} (${publishedDate})`}
          </h5>
          {typeof acsTokenLink === 'string' && publicDomain && (
            <a
              href={acsTokenLink}
              className={classes['book-download']}
            >
              DOWNLOAD BOOK
            </a>
          )}

          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      )}
    </>
  );
};

export default BookDetails;
