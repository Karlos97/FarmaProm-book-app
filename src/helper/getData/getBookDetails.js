import axios from 'axios';
import { bookDetailsUrl } from '../../config/config';

const getBookDetails = (bookId) =>
  axios
    .get(bookDetailsUrl + bookId)
    .then((res) => res.data)
    .then((res) => {
      const authorsLayout = res.volumeInfo.authors?.reduce(
        (prev, next) => `${prev}, ${next}`,
      );

      const book = {
        title: res.volumeInfo.title,
        subtitle: res.volumeInfo.subtitle || null,
        authors: authorsLayout,
        publishedDate: res.volumeInfo.publishedDate,
        description: res.volumeInfo.description || null,
        thumbnail: res.volumeInfo.imageLinks?.thumbnail || null,
        acsTokenLink: res.accessInfo.epub.acsTokenLink || null,
        publicDomain: res.accessInfo.publicDomain,
        id: res.id,
      };

      return book;
    });

export default getBookDetails;
