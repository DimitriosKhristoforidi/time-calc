import React, { useState } from 'react';
import { Button, Form, Input, Row, Col, Card, Statistic  } from 'antd';
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
    <Row gutter={16}>
      <Col span={12}>
        <Form onFinish={onFinish} autoComplete="off">
          <Form.Item name="timesList" rules={[{ required: true, message: 'Missing list' }]}>
            <Input.TextArea
              autoSize
              allowClear
              placeholder="Times List"
            />
          </Form.Item>
          <Form.Item>
            <StyledButton type="primary" htmlType="submit">
              Submit
            </StyledButton>
          </Form.Item>
        </Form>
      </Col>
      <Col span={12}>
        <Card bordered={false}>
          <Statistic title="Result" value={result} />
        </Card>
      </Col>
    </Row>
  )
}
