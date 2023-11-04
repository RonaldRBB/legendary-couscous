import React from 'react';
import UserData from '../components/users';
import Navbar from '../components/navbar';
import Aside from '../components/aside';
import TitleBar from '../components/title_bar';
import Hero from '../components/hero';
import Main from '../components/main';
import Footer from '../components/footer';
import Modal from '../components/modal';
function App() {
    return (
        <>
            <div id="app">
                <Navbar />
                <Aside />
                <TitleBar />
                <Hero />
                <Main />
                <UserData />
                <Footer />
            </div>
            <Modal />
        </>
    );
}
export default App;
