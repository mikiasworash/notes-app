import "./App.css";
import Header from "./components/Header";
import NotesPage from "./pages/NotesPage";
import NotePage from "./pages/NotePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            <Route exact path="/" element={<NotesPage />} />
            <Route path="/note/:id" element={<NotePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
