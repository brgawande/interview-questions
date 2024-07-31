import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HtmlInterviewQuestions from "./components/html/HtmlInterviewQuestions";
import CssInterviewQuestions from "./components/css/CssInterviewQuestions";
import JavaScriptInterviewQuestions from "./components/javascript/JavaScriptInterviewQuestions";
import ReactInterviewQuestions from "./components/react/ReactInterviewQuestions";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/html" element={<HtmlInterviewQuestions />} />
        <Route path="/css" element={<CssInterviewQuestions />} />
        <Route path="/javascript" element={<JavaScriptInterviewQuestions />} />
        <Route path="/react" element={<ReactInterviewQuestions />} />
      </Routes>
    </Router>
  );
}

export default App;
