import React, {Component} from "react";
import Home from "./Home";
import InventoryList from "./InventoryList";
import InventoryEdit from "./InventoryEdit";
import './App.css';
import {Router, Routes, Route} from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/inventories" element={<InventoryList/>}/>
                    <Route path="/inventory/:id" element={<InventoryEdit/>}/>
                </Routes>
            </Router>
        );
    }
}