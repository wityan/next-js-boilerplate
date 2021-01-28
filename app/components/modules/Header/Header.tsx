import Icon, { Icons } from '@element/Icon/Icon';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <span className={styles.socials} data-cy={'header-socials'}>
      <a
        href={'https://github.com/wityan/next-js-boilerplate'}
        rel="noreferrer noopener"
        target={'_blank'}
      >
        <Icon icon={Icons.GITHUB} alt={'GitHub'} />
      </a>
      <a
        href={
          'https://medium.com/@wityan/next-js-project-structure-1531610bed71'
        }
        rel="noreferrer noopener"
        target={'_blank'}
      >
        <Icon icon={Icons.MEDIUM} alt={'Medium'} />
      </a>
      <a
        href={'https://twitter.com/YannickWittwer3'}
        rel="noreferrer noopener"
        target={'_blank'}
      >
        <Icon icon={Icons.TWITTER} alt={'Twitter'} />
      </a>
    </span>
  </header>
);

export default Header;
