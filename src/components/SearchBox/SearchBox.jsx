import css from './SearchBox.module.css';

export default function SearchBar({ value, onFilter }) {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={event => onFilter(event.target.value)}
      />
    </div>
  );
}
