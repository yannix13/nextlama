import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>2023 Yannis S. All rights reserved.</div>
        <div className={styles.social}>
            <Image
              src="/1.png"
              alt='logo facebook'
              // fill={true} // permet de ne pas mettre width et height
              width={15}
              height={15}
              className={styles.icon}
            />
            <Image
              src="/2.png"
              alt='logo'
              width={15}
              height={15}
              className={styles.icon}
            />
            <Image
              src="/3.png"
              alt='logo'
              width={15}
              height={15}
              className={styles.icon}
            />
            <Image
              src="/4.png"
              alt='logo'
              width={15}
              height={15}
              className={styles.icon}
            />
        </div>
    </div>
  )
}

export default Footer