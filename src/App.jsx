import AttributionContainer from "./AttributionContainer";
import QrContainer from "./QrContainer";

function App() {
  return (
    <div className="flex flex-col h-full bg-light-grey">
      <QrContainer />
      <AttributionContainer />
    </div>
  );
}

export default App;
