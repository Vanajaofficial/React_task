import React from 'react';
import './App.css';
import MainContent from './MainContent';
import Sidebar from './Sidebar';
import {  FaToggleOn } from 'react-icons/fa';

const Responsive = () => {
    return (
        <div className="container">
            
            <div class="s-layout">
                <div class="s-layout__sidebar"> 
                    <a class="s-sidebar__trigger" >
                            <FaToggleOn /> 
                    </a>
                    <nav class="s-sidebar__nav">
                        <Sidebar />
                    </nav>
                </div>
                <main class="s-layout__content">
                    <MainContent />
                </main>
            </div>
        </div>
    );
};

export default Responsive;
