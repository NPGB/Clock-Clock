import logo from './logo.svg';
import './App.css';
import Clock from './components/clock';
import styled from 'styled-components';

const MainWrapper = styled.div`
  display: flex;  
  width: 100%;
  min-height: 100vh;
  padding: 10px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
`


function App() {
  return (
    <div className="App">
      <MainWrapper>
        <Clock></Clock>
      </MainWrapper>
    </div>
  );
}

export default App;
