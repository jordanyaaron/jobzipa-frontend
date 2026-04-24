import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "@/api/axios";
import JobCard from '@/components/cards/JobCard';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchSearch = async () => {
      setLoading(true);

      try {
        const res = await api.get(`jobs/get?search=${query}`,{ skipAuth: true });
        setJobs(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSearch();
  }, [query]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="mb-4 text-gray-500">
        Results for: <b>{query}</b>
      </h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col gap-4">
          {jobs.map((job) => (
            <JobCard key={job.public_id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;