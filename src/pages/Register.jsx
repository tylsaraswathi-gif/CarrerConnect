import { useState } from "react";
import "./Register.css";

function Register() {

  const [student, setStudent] = useState({

    name:"",
    email:"",
    branch:"",
    cgpa:""

  });

  const handleChange=(e)=>{

    setStudent({

      ...student,

      [e.target.name]:e.target.value

    });

  };

  const handleSubmit=(e)=>{

    e.preventDefault();

    alert("Student Registered Successfully");

    console.log(student);

  };

  return (

    <div className="register-container">

      <form className="register-form" onSubmit={handleSubmit}>

        <h2>Student Registration</h2>

        <input
        type="text"
        name="name"
        placeholder="Student Name"
        onChange={handleChange}
        />

        <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        />

        <input
        type="text"
        name="branch"
        placeholder="Branch"
        onChange={handleChange}
        />

        <input
        type="number"
        name="cgpa"
        placeholder="CGPA"
        onChange={handleChange}
        />

        <button type="submit">

          Register

        </button>

      </form>

    </div>

  );
}

export default Register;