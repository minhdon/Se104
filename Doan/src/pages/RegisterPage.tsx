import { PageTransition } from "../Animation/PageTransition";
import { RegisterLogin } from "../components/Register/Register";
function Register() {
  return (
    <PageTransition>
      {" "}
      <RegisterLogin />
    </PageTransition>
  );
}
export default Register;
