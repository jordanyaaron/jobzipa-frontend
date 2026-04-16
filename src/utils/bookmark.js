const KEY = "saved_jobs";

// get all saved jobs
export const getSavedJobs = () => {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
};

// check if job is saved
export const isJobSaved = (id) => {
  const jobs = getSavedJobs();
  return jobs.some(job => job.public_id === id);
};

// toggle save / unsave
export const toggleSaveJob = (job) => {
  let jobs = getSavedJobs();

  const exists = jobs.some(j => j.public_id === job.public_id);

  if (exists) {
    jobs = jobs.filter(j => j.public_id !== job.public_id);
  } else {
    jobs.push(job);
  }

  localStorage.setItem(KEY, JSON.stringify(jobs));

  return !exists; // return new state
};