import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContentStyled>
        <Home />
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  background-color: var(--background-color);
  }
`;
export default App;
