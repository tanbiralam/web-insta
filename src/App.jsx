import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ToolDownloader from "./components/ToolDownloader";
import About from "./components/About";

function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <ToolDownloader />
      <About />
      <Footer />
    </div>
  );
}

export default App;