import React from 'react';
import { Logo, Link } from '../components';
import styles from './index.module.scss';

function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Logo />
      <p>
        Edit <code>src/pages/index.tsx</code> and save to reload.
      </p>
      <Link url="https://nextjs.org">Learn Next.js</Link>
    </div>
  );
}

export default Home;
