import React from 'react';
import { observer } from "mobx-react-lite"

import { Segmented } from 'antd';
import { UnorderedListOutlined, AlignRightOutlined } from '@ant-design/icons';

import typeSelector from '../../store/typeSelector'

const options = [
  {label: 'One-by-one', value: 'oneByOne', icon: <UnorderedListOutlined />},
  {label: 'List', value: 'list', icon: <AlignRightOutlined />},
]

export const TypeSelector = observer(() => {
  return (
    <Segmented
      value={typeSelector.type}
      options={options}
      block
      onChange={(type) => typeSelector.selectType(type)}
    />
  )
})