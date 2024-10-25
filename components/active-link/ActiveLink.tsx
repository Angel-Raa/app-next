'use client';

import Link from "next/link";
import styles from "./ActiveLink.module.css"
import { Props } from "../../interfaces";
import { usePathname } from "next/navigation";

export const ActiveLink = ({ text, path }: Props) => {
  const pathname = usePathname();
  const isActive = path === pathname;
  return (
    <>
      <Link href={path} className={`${styles.navItem } ${isActive ? styles.active : ''} `}>
        {text}
      </Link>
    </>
  );
};
