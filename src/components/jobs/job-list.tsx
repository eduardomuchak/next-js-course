import { Job } from '@/interfaces/IJobs';

import JobItem from './job-item';

import styles from './job-list.module.css';

type Props = {
  jobs: Job[];
};

function JobList({ jobs }: Props) {
  return (
    <ul className={styles.list}>
      {jobs.map((job: Job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </ul>
  );
}

export default JobList;
