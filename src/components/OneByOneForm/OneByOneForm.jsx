import React, { useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  InputNumber,
  Space,
  Row,
  Col,
  Card,
  Statistic,
  Divider,
  Input,
} from "antd";
import styled from "styled-components";

import { useDispatch } from "react-redux";

import { calculateOneByOne } from "../../utils/calculateOneByOne";
import { addTime } from "../../store/slices/timeStorageSlice";

const StyledFormRow = styled(Space)`
  margin-bottom: 10px;
`;

const StyledFormItem = styled(Form.Item)`
  width: 100px;
  margin-bottom: 0;
`;

const StyledButton = styled(Button)`
  min-width: 230px;
`;

const StyledDivider = styled(Divider)`
  margin: 16px 0;
`;

export const OneByOneForm = () => {
  const dispatch = useDispatch();
  const [result, setResult] = useState(0);

  const onFinish = (values) => {
    setResult(calculateOneByOne(values.times));
  };

  const onSave = (values) => {
    const { name } = values;
    if (!name) {
      return;
    }

    dispatch(addTime({ name, time: result, id: Date.now() }));
  };

  const onReset = () => {
    setResult(0);
  };

  return (
    <Row gutter={16}>
      <Col>
        <Form onFinish={onFinish} autoComplete="off">
          <Form.List name="times">
            {(fields, { add, remove }) => (
              <>
                <StyledFormRow direction="vertical">
                  {fields.map(({ key, name, ...restField }) => (
                    <Space key={key} align="baseline">
                      <StyledFormItem
                        {...restField}
                        name={[name, "hour"]}
                        rules={[{ required: true, message: "Missing hour" }]}
                      >
                        <InputNumber placeholder="Hour" />
                      </StyledFormItem>
                      <StyledFormItem
                        {...restField}
                        name={[name, "minute"]}
                        rules={[{ required: true, message: "Missing minute" }]}
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
          <Form.Item style={{ marginBottom: 10 }}>
            <StyledButton type="primary" htmlType="submit">
              Submit
            </StyledButton>
          </Form.Item>
          <Form.Item>
            <StyledButton
              ghost
              type="primary"
              htmlType="reset"
              onClick={onReset}
            >
              Clear
            </StyledButton>
          </Form.Item>
        </Form>
      </Col>
      <Col span={12}>
        <Card bordered={false}>
          <Statistic title="Result" value={result} />
          {!!result && (
            <>
              <StyledDivider />
              <Form
                autoComplete="off"
                onFinish={onSave}
                validateMessages={{ required: "Need to be filled" }}
              >
                <Form.Item
                  name="name"
                  rules={[{ required: true }]}
                  required
                  style={{ marginBottom: 10 }}
                >
                  <Input />
                </Form.Item>
                <Button htmlType="submit">Save</Button>
              </Form>
            </>
          )}
        </Card>
      </Col>
    </Row>
  );
};
