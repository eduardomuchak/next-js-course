import JobList from "@/components/jobs/job-list";
import { getFeaturedEvents } from "@/mock/mock";

function HomePage() {
  const featuredJobs = getFeaturedEvents();

  return (
    <div>
      <JobList jobs={featuredJobs} />
    </div>
  );
}

export default HomePage;
