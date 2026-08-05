import { HomeScreen } from "../presentation/screens/HomeScreen";
import { LoginScreen } from "../presentation/screens/LoginScreen";
import { useAuth } from "../presentation/context/AuthContext";

export default function Index() {
  const { user, loadingSession } = useAuth();

  if (loadingSession) {
    return null;
  }

  return user ? <HomeScreen /> : <LoginScreen />;
}
