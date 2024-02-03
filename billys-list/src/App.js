import './App.css';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

import MainPage from './components/MainPage';

function App() {
  return (
    <MainPage />
  );
}

export default App;
