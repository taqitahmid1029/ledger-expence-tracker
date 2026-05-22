import React from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import NewEntry from "./components/NewEntry";
import Transaction from "./components/Transection";

const App = () => {
    return (
        <main className="max-w-216 m-auto px-8 py-6">
            <Header />
            <Dashboard />
            <div className="flex flex-row gap-4">
                <NewEntry />
                <Transaction />
            </div>
        </main>
    );
};

export default App;
