import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() 
  {
    let [isDark, setIsDark] = useState(false)
  
    function handleDarkMode() {
      setIsDark(!isDark)
    }
  
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDark ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button>Dark Mode</button>
        <button onClick={handleDarkMode}>{isDark?"Dark Mode":"Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
  }

export default App;
