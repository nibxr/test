import React, { useEffect, useState, useRef } from 'react';
import { Col, Row, Divider, Card, Button, Modal } from 'antd';
import FileUpload from './FileUpload';
import Ports from './Ports';
import { executeLine } from './bin_counter';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const code = [
  "MOV A,#00H",
  "LOOP : MOV P1,A",
  "INC A",
  "CJNE A,#00FF,LOOP",
  "MOV P1,A",
  "SJMP START",
];

export default function PortValue() {
  const [dacValue, setDacValue] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [accumuValue, setAccValue] = useState([]);
  const [render, setRender] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [run, setRun] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pausedIndexRef = useRef(0);
  const [accumulatorValue, setAccumulatorValue] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [graphData, setGraphData] = useState({
    labels: [],
    datasets: [
      {
        label: 'DAC Output',
        data: [],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  });
  const chartRef = useRef(null);

  useEffect(() => {
    if (run === 1 && !isPaused) {
      const intervalId = setInterval(() => {
        if (currentIndex < accumuValue.length) {
          setDacValue(accumuValue[currentIndex].portValues.split('').map(Number).slice().reverse());
          setAccumulatorValue(accumuValue[currentIndex].accumulatorValue.split('').map(Number));
          setGraphData((prevState) => ({
            labels: [...prevState.labels, ''],
            datasets: [
              {
                ...prevState.datasets[0],
                data: [...prevState.datasets[0].data, parseInt(accumuValue[currentIndex].portValues, 2)],
              },
            ],
          }));
          setCurrentIndex(currentIndex + 1);

          if (chartRef.current) {
            chartRef.current.update();
          }
        } else {
          clearInterval(intervalId);
        }
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    } else if (run === 2) {
      setIsPaused(true);
      pausedIndexRef.current = currentIndex;
    } else if (run === 1 && isPaused) {
      setIsPaused(false);
      setCurrentIndex(pausedIndexRef.current);
    }
  }, [run, accumuValue, currentIndex, isPaused]);

  useEffect(() => {
    if (run === 1) {
      var temp_acc = [];
      for (let i = 0; i < code.length; i++) {
        var op = executeLine(code[i], i);
        if (op !== undefined) temp_acc = op;
      }
      setAccValue(temp_acc);
      setRender(!render);
    }
  }, [run]);

  function reteriveCode(code) {
    console.log(code);
  }

  function triggerScript(trigger) {
    setRun(trigger);
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 255,
      },
    },
  };

  return (
    <>
      <Row gutter={[12, 12]} style={{ marginTop: '16px' }}>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button type="primary" onClick={showModal}>
            Instructions
          </Button>
        </Col>
      </Row>
      <Modal title="Instructions" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>1. Upload an assembly code file by clicking the "Upload File" button.</p>
        <p>2. Click the "Start" button to begin executing the code.</p>
        <p>3. The simulator will execute the code line by line, updating the DAC values and accumulator value accordingly.</p>
        <p>4. Click the "Pause" button to pause the execution at any point. Click "Resume" to continue from where it was paused.</p>
        <p>5. Click the "Stop" button to stop the execution and reset the simulator.</p>
      </Modal>
      <Divider />

      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card title="Upload and Code">
            <FileUpload pushCode={reteriveCode} trigger={triggerScript} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="DAC Interface">
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Ports port="DAC" bit={8} desc={['', '', '', '', '', '', '', '']} value={dacValue} />
              </Col>
              <Col span={24}>
                <p>Accumulator: Value: {parseInt(accumulatorValue.join(''), 2)}</p>
              </Col>
              <Col span={24}>
                <div style={{ height: '200px' }}>
                  <Line ref={chartRef} data={graphData} options={options} />
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}