import Link from 'next/link';
import styles from './button.module.css';

export function Button({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) {
  return (
    <Link href={link} className={styles.btn}>
      {children}
    </Link>
  );
}
