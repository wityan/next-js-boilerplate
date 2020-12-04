import Image from 'next/image';
import styles from './Card.module.scss';

type Props = {
  title: string;
  children: React.ReactNode;
  hero?: string;
};

const Card: React.FC<Props> = ({ title, children, hero }) => (
  <div className={styles.card}>
    {hero && <Image src={hero} alt={title} height={400} width={900} className={styles.image} />}
    <div className={styles.content}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.paragraph}>{children}</p>
    </div>
  </div>
);

export default Card;
