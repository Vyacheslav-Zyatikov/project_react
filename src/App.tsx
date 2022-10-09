import React from 'react';
import './App.scss';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import NoteFoundPage from "./pages/NoteFoundPage";
import ChatsPage from "./pages/ChatsPage";
import ChatPage from "./pages/ChatPage";
import MainLayout from "./layout/MainLayout";

function App() {

    return (
            <div className="App">
                <Routes>
                    <Route path={'/'} element={<MainLayout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path={'/profile'} element={<ProfilePage/>}/>
                        <Route path={'/chats'} element={<ChatsPage/>}/>
                        <Route path={'/chats/:chatId'} element={<ChatPage/>}/>
                        <Route path={'*'} element={<NoteFoundPage/>}/>
                    </Route>
                </Routes>
            </div>
    );
}

export default App;