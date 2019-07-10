import React, { Component } from 'react';
import { Card } from 'reactstrap';
import "../App.css";

class AppNoHooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: ''
    };
  }

  render() {
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
                        <Card body>
                          <div className="row">
                            <div className="col">
                              <label>
                                Días / horas antes que se desea enviar la
                                notificación{' '}
                                <span className="text-danger">*</span>
                              </label>
                              <br />
                              <div className="">
                                <select
                                  className="form-control form-control-sm"
                                  onChange={e => {
                                    this.setState({ inputs: e.target.value });
                                  }}
                                >
                                  <option>--Seleccione--</option>
                                  <option value={'1'}>Dias</option>
                                  <option value={'2'}>Horas</option>
                                </select>
                                <br />
                                {this.state.inputs === ''
                                  ? null
                                  : this.state.inputs === '1'
                                  ? InputDays()
                                  : this.state.inputs === '2'
                                  ? InputTime()
                                  : null}
                              </div>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}
export default AppNoHooks;

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
