import { Job } from "@/interfaces/IJobs";
import Image from "next/image";

type Props = {
  job: Job;
};

function JobItem({ job }: Props) {
  const ptBrDate = new Date(job.date).toLocaleString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <li>
      <Image
        src={job.image}
        alt={job.title}
        width={250}
        height={250}
        className={"h-60 w-60"}
      />

      <div>
        <div>
          <h2 className={"text-3xl"}>{job.title}</h2>
          <div>
            <time>{ptBrDate}</time>
          </div>
          <div>
            <address>{job.location}</address>
          </div>
        </div>
        <div>
          <button>See job details</button>
        </div>
      </div>
    </li>
  );
}

export default JobItem;
