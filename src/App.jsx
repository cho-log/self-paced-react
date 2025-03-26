import "./App.css";
import Header from "./Header.jsx";
import MainContent from "./MainContent.jsx";
import Sidebar from "./Sidebar.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <MainContent />
      </main>
      <aside>
        <Sidebar />
      </aside>
    </>
  );
}

export default App;
