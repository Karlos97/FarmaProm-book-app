import { NavLink } from "react-router-dom";
import classes from "./Book.module.scss";

const Book = ({
  title,
  subtitle,
  authors,
  publishedDate,
  description,
  smallThumbnail,
  id,
}) => {
  const authorsLayout = authors?.reduce((prev, next) => `${prev}, ${next}`);

  return (
    <li className={classes.book}>
      <img className={classes["book-image"]} alt="Book" src={smallThumbnail} />
      <div className={classes["book-top"]}>
        <NavLink to={`/book/${id}`} className={classes["book-top-title"]}>
          {title}
        </NavLink>
        {subtitle ? (
          <p className={classes["book-top-subtitle"]}>{subtitle}</p>
        ) : (
          <p className={classes["book-top-subtitle"]}>
            See detailed description below.
          </p>
        )}
      </div>
      <h5 className={classes["book-authors"]}>
        {`${authorsLayout} (${publishedDate})`}
      </h5>
      <p className={classes["book-description"]}>{description}</p>
    </li>
  );
};

export default Book;
