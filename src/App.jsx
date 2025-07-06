import { Routes, Route } from "react-router-dom";
import IphonePro from "../public/IphonePro.jsx";
import Four404 from "./components/Four404.jsx";
import Home from "./components/Home.jsx";
import Shared from "./components/Shared.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Shared />}>
          <Route index element={<Home />} />
          <Route
            path="/iphone"
            element={
              <>
                <br />
                <br />
                <IphonePro />
              </>
            }
          />
          <Route path="*" element={<Four404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
