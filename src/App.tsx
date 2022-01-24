import Router from "./pages/indes";
import GlobalStyle from "./static/styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Router />
      </div>
    </>
  );
}

export default App;
