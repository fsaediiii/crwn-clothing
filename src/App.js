import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home/Home.component";
import Navigation from "./routes/Navigation/Navigation.component";
import Signin from "./routes/SignIn/SignIn.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/signin" element={<Signin />} />
      </Route>
    </Routes>
  );
};

export default App;
