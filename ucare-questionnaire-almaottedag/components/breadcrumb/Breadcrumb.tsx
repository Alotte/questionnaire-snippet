import React from 'react';
import styles from './Breadcrumb.module.css';
import { ic_s_small } from '../../public/assets/navbar';
import Image from 'next/image';
import { RiArrowRightLine } from 'react-icons/ri';
import { icBreadcrumbChevron } from '../../public/assets';
import Link from 'next/link';

interface BreadcrumbProps {
  titles?: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ titles }) => {
  return (
    <div className={styles.breadcrumb}>
      <Link href="/">
        <Image src={ic_s_small} alt="project" width={24} height={24} />
      </Link>
      <p className={styles.breadcrumb_origin}>ESM Steg 7-9 v1</p>

      {titles ? (
        titles.map((title, index) => (
          <div className={styles.breadcrumb_container} key={index}>
            <Image src={icBreadcrumbChevron} alt="project" width={18} height={18} />
            <p>{title}</p>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default Breadcrumb;