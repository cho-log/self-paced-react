import "./App.css";
import Header from "./components/Header/Header.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";

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
