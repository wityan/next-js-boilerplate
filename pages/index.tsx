import { NextPage } from 'next';
import Default from '@layout/Default/Default';
import HomePage from '@template/HomePage/HomePage';

const App: NextPage = () => (
  <Default>
    <HomePage />
  </Default>
);

export default App;
