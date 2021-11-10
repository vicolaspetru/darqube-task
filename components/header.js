import {Navigation} from './navigation'
import SearchForm from "./search-form";

function Header() {
    return (
		<header id="header">
			<div className="inner-wrap">
				<Navigation/>
				<SearchForm placeholder="Search" />
			</div>
		</header>
    );
}

export default Header;
