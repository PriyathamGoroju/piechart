import { MyContext } from "./context/UserStore";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Links/Routes";
import { useState } from "react";

function App() {
    const [user, setUser] = useState({
        username: "",
        password: "",
    });
    const [userData, setUserData] = useState(''); 
    return (
        <div className="App">
            <MyContext.Provider value={{ user, setUser , userData, setUserData}}>
                <RouterProvider router={routes} />
            </MyContext.Provider>
        </div>
    );
}

export default App;
