## Theory_5.js

```jsx

import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;

function ExperimentTheory4(props) {
  return (
      <div style={{ minHeight: "100vh", padding: "20px" }}>
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>


              <h2>PN Sequence Generation using LFSR</h2>
                <p>
                    A PN sequence is a deterministic binary sequence that appears random and is widely used in spread spectrum communications, encryption, and testing.
                </p>

                <h3>Key Concepts</h3>
                <ol>
                    <li>
                        Linear Feedback Shift Register (LFSR):
                        <ul>
                            <li>Core component of many PN sequence generators</li>
                            <li>Consists of shift registers and XOR gates</li>
                            <li>Generates a pseudo-random binary sequence</li>
                        </ul>
                    </li>
                    <li>
                        Maximal Length Sequence:
                        <ul>
                            <li>A PN sequence of maximum possible period before repeating</li>
                            <li>For an n-bit LFSR, the maximal length is 2^n - 1</li>
                        </ul>
                    </li>
                    <li>
                        Feedback Polynomial:
                        <ul>
                            <li>Determines the taps of the LFSR</li>
                            <li>Crucial for achieving maximal length sequences</li>
                        </ul>
                    </li>
                    <li>
                        8051 Implementation:
                        <ul>
                            <li>Uses software to emulate LFSR behavior</li>
                            <li>Utilizes bit manipulation instructions for efficiency</li>
                        </ul>
                    </li>
                </ol>

            </Content>
        </div>
    );
}

export default ExperimentTheory4;