import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./pages/Home"
import Header from './components/Header'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <Header/>
        <Home />
    </React.StrictMode>
)