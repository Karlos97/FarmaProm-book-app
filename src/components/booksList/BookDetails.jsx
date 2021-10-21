import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../UI/Spinner';
import classes from './Book.module.scss';

import getBookDetails from './../../helper/getData/getBookDetails';
import { useDispatch, useSelector } from 'react-redux';
import { setLoadingBookDetailsDataStatus } from '../../store/actions/booksActions';
import { setNotification } from '../../store/actions/notificationActions';

const BookDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const loadingBookDetailsData = useSelector(
    ({ booksOptions }) => booksOptions?.loadingBookDetailsData
  );
  const error = useSelector(
    ({ notification }) => notification.status !== 'error'
  );

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
        //TODO a co jesli bedzie sukces ale bez book? sprawdz czy taka sytuacja moze wystapic, ale warto sie zabezpieczyc
        setBookData(book);
        dispatch(
          setNotification({
            isActive: true,
            status: 'success',
            title: 'Book list fetched.',
          })
        );
        dispatch(setLoadingBookDetailsDataStatus(false));
      })
      .catch(() => {
        dispatch(
          setNotification({
            isActive: true,
            status: 'error',
            title: 'Problem with fetching book list.',
          })
        );
        dispatch(setLoadingBookDetailsDataStatus(false));
      });
  }, [dispatch, bookId]);

  return (
    <>
      <Spinner loading={loadingBookDetailsData} />
      {!loadingBookDetailsData && error && (
        <div className={classes.book}>
          <img className={classes['book-image']} alt="Book" src={thumbnail} />
          <div className={classes['book-top']}>
            <p className={classes['book-top-title-details']}>{title}</p>
            <p className={classes['book-top-subtitle']}>{subtitle}</p>
          </div>
          <h5 className={classes['book-authors']}>
            {`${authors} (${publishedDate})`}
          </h5>
          {typeof acsTokenLink === 'string' && publicDomain && (
            <a href={acsTokenLink} className={classes['book-download']}>
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

// * `volumeInfo.title`
// * `volumeInfo.subtitle`
// * `volumeInfo.authors[]`
// * `volumeInfo.publishedDate`
// * `volumeInfo.description`
// * `volumeInfo.imageLinks.thumbnail`
// * `volumeInfo.accessInfo.epub.acsTokenLink` (wyświetl link do pobrania jeśli `volumeInfo.accessInfo.epub.acsTokenLink`
//   jest tekstem oraz `volumeInfo.accessInfo.publicDomain` równa się `true`)
