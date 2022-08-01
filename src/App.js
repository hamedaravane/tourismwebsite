import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' exact component={Home}/>
                </Routes>
                <Home/>
            </Router>
            <Footer/>
        </>
    );
}

export default App;
