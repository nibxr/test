import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;
function ExperimentTheory3(props) {
  return (
      <div style={{ minHeight: "100vh", padding: "20px" }}>
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>

              <h2>ADC Interfacing with 8051 Microcontroller</h2>
              <p>
                  An ADC converts analog signals into digital form, enabling the measurement of analog voltages when interfaced with an 8051 microcontroller.
              </p>

              <h3>Key Components</h3>
              <ol>
                  <li>ADC (e.g., ADC0804 or ADC0808)</li>
                  <li>8051 microcontroller</li>
                  <li>Two seven-segment displays</li>
                  <li>Supporting circuitry (resistors, capacitors)</li>
              </ol>

              <h3>Procedure</h3>
              <ol>
                  <li>
                      Connect the ADC to the 8051:
                      <ul>
                          <li>ADC data pins to Port 1 of 8051</li>
                          <li>ADC control pins (CS, RD, WR) to Port 3 pins</li>
                      </ul>
                  </li>
                  <li>Connect seven-segment displays to available port pins (e.g., Port 2)</li>
                  <li>
                      Program the 8051:
                      <ul>
                          <li>Initialize ports and ADC</li>
                          <li>Create ADC reading routine</li>
                          <li>Implement binary to BCD conversion</li>
                          <li>Set up display routine</li>
                      </ul>
                  </li>
                  <li>Compile and upload the code to the 8051</li>
                  <li>Apply analog input to the ADC</li>
                  <li>Power up the circuit and observe the displayed value</li>
                  <li>Test with different analog inputs to verify operation</li>
                  <li>Calibrate if necessary for improved accuracy</li>
              </ol>


</Content>
        </div>
    );
}

export default ExperimentTheory3;
