import { AppProps } from 'next/app';
import 'styles/base/_base.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />;

export default App;
