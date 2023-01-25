import { Job } from '@/interfaces/IJobs';
import Image from 'next/image';

import styles from './job-item.module.css';
import { Button } from '../ui/Button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';

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
          <h2 className="text-2xl font-semibold">{job.title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <p>
              Posted on: <time>{ptBrDate}</time>
            </p>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{job.location}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={`/jobs/${job.id}`}>See job details</Button>
        </div>
      </div>
    </li>
  );
}

export default JobItem;
