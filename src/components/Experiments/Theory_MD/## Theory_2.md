## Theory_2.js

```jsx

import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;

function ExperimentTheory1() {
    return (
        <div style={{ minHeight: "100vh" }}>
            <div style={{ fontFamily: 'Nunito Sans', fontSize: '20px', textAlign: 'justify' }}>
                <h2>UP/DOWN Counter Theory</h2>
                
                <p>An UP/DOWN counter is a digital circuit that can count in both ascending and descending order based on control inputs. In this implementation, we're using a microcontroller with specific input configurations to create this functionality. Let's break down the key components and concepts:</p>

                <h3>1. Counter Basics</h3>
                <ul>
                    <li>A counter is a sequential logic circuit that goes through a predetermined sequence of states upon the application of input pulses.</li>
                    <li>It can be implemented using flip-flops, with each flip-flop representing one bit of the counter.</li>
                    <li>The counter's capacity is 2<sup>n</sup>, where n is the number of bits (flip-flops) used.</li>
                </ul>

                <h3>2. UP/DOWN Functionality</h3>
                <ul>
                    <li>An UP/DOWN counter can count in both directions, increasing or decreasing its value based on control signals.</li>
                    <li>The direction of counting is typically controlled by a mode select input.</li>
                </ul>

                <h3>3. Input Configuration</h3>
                <h4>a. Two GPIO (General Purpose Input/Output) Pins:</h4>
                <ul>
                    <li>GPIO1: Used to control the count direction (UP or DOWN)</li>
                    <li>GPIO2: Used to enable or disable the counting operation</li>
                    <li>These pins allow for software-controlled manipulation of the counter's behavior.</li>
                </ul>
                <h4>b. One Interrupt Pin:</h4>
                <ul>
                    <li>Used as a trigger for the counting operation</li>
                    <li>Interrupts allow the microcontroller to respond immediately to external events without constantly polling the input.</li>
                </ul>

                <h3>4. Interrupt-Driven Operation</h3>
                <ul>
                    <li>When the interrupt pin is activated, it generates an interrupt request to the microcontroller.</li>
                    <li>The microcontroller suspends its current operation and jumps to the Interrupt Service Routine (ISR).</li>
                    <li>In the ISR, the counter value is updated based on the states of the GPIO pins.</li>
                    <li>This method is more efficient than continuously checking the input in a loop, as it allows the microcontroller to perform other tasks or enter a low-power state between counts.</li>
                </ul>

                <h3>5. State Logic</h3>
                <p>The counter's behavior is determined by the combination of input states:</p>
                <ul>
                    <li>If GPIO2 is LOW: Counter is disabled, ignore interrupt triggers</li>
                    <li>If GPIO2 is HIGH: Counter is enabled, respond to interrupt triggers</li>
                    <li>If GPIO1 is LOW: Count UP when triggered</li>
                    <li>If GPIO1 is HIGH: Count DOWN when triggered</li>
                </ul>

                <h3>6. Microcontroller Considerations</h3>
                <ul>
                    <li>The microcontroller must be programmed to properly configure the GPIO and interrupt pins.</li>
                    <li>Internal pull-up or pull-down resistors may be used to ensure stable input states.</li>
                    <li>Debouncing might be necessary if mechanical switches are used for inputs.</li>
                </ul>

                <h3>7. Synchronization and Timing</h3>
                <ul>
                    <li>The interrupt should be edge-triggered to avoid multiple counts for a single input pulse.</li>
                    <li>There may be a maximum frequency at which the counter can reliably operate, depending on the microcontroller's clock speed and the ISR's execution time.</li>
                </ul>

                <h3>8. Overflow and Underflow</h3>
                <ul>
                    <li>The counter should handle cases where it reaches its maximum or minimum value.</li>
                    <li>Options include wrapping around (e.g., 255 to 0 for an 8-bit counter) or stopping at the limit.</li>
                </ul>

                <h3>9. Power Efficiency</h3>
                <ul>
                    <li>Using interrupts allows the microcontroller to enter a low-power state between counts, improving energy efficiency.</li>
                    <li>This is particularly useful for battery-powered applications.</li>
                </ul>
            </div>
        </div>
    );
}

export default ExperimentTheory1;