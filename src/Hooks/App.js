import React, { useState, useEffect } from 'react';
import { Card, Collapse } from 'reactstrap';
import '../App.css';

const AppHooks = () => {
  const [inputs, setInputs] = useState(null);
  const [collapse, setCollapse] = useState(false);
  const toggle = () => {
    setCollapse(!collapse);
  };

  return (
    <div style={{ marginTop: '150px' }}>
      <div className="justify-content-center">
        <Card body>
          <div className="row">
            <div className="col-md-12">
              <form>
                <div className="row">
                  <div className="col-md-12">
                    <br />
                    <div className="col-md-6 offset-3">
                      <div className="offset-2">
                        Sí{' '}
                        <input
                          name="notificacionSi"
                          type="radio"
                          value="si"
                          onClick={() => {
                            toggle();
                          }}
                        />{' '}
                        <span className="offset-6">
                          {' '}
                          No{' '}
                          <input
                            name="notificacionNo"
                            type="radio"
                            value="no"
                            onClick={() => {
                              setCollapse(false);
                            }}
                          />{' '}
                        </span>
                      </div>
                    </div>
                    <br />
                    <Collapse isOpen={collapse}>
                      <div className="col-md-6 offset-3">
                        <Card body>
                          <div className="row">
                            <div className="col">
                              <label>
                                Días / horas antes que se desea enviar la
                                notificación{' '}
                                <span className="text-danger">*</span>
                              </label>
                              {inputs === ''
                                ? null
                                : inputs === '1'
                                ? InputDays()
                                : inputs === '2'
                                ? InputTime()
                                : null}
                              <br />
                              <div className="">
                                <select
                                  className="form-control form-control-sm"
                                  onChange={e => {
                                    setInputs(e.target.value);
                                  }}
                                >
                                  <option> --Seleccione-- </option>
                                  <option value={'1'}>Dias</option>
                                  <option value={'2'}>Horas</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </Collapse>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AppHooks;

const InputTime = () => (
  <input type="time" className={'form-control form-control-sm'} />
);

const InputDays = () => (
  <input
    type="number"
    className="form-control form-control-sm"
    defaultValue={1}
    min={1}
    max={31}
  />
);
