import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <article>
        <h1>Mi Primer Componentes en Next js 15 </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae quibusdam voluptatem quos
        </p>
      </article>
      <Link href={'/about'} >About Page</Link>
    </div>
  );
}
