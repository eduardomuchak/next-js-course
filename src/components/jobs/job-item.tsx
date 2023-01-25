import { Job } from '@/interfaces/IJobs';
import Image from 'next/image';

import styles from './job-item.module.css';

type Props = {
  job: Job;
};

function JobItem({ job }: Props) {
  const ptBrDate = new Date(job.date).toLocaleString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <li className={styles.item}>
      <Image src={job.image} alt={job.title} width={250} height={250} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2 className="text-3xl font-bold">{job.title}</h2>
          <div className={styles.date}>
            <p>
              Posted on: <time>{ptBrDate}</time>
            </p>
          </div>
          <div className={styles.address}>
            <address>{job.location}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <button>See job details</button>
        </div>
      </div>
    </li>
  );
}

export default JobItem;
