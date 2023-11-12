import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./component/Main";
import NotFound from "./component/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
