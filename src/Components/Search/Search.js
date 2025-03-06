import classes from "./Search.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = (props) => {
    return(
        <div className={classes.Searchbox}>
            <FontAwesomeIcon icon={faSearch} className={classes.SearchIcon} />
            <input onChange={props.searchItem} 
            placeholder="Search by Name or Price"
            className={classes.inputbox}></input>
        </div>
    )
}

export default Search;