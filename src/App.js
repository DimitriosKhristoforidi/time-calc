import styled from "styled-components";
import { Layout, Divider } from "antd";
import { geekblue } from "@ant-design/colors";

import { TypeSelector } from "./components/TypeSelector";
import { OneByOneForm } from "./components/OneByOneForm";
import { TimeStorage } from "./components/TimeStorage";
import { ListForm } from "./components/ListForm";
import { useSelector } from "react-redux";

const { Content, Sider } = Layout;

const StyledLayout = styled(Layout)`
  background-color: ${geekblue[1]};
  height: 100vh;
`;

const StyledContent = styled(Content)`
  height: 100vh;
  padding: 48px 12px;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
`;

const StyledSider = styled(Sider)`
  height: 100vh;
  background: white;
  padding: 24px;
`;

const App = () => {
  const type = useSelector((state) => state.type.value);

  return (
    <StyledLayout>
      <StyledContent>
        <TypeSelector />
        <Divider />
        {type === "one-by-one" ? <OneByOneForm /> : <ListForm />}
      </StyledContent>
      <StyledSider width={300}>
        <TimeStorage />
      </StyledSider>
    </StyledLayout>
  );
};

export default App;
