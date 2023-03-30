import AppRouter from "components/Router";
import { useState } from "react";
import { authService } from "fbase";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()}Doitter</footer>
    </>
  );
}

export default App;
