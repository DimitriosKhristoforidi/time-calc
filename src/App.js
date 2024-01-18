import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { Layout, Divider } from 'antd';
import { geekblue } from '@ant-design/colors';

import { TypeSelector } from './components/TypeSelector';
import { OneByOneForm } from './components/OneByOneForm';
import { ListForm } from './components/ListForm';
import typeSelector from './store/typeSelector'

const { Content } = Layout;

const StyledLayout = styled(Layout)`
  background-color: ${geekblue[1]};
  min-height: 100vh;
`

const StyledContent = styled(Content)`
  padding: 48px 12px;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
`

const App = observer(() => {
  return (
    <StyledLayout>
      <StyledContent>
        <TypeSelector />
        <Divider />
        {
          typeSelector.type === 'oneByOne'
            ? <OneByOneForm />
            : <ListForm />
        }
      </StyledContent>
    </StyledLayout>
  )
})

export default App