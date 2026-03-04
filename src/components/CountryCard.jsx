function CountryCard({ country, onClick }) {
  return (
    <div
      onClick={() => onClick(country)}
      className="bg-white dark:bg-gray-800 rounded-lg shadow
                 cursor-pointer hover:shadow-xl hover:-translate-y-1
                 transition-all duration-200 overflow-hidden"
    >
      {/* Flag image */}
      <img
        src={country.flags.png}
        alt={country.flags.alt || country.name.common}
        className="w-full h-44 object-cover"
      />
 
      {/* Info */}
      <div className="p-5">
        <h2 className="text-lg font-bold text-gray-800 dark:text-white
                       mb-3 truncate">
          {country.name.common}
        </h2>
 
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
          <span className="font-semibold">Population: </span>
          {country.population.toLocaleString()}
        </p>
 
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
          <span className="font-semibold">Region: </span>
          {country.region}
        </p>
 
        <p className="text-sm text-gray-600 dark:text-gray-300">
          <span className="font-semibold">Capital: </span>
          {country.capital?.[0] ?? 'N/A'}
        </p>
      </div>
    </div>
  )
}
 
export default CountryCard

