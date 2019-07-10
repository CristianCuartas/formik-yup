import React from 'react';
import { render } from 'react-dom';
import { Formik } from 'formik';

import { Card } from 'reactstrap';
import Notification from './payment-info';
import { shapeUsingWhenPerField } from './validation-shapes';

const dataValidacionNotificacione = {
  selectNotification: '',
  hours: '',
  days: ''
};

const TryThis = props => (
  <Formik
    enableReinitialize={true}
    initialValues={{
      inputsCondition: 'false',
      selectNotification: '',
      hours: '',
      days: ''
    }}
    onSubmit={(values, actions) => {
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }, 500);
    }}
    render={props => (
      <Notification
        validacionNotificaciones={dataValidacionNotificacione}
        {...props}
      />
    )}
  />
);

export default TryThis;
