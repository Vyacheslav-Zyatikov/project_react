import React from 'react';
import './App.scss';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {blueGrey} from "@mui/material/colors";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import NoteFoundPage from "./pages/NoteFoundPage";
import ChatsPage from "./pages/ChatsPage";
import MainLayout from "./layout/MainLayout";

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            primary: {
                main: string;
            };
        };
    }

    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            primary?: {
                main: string;
            };
        };
    }
}

function App() {
    const myTheme = createTheme({
        status: {
            primary: {
                main: blueGrey[800]
            },
        },
    });


    return (
        <ThemeProvider theme={myTheme}>
            <div className="App">
                <Routes>
                    <Route path={'/'} element={<MainLayout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path={'/profile'} element={<ProfilePage/>}/>
                        <Route path={'/chats'} element={<ChatsPage/>}/>
                        <Route path={'*'} element={<NoteFoundPage/>}/>
                    </Route>
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default App;