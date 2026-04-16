const JOBS_KEY = "jobs_cache";
const EXPIRY_KEY = "jobs_cache_expiry";

// dakika 10 (unaweza badilisha)
const TTL = 1000 * 60 * 10;

export const saveJobsToCache = (jobs) => {
  localStorage.setItem(JOBS_KEY, JSON.stringify(jobs));
  localStorage.setItem(EXPIRY_KEY, Date.now() + TTL);
};

export const getJobsFromCache = () => {
  const jobs = localStorage.getItem(JOBS_KEY);
  const expiry = localStorage.getItem(EXPIRY_KEY);

  if (!jobs || !expiry) return null;

  if (Date.now() > Number(expiry)) {
    localStorage.removeItem(JOBS_KEY);
    localStorage.removeItem(EXPIRY_KEY);
    return null;
  }

  return JSON.parse(jobs);
};