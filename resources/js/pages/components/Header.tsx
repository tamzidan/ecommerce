import BtnLogin from "../components/BtnLogin";
import SearchForm from "../components/SearchForm";
import HeaderMenu from "../components/HeaderMenu";
import EcommLogo from "../components/EcommLogo";

export default function Header(){
    return(
        <div><br />
            <EcommLogo />
            <SearchForm /><br />
            <BtnLogin /><br />
            <HeaderMenu />
            <br />
        </div>
    );
}