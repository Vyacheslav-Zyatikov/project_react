import React from 'react';
import CustomLink from "./CustomLink";
import {ThemeContext, themes} from '../Contexts/ThemeContext'
import ThemeToggle from "./ThemeToogle";

const HeaderMenu = () => {
    return (
        <>
            <header className="App-header">
                <nav className={'headerMenu'}>
                    <CustomLink to="/">Главная</CustomLink>
                    <CustomLink to="/profile">Профиль</CustomLink>
                    <CustomLink to="/chats">Чаты</CustomLink>
                </nav>
                <div className="App-header-p">
                    <p>Сменить тему</p>
                </div>
                <ThemeContext.Consumer>
                    {({theme, setTheme}: any) => (
                        <ThemeToggle
                            onChange={() => {
                                if (theme === themes.light) setTheme(themes.dark)
                                if (theme === themes.dark) setTheme(themes.light)
                            }}
                            value={theme === themes.dark}
                        />
                    )}
                </ThemeContext.Consumer>
            </header>

        </>
    );
};

export default HeaderMenu;