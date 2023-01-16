import { Job } from "@/interfaces/IJobs";

import JobItem from "./job-item";

type Props = {
  jobs: Job[];
};

function JobList({ jobs }: Props) {
  return (
    <ul>
      {jobs.map((job: Job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </ul>
  );
}

export default JobList;
