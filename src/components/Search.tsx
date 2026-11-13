import searchIcon from '../assets/icons/search.svg';

// TO-DO - search functionality
function Search() {
  return (
    <div className="Search">
      <img src={searchIcon} alt="" />
      <input type="search" placeholder="Search..." aria-label="Search" />
    </div>
  );
}

export default Search;
