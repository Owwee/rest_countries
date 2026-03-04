function SearchBar({ search, onSearch, region, onRegion }) {

    const regions = ['', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

    return (
        <div className="flex flex-wrap gap-4 p-6 max-w-7xl mx-auto">

            {/* Search input */}
            <div className="flex items-center bg-white dark:bg-gray-800 shadow
                      rounded-lg px-4 py-3 flex-1 min-w-64 gap-3">
                <span className="text-gray-400">&#128269;</span>
                <input
                    value={search}
                    onChange={e => onSearch(e.target.value)}
                    type="text"
                    placeholder="Search for a country..."
                    className="w-full outline-none bg-transparent
                     text-gray-800 dark:text-white placeholder-gray-400"
                />
            </div>

            {/* Region dropdown */}
            <select

                value={region}
                onChange={e => onRegion(e.target.value)}

                className="bg-white dark:bg-gray-800 shadow rounded-lg
                   px-4 py-3 text-gray-800 dark:text-white
                   outline-none cursor-pointer"
            >
                {regions.map(r => (
                    <option key={r} value={r}>
                        {r === '' ? 'Filter by Region' : r}
                    </option>
                ))}
            </select>

        </div>
    )
}

export default SearchBar
