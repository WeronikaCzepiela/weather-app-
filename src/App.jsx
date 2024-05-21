import "./App.css";
import { MenuListItem } from "./components/index.js";

function App() {
  return (
    <div className="w-screen h-screen bg-gray-100">
      <div className="text-[80px] text-gray-500">
        Chemical Installation
        <MenuListItem
          name={"Pomp"}
          available={true}
          targetTemperature={15}
          moduleId={"1"}
        />
      </div>
    </div>
  );
}

export default App;
