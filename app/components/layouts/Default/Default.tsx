import Header from '@module/Header/Header';
import styles from './Default.module.scss';

type Props = {
  children: React.ReactNode;
};

const Default = ({ children }: Props) => (
  <div className={styles.default}>
    <Header />
    <div className={styles.content}>{children}</div>
  </div>
);

export default Default;
