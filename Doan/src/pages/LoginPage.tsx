import { PageTransition } from "../Animation/PageTransition";
import { Login } from "../components/Login/Login";

function LoginPage() {
  return (
    <PageTransition>
      <Login />
    </PageTransition>
  );
}
export default LoginPage;
