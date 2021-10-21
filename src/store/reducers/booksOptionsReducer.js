import {
  ADD_BOOKS_TO_BOOK_LIST,
  INCREMENT_START_INDEX,
  SET_LOADING_BOOKS_LIST_DATA_STATUS,
  SET_LOADING_BOOK_DETAILS_DATA_STATUS,
} from '../actions/actionsType';

const defaultState = {
  startIndex: 0,
  booksPerFetch: 15,
  loadingBooksListData: true,
  loadingBookDetailsData: true,
};

export function booksOptionsReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_LOADING_BOOKS_LIST_DATA_STATUS: {
      return {
        ...state,
        loadingBooksListData: action.payload,
      };
    }
    case SET_LOADING_BOOK_DETAILS_DATA_STATUS: {
      return {
        ...state,
        loadingBookDetailsData: action.payload,
      };
    }
    case ADD_BOOKS_TO_BOOK_LIST: {
      const books = state.bookList
        ? [...state.bookList, ...action.payload]
        : action.payload;

      const bookListAfterFilteringSameIds = [
        ...new Set(books.map((book) => book.id)),
      ].map((id) => books.find((book) => book.id === id));
      return {
        ...state,
        bookList: bookListAfterFilteringSameIds,
      };
    }
    case INCREMENT_START_INDEX: {
      return {
        ...state,
        startIndex: (state.startIndex += state.booksPerFetch),
      };
    }
    default: {
      return state;
    }
  }
}
