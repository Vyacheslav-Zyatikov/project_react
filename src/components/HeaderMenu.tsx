import React from 'react';
import CustomLink from "./CustomLink";

const HeaderMenu = () => {
    return (
        <>
            <header className="App-header">
                <nav className={'headerMenu'}>
                    <CustomLink to="/" >Главная</CustomLink>
                    <CustomLink to="/profile" >Профиль</CustomLink>
                    <CustomLink to="/chats" >Чаты</CustomLink>
                </nav>
            </header>
        </>
    );
};

export default HeaderMenu;