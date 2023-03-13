import React, { type PropsWithChildren } from 'react';
import styles from './index.module.scss';

interface Props {
  url: string;
}

function Link(props: PropsWithChildren<Props>): JSX.Element {
  const { url, children } = props;

  return (
    <a className={styles.link} href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default Link;
