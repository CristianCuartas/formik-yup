import React, { useState } from 'react';
import { Field, withFormik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Card } from 'reactstrap';
import { RadioButtonSi, RadioButtonNo } from './radio-button';
import { Select, Days, Hours } from './text-field';

const SI = { label: 'Si', value: 'true' };
const NO = { label: 'No', value: 'false' };

const InputsCondition = () => (
  <div className="col-md-6 offset-3">
    <div className="offset-2">
      <Field
        component={RadioButtonSi}
        name="inputsCondition"
        id="true"
        label="Si"
        value="true"
      />
      <Field
        component={RadioButtonNo}
        name="inputsCondition"
        id="false"
        label="No"
        value="false"
      />
    </div>
  </div>
);

const ComponentNotification = props => {
  const [inputs, setInputs] = useState(null);
  return (
    <div className="col-md-6 offset-3">
      <Card body>
        <div className="row">
          <div className="col">
            <label>
              Días / horas antes que se desea enviar la notificación{' '}
              <span className="text-danger">*</span>
            </label>
            <Select
              name="selectNotification"
              onClick={e => {
                setInputs(e.target.value);
              }}
              {...props}
            >
              <option value={'0'}> --Seleccione-- </option>
              <option value={'1'}>Días</option>
              <option value={'2'}>Horas</option>
            </Select>
            <ErrorMessage name="selectNotification" />
            {inputs === '0' ? null : inputs === '1' ? (
              <div>
                <Days name="days" {...props} />
                <ErrorMessage name="days" />
              </div>
            ) : inputs === '2' ? (
              <div>
                <Hours name="hours" {...props} />
                <ErrorMessage name="hours" />
              </div>
            ) : null}
          </div>
        </div>
      </Card>
    </div>
  );
};

const Notification = props => {
  const { values } = props;
  const requiredNotification = values.inputsCondition !== NO.value;
  return (
    <Card body>
      <div className="row">
        <div className="col-md-12">
          <form role="form">
            <div className="row">
              <div className="col-md-12">
                <p className="text-justify">
                  {' '}
                  ¿Desea enviar una notificación al administrador del sistema
                  indicando las horas o los dias antes en la cual se va a
                  ejecutar la programación automática?
                </p>
                <div className="col-md-6 offset-3">
                  <div className="offset-2">
                    <InputsCondition {...props} />
                  </div>
                </div>
                <br />
                {requiredNotification && <ComponentNotification {...props} />}
              </div>
            </div>
          </form>
        </div>
      </div>
    </Card>
  );
};

export default withFormik({
  mapPropsToValues: props => ({
    selectNotification: props.validacionNotificaciones.selectNotification,
    days: props.validacionNotificaciones.days,
    hours: props.validacionNotificaciones.hours
  }),
  validationSchema: Yup.object().shape({
    selectNotification: Yup.string()
      .ensure()
      .required('Notificacion requerida'),
    days: Yup.string().required('Días requeridos.'),
    hours: Yup.string().required('Hora requerida.')
  })
})(Notification);
