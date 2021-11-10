import {Navigation} from './navigation'
import SearchForm from "./search-form";

function Header() {
    return (
		<header id="header">
			<div className="inner-wrap">
				<Navigation/>
				<SearchForm />
			</div>
		</header>
    );
}

export default Header;
