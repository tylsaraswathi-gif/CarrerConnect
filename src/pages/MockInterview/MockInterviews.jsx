import { useEffect, useState } from "react";
import "./MockInterviews.css";

function MockInterview() {
  const [interviews, setInterviews] = useState([]);

  const [formData, setFormData] = useState({
    studentName: "",
    company: "",
    interviewType: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    const savedInterviews =
      JSON.parse(localStorage.getItem("interviews")) || [];

    setInterviews(savedInterviews);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newInterview = {
      id: Date.now(),
      ...formData,
      status: "Upcoming",
    };

    const updatedInterviews = [...interviews, newInterview];

    setInterviews(updatedInterviews);

    localStorage.setItem(
      "interviews",
      JSON.stringify(updatedInterviews)
    );

    alert("Mock Interview Scheduled Successfully!");

    setFormData({
      studentName: "",
      company: "",
      interviewType: "",
      date: "",
      time: "",
    });
  };

  const deleteInterview = (id) => {
    const updatedInterviews = interviews.filter(
      (item) => item.id !== id
    );

    setInterviews(updatedInterviews);

    localStorage.setItem(
      "interviews",
      JSON.stringify(updatedInterviews)
    );
  };

  return (
    <div className="mock-container">

      <h1>Mock Interview Scheduler</h1>

      <form className="mock-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="studentName"
          placeholder="Student Name"
          value={formData.studentName}
          onChange={handleChange}
          required
        />

        <select
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
        >
          <option value="">Select Company</option>
          <option>TCS</option>
          <option>Infosys</option>
          <option>Wipro</option>
          <option>Accenture</option>
          <option>Capgemini</option>
        </select>

        <select
          name="interviewType"
          value={formData.interviewType}
          onChange={handleChange}
          required
        >
          <option value="">Interview Type</option>
          <option>Technical</option>
          <option>HR</option>
          <option>Managerial</option>
        </select>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Schedule Interview
        </button>

      </form>

      <h2>Scheduled Interviews</h2>

      {interviews.length === 0 ? (
        <p>No interviews scheduled.</p>
      ) : (
        <table>

          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Type</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {interviews.map((item) => (
              <tr key={item.id}>
                <td>{item.studentName}</td>
                <td>{item.company}</td>
                <td>{item.interviewType}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>{item.status}</td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteInterview(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      )}

    </div>
  );
}

export default MockInterview;