import { useState, ChangeEvent, FormEvent } from 'react';
import toast from 'react-hot-toast';
import css from "./SearchBar.module.css";

interface SearchBarProps {
    onSubmit: (query: string) => void;
}
export default function SearchBar ({ onSubmit }: SearchBarProps) {
const [query, setQuery] = useState<string>('');
const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
};

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() === '') {
    toast.error('Please enter a search term');
    return;
    }
    onSubmit(query);
    setQuery('');
};

return (
    <header className={css.header} >
    <form onSubmit={handleSubmit} className={css.form}>
        <input
        type="text"
        value={query}
        onChange={handleChange}
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        className={css.input}
        />
        <button type="submit"className={css.button} >Search</button>
    </form>
    </header>
);
}