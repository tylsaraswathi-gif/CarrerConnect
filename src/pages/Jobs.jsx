function Jobs() {
  const jobs = [
    {
      id: 1,
      company: "Google",
      role: "Software Engineer",
    },
    {
      id: 2,
      company: "Microsoft",
      role: "Frontend Developer",
    },
  ];

  return (
    <div>
      <h1>Available Jobs</h1>

      {jobs.map((job) => (
        <div key={job.id}>
          <h3>{job.company}</h3>
          <p>{job.role}</p>
          <button>Apply</button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Jobs;