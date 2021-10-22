import React from 'react';
import { useDispatch } from 'react-redux';
import { delayForNotificationDismiss } from '../../config/config';
import { setNotification } from '../../store/actions/notificationActions';
import classes from './Notification.module.scss';

const Notification = ({ status, title, message }) => {
  const dispatch = useDispatch();
  let specialClasses = '';

  if (status === 'error') {
    specialClasses = classes.error;
  }
  if (status === 'success') {
    specialClasses = classes.success;
    setTimeout(() => {
      dispatch(
        setNotification({
          isActive: false,
        }),
      );
    }, delayForNotificationDismiss);
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
};

export default Notification;
