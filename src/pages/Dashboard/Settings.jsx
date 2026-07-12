import { useNavigate } from "react-router-dom";

function Settings() {

  const navigate = useNavigate();

  const handleLogout = () => {

    alert("Logged Out Successfully");

    navigate("/login");
  };

  return (
    <div>

      <h2>Settings</h2>

      <p>You can logout from your account here.</p>

      <button onClick={handleLogout}>
        Logout
      </button>

    </div>
  );
}

export default Settings;