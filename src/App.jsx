import AttributionContainer from "./AttributionContainer";
import QrContainer from "./QrContainer";

function App() {
  return (
    <div className="flex flex-col bg-light-grey h-full">
      <QrContainer />
      <AttributionContainer />
    </div>
  );
}

export default App;
