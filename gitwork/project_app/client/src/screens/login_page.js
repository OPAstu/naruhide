import "../firebase/initialize";
import "../App.css";

import LoginScreen from '../components/login_form';

function Login_page() {
  return (
    <div className="App">
      <LoginScreen />
    </div>
  );
};

export default Login_page;
