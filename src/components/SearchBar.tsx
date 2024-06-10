import axios from "axios";
import { useState } from "react";


interface SearchBarProps {
    onSearch: (recipes: any[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = async () => {
        if (!query) return;

        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php`, {
            params: {
                s: query,
            }
        });

        onSearch(response.data.meals || []);
    };

    return (
        <section className="search-bar">
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for recipes..." />
            <button onClick={handleSearch}>Search</button>
        </section>
    );
};

export default SearchBar;