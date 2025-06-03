import React, { useState, createRef, useEffect } from 'react';
import { UploadOutlined, CaretRightOutlined, PauseOutlined, StopOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';

function FileUpload(props) {
  const [fileContent, setFileContent] = useState('');
  const [size, setSize] = useState('large');
  const uploadButtonRef = React.createRef();
  const [isUploaded, setIsUploaded] = useState(0);
  const [runState, setRunState] = useState(0);

  useEffect(() => {
    props.trigger(runState);
  }, [runState]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFileContent(e.target.result);
        props.pushCode(e.target.result);
        setIsUploaded(!isUploaded);
      };
      reader.readAsText(file);
    }
  };

  const handleContentChange = (event) => {
    setFileContent(event.target.textContent);
  };

  const triggerUpload = () => {
    uploadButtonRef.current.click();
  };

  const handleStart = () => {
    setRunState(1);
  };

  const handlePause = () => {
    setRunState(runState === 2 ? 1 : 2);
  };

  const handleStop = () => {
    setRunState(0);
  };

  return (
    <div>
      <Flex gap="small" wrap="wrap">
        <Button type="primary" htmlFor="fileInput" onClick={triggerUpload} icon={<UploadOutlined />} size={size}>
          Upload File
        </Button>
        <Button
          type="primary"
          onClick={handleStart}
          disabled={!isUploaded || runState === 1}
          icon={<CaretRightOutlined />}
          size={size}
        >
          Start
        </Button>
        <Button
          type="default"
          onClick={handlePause}
          disabled={!isUploaded || runState === 0}
          icon={<PauseOutlined />}
          size={size}
        >
          {runState === 2 ? 'Resume' : 'Pause'}
        </Button>
        <Button
          type="default"
          onClick={handleStop}
          disabled={!isUploaded || runState === 0}
          icon={<StopOutlined />}
          size={size}
        >
          Stop
        </Button>
      </Flex>

      <input
        type="file"
        id="fileInput"
        accept=".asm"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        ref={uploadButtonRef}
      />

      <div style={{ width: '100%', marginTop: '16px' }}>
        <h3>Code:</h3>
        <pre
          style={{
            background: '#f5f5f5',
            padding: '16px',
            borderRadius: '4px',
            overflowX: 'auto',
          }}
          contentEditable={false}
          onInput={handleContentChange}
        >
          {fileContent}
        </pre>
      </div>
    </div>
  );
}

export default FileUpload;