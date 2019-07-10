import React from 'react';
import classNames from 'classnames';
import InputFeedback from './input-feedback';

const RadioButtonGroup = ({
  value,
  error,
  touched,
  id,
  label,
  className,
  children
}) => {
  const classes = classNames(
    'input-field',
    {
      'is-success': value || (!error && touched),
      'is-error': !!error && touched
    },
    className
  );

  return (
    <div className={classes}>
      <fieldset>
        <legend>{label}</legend>
        {children}
        {touched && <InputFeedback error={error} />}
      </fieldset>
    </div>
  );
};

export default RadioButtonGroup;
