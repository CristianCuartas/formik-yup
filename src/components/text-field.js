import React, { useState } from 'react';
import { Field } from 'formik';
import InputFeedback from './input-feedback';

export const Days = ({
  name,
  handleChange,
  handleBlur,
  label = '',
  ...props
}) => {
  return (
    <div>
      <Field
        name={name}
        component="input"
        type="number"
        defaultValue={1}
        min={1}
        max={31}
        onChange={handleChange}
        onBlur={handleBlur}
        {...props}
      />
    </div>
  );
};

export const Hours = ({
  name,
  handleChange,
  handleBlur,
  label = '',
  ...props
}) => {
  return (
    <div>
      <Field
        name={name}
        component="input"
        type="time"
        onChange={handleChange}
        onBlur={handleBlur}
        {...props}
      />
    </div>
  );
};

export const Select = ({
  name,
  handleChange,
  handleBlur,
  label = '',
  ...props
}) => {
  return (
    <div>
      <Field
        name={name}
        component="select"
        onChange={handleChange}
        onBlur={handleBlur}
        {...props}
      />
    </div>
  );
};
