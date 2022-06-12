import styled from 'styled-components';
import { useWeb3 } from '@3rdweb/hooks';
import Dashboard from './Dashboard';
import { Link } from 'react-router-dom';

export default function Home() {
  const { address, connectWallet } = useWeb3();

  return (
    <Wrapper>
      <Dashboard address='0x00a8D7317ef2fd8f3Fdd81CbD0984445660049A7' />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
  background-color: #0a0b0d;
  color: white;
  display: grid;
  place-items: center;
`;

const Wrapper1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

const WalletConnect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  border: 1px solid #282b2f;
  padding: 0.8rem;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.4rem;
  background-color: #3773f5;
  color: #000;

  &:hover {
    cursor: pointer;
  }
`;
const DemoButton = styled.div`
  border: 1px solid #282b2f;
  padding: 0.8rem;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.4rem;
  background-color: #0a0b0d;
  color: #282b2f;

  &:hover {
    cursor: pointer;
  }
`;
const Details = styled.div`
  font-size: 1.2rem;
  text-align: center;
  margin-top: 1rem;
  font-weight: 500;
  color: #282b2f;
`;
