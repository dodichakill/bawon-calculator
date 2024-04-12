import Footer from "./components/Footer";
import CalculatorApp from "./components/CalculatorApp";

function App() {
  return (
    <>
      <div className="box-border bg-gradient-to-tr from-green-400 to-emerald-600 h-screen w-full  p-5 flex flex-col items-center justify-center relative">
        <CalculatorApp />
      </div>
      <Footer />
    </>
  );
}

export default App;
