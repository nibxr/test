import React from 'react';
import { Card, Tooltip } from 'antd';
import styled from 'styled-components';

const PortContainer = styled(Card)`
  text-align: center;
`;

const BitCell = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  margin: 2px;
  text-align: center;
  line-height: 30px;
  font-weight: bold;
  background-color: ${props => props.isSet ? '#52c41a' : '#d9d9d9'};
`;

const Ports = ({ port, bit, desc, value }) => {
  return (
    <PortContainer title={port}>
      <div>
        {value.map((v, index) => (
          <Tooltip key={index} title={`${port}.${index}: ${v ? '1' : '0'} (${desc[index]})`}>
            <BitCell isSet={v}>{v ? '1' : '0'}</BitCell>
          </Tooltip>
        ))}
      </div>
    </PortContainer>
  );
};

export default Ports;