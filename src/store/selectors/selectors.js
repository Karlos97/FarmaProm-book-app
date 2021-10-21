export const selectShowLoadingBookDetailsData = ({ booksOptions }) =>
  booksOptions?.loadingBookDetailsData;

export const selectShowBooksList = ({ booksOptions }) => booksOptions.bookList;

export const selectShowNotification = ({ notification }) => notification;

export const selectShowStartIndex = ({ booksOptions }) =>
  booksOptions.startIndex;
//     export const booksPerFetch = useSelector(
//     ({ booksOptions }) => booksOptions.booksPerFetch
//   );
