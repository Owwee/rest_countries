function CountryDetail({ country, onBack }) {
 
  const languages = country.languages
    ? Object.values(country.languages).join(', ')
    : 'N/A'
 
  const currencies = country.currencies
    ? Object.values(country.currencies).map(c => c.name).join(', ')
    : 'N/A'
 
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
 
      {/* Back button */}
      <button
        onClick={onBack}
        className="mb-10 px-6 py-2 bg-white dark:bg-gray-800 shadow
                   rounded-lg text-gray-700 dark:text-white
                   hover:shadow-md transition flex items-center gap-2"
      >
        &larr; Back
      </button>
 
      <div className="flex flex-wrap gap-16 items-center">
 
        {/* Flag */}
        <img
          src={country.flags.png}
          alt={country.name.common}
          className="w-full max-w-md shadow-lg rounded"
        />
 
        {/* Details */}
        <div className="flex-1 min-w-64">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            {country.name.common}
          </h2>
 
          <div className="grid grid-cols-2 gap-x-10 gap-y-2
                          text-sm text-gray-600 dark:text-gray-300">
            <p><span className="font-semibold">Official Name: </span>
              {country.name.official}</p>
            <p><span className="font-semibold">Population: </span>
              {country.population.toLocaleString()}</p>
            <p><span className="font-semibold">Region: </span>
              {country.region}</p>
            <p><span className="font-semibold">Sub Region: </span>
              {country.subregion ?? 'N/A'}</p>
            <p><span className="font-semibold">Capital: </span>
              {country.capital?.[0] ?? 'N/A'}</p>
            <p><span className="font-semibold">Languages: </span>
              {languages}</p>
            <p><span className="font-semibold">Currencies: </span>
              {currencies}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default CountryDetail
