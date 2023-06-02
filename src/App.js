// import logo from "./logo.svg";
import "./App.css";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";

function App() {
  const itemTwoName = "SurfExcel";
  return (
    <div>
      <Item name="RIN"></Item>
      <ItemDate day="24" month="May" year="1999"></ItemDate>
      <Item name={itemTwoName}></Item>
      <ItemDate day="10" month="Jan" year="2002"></ItemDate>
      <Item name="Ghadi"></Item>
      <ItemDate day="31" month="March" year="1995"></ItemDate>
      <div className="App">Hello Ji</div>
    </div>
  );
}

export default App;
