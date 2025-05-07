import BtnLogin from "../components/BtnLogin";
import SearchForm from "../components/SearchForm";
import HeaderMenu from "../components/HeaderMenu";


export default function Header(){
    return(
        <div>
            <SearchForm /><br />
            <BtnLogin /><br />
            <HeaderMenu />
        </div>
    );
}