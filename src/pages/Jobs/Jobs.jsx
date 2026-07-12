function Jobs() {
  const jobs = [
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "Data Analyst",
    "Python Developer",
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Available Jobs</h1>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default Jobs;