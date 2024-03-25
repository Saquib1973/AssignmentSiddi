import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import News from "./pages/News";
import DashboardNavigation from "./components/DashboardNavigation";
import DashHome from "./pages/Dashboard/DashHome";

const App = () => {
    return (
        <div>


            <Routes>
                <Route path="/" element={<Navbar />}>

                    <Route path="/" element={<Home />} />
                    <Route path="/news/:id" element={<News />} />
                </Route>
                <Route path="/dashboard" element={<DashboardNavigation />}>

                    <Route path="" element={<DashHome />} />
                </Route>

            </Routes>
        </div>
    )
}

export default App;