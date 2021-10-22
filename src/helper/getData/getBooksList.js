import axios from 'axios';
import { bookListUrl, booksPerFetch } from '../../config/config';

const getBooksList = (genre = 'fiction', startIndex = 0) => {
  const bookstListLink = `${bookListUrl}${genre}&startIndex=${startIndex}&maxResults=${booksPerFetch}`;

  return axios.get(bookstListLink).then((res) =>
    res.data?.items.map((book) => ({
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      authors: book.volumeInfo.authors,
      publishedDate: book.volumeInfo.publishedDate,
      description: book.volumeInfo.description,
      smallThumbnail: book.volumeInfo.imageLinks.smallThumbnail,
      id: book.id,
    })),
  );
};

export default getBooksList;
