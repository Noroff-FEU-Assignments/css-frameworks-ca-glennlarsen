import "./sass/style.scss";
import { Routes, Route} from "react-router-dom";
import Home from "./components/home/Home";
import News from "./components/news/News";
import Contact from "./components/contact/Contact";
import Navigation from "./components/Navigation";

function App() {
  return (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="news" element={<News />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  </Routes>
  );
}

export default App;
