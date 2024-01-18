import React, { useState } from 'react';
import { Button, Form, Input, Space, Typography  } from 'antd';
import styled from 'styled-components';

import { calculateOneByOne } from '../../utils/calculateOneByOne'
import { splitStringToTime } from '../../utils/splitStringToTime';

const StyledButton = styled(Button)`
  min-width: 230px;
`

export const ListForm = () => {
  const [result, setResult] = useState(0)

  const onFinish = (values) => {
    const list = values.timesList
      .trim()
      .split("\n")
      .map(splitStringToTime)
    console.log(list)
    setResult(calculateOneByOne(list))
  }
  return (
    <Space direction='vertical'>
      <Form onFinish={onFinish} autoComplete="off">
        
        <Form.Item name="timesList" rules={[{ required: true, message: 'Missing list' }]}>
          <Input.TextArea placeholder="Times List" />
        </Form.Item>
        
        <Form.Item>
          <StyledButton type="primary" htmlType="submit">
            Submit
          </StyledButton>
        </Form.Item>
      </Form>
      <Typography.Title level={5}>
        <pre>{result}</pre>
      </Typography.Title>
    </Space>
  )
}
