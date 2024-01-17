import React, { useState } from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, InputNumber, Space, Typography  } from 'antd';
import styled from 'styled-components';

import { calculateOneByOne } from '../../utils/calculateOneByOne'

const StyledFormRow = styled(Space)`
  margin-bottom: 10px;
`

const StyledFormItem = styled(Form.Item)`
  width: 100px;
  margin-bottom: 0;
`

const StyledButton = styled(Button)`
  min-width: 230px;
`

export const OneByOneForm = () => {
  const [result, setResult] = useState(0)

  const onFinish = (values) => {
    setResult(calculateOneByOne(values.times))
  }

  return (
    <Space direction='vertical'>
      <Form onFinish={onFinish} autoComplete="off">
        <Form.List name="times">
          {(fields, { add, remove }) => (
            <>
              <StyledFormRow direction="vertical">
                {fields.map(({ key, name, ...restField }) => (
                  <Space key={key} align="baseline">
                    <StyledFormItem
                      {...restField}
                      name={[name, 'hour']}
                      rules={[{ required: true, message: 'Missing hour' }]}
                    >
                      <InputNumber placeholder="Hour" />
                    </StyledFormItem>
                    <StyledFormItem
                      {...restField}
                      name={[name, 'minute']}
                      rules={[{ required: true, message: 'Missing minute' }]}
                    >
                      <InputNumber placeholder="Minute" />
                    </StyledFormItem>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
              </StyledFormRow>
                <Form.Item>
                  <StyledButton
                    block
                    type="dashed"
                    onClick={() => add()}
                    icon={<PlusOutlined />}
                  >
                    Add time
                  </StyledButton>
                </Form.Item>
            </>
          )}
        </Form.List>
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