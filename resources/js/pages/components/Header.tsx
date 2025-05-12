import BtnLogin from "../components/BtnLogin";
import SearchForm from "../components/SearchForm";
import HeaderMenu from "../components/HeaderMenu";
import EcommLogo from "../components/EcommLogo";
import { LogOut } from 'lucide-react';
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';
import { Link, router } from '@inertiajs/react';


export default function Header({ isLogin }) {
    const cleanup = useMobileNavigation();

    const handleLogout = () => {
        cleanup();
        router.flushAll();
    };

    function BtnLogin({ isLogin }) {
        if (isLogin) {
            return (
                <Link className="block w-full" method="post" href={route('logout')} as="button" onClick={handleLogout}>
                    <LogOut className="mr-2" />
                    Log out
                </Link>
            )
        } else {
            return (
                <Link
                    href={route('login')}
                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                >
                    Log in
                </Link>
            )
        }
    }

    return (
        <div><br />
            <EcommLogo />
            <SearchForm /><br />
            <BtnLogin isLogin={isLogin} />
            <HeaderMenu />
            <br />
        </div>
    );
}