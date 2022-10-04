import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderMenu from "../components/HeaderMenu";
import FooterMenu from "../components/FooterMenu";

const MainLayout = () => {
    return (
        <>
            <HeaderMenu/>
            <main className={'App-mainContent'}>
                <Outlet/>
            </main>
            <FooterMenu/>
        </>
    );
};

export default MainLayout;