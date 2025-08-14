import classes from "./Search.module.css";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = (props) => {
    const [keywords, setKeywords] = useState('');

    useEffect(()=>{
        const timer = setTimeout(()=>{
            props.searchItem(keywords);
        }, 500);

        return() =>{
                clearTimeout(timer);
            }
    }, [keywords]);

    const inputChangeHandler = (event) => {
        let newkeyword = event.target.value.toLowerCase();
        setKeywords(newkeyword);
        
    }

    return(
        <div className={classes.Searchbox}>
            <FontAwesomeIcon icon={faSearch} className={classes.SearchIcon} />
            <input onChange={inputChangeHandler} 
            placeholder="Search by Name or Price"
            className={classes.inputbox}></input>
        </div>
    )
}

export default Search;