import { useDispatch } from 'react-redux';
import style from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';
const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className={style.searchBox}>
      <label className={style.searchLabel}>Find contacs by name</label>
      <input
        className={style.search}
        onChange={event => dispatch(changeFilter(event.target.value))}
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBox;
