import React from 'react';
import Image from 'next/image';
import styles from './index.module.scss';

function Logo(): JSX.Element {
  return <Image src="/next.svg" className={styles.logo} alt="logo" width={240} height={240} />;
}

export default Logo;
