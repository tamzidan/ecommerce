import React from 'react';
import SearchForm from './SearchForm';
import ButtonLogin from './BtnLogin';
import ButtonLogout from './BtnLogout';
import HeaderMenu from './HeaderMenu';
import EcommLogo from './EcommLogo';

interface HeaderProps {
    isLogin: boolean;
}

const Header: React.FC<HeaderProps> = ({ isLogin }) => {
    return (
        <div className="w-full border-b">
            <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
                <EcommLogo />
                <SearchForm />
                {isLogin ? <ButtonLogout /> : <ButtonLogin />}
            </div>
            <HeaderMenu />
        </div>
    );
};

export default Header;
