import getBooksList from '../../helper/getData/getBooksList';
import {
  ADD_BOOKS_TO_BOOK_LIST,
  INCREMENT_START_INDEX,
  SET_LOADING_BOOKS_LIST_DATA_STATUS,
  SET_LOADING_BOOK_DETAILS_DATA_STATUS,
} from './actionsType';
import { setNotification } from './notificationActions';

export const addBooksToBookList = (payload) => ({
  type: ADD_BOOKS_TO_BOOK_LIST,
  payload,
});

export const setLoadingBooksListDataStatus = (payload) => ({
  type: SET_LOADING_BOOKS_LIST_DATA_STATUS,
  payload,
});

export const setLoadingBookDetailsDataStatus = (payload) => ({
  type: SET_LOADING_BOOK_DETAILS_DATA_STATUS,
  payload,
});
export const incrementStartIndex = (payload) => ({
  type: INCREMENT_START_INDEX,
  payload,
});

export const getAndAddBooksToBookList =
  (genre, startIndex, booksPerFetch) => (dispatch) => {
    dispatch(setLoadingBooksListDataStatus(true));
    getBooksList(genre, startIndex, booksPerFetch)
      .then((books) => {
        dispatch(addBooksToBookList(books));
        dispatch(
          setNotification({
            isActive: true,
            status: 'success',
            title: 'Book list fetched.',
          }),
        );
        dispatch(setLoadingBooksListDataStatus(false));
        dispatch(incrementStartIndex());
      })
      .catch(() => {
        dispatch(
          setNotification({
            isActive: true,
            status: 'error',
            title: 'Problem with fetching book list.',
          }),
        );
        dispatch(setLoadingBooksListDataStatus(false));
      });
  };
