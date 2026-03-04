import { useState, useEffect } from 'react'

import CountryCard from "./components/CountryCard"
import CountryDetail from "./components/CountryDetail"
import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"


function App() {
  const FIELDS = 'name,flags,population,capital,region,subregion,languages,currencies,cca3'
  const API = 'https://restcountries.com/v3.1/all?fields=' + FIELDS
  const [countries, setCountries] = useState([])
  const [darkMode, setDarkMode] = useState(false)
  const [selected, setSelected] = useState(null)
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)


  //Fetch
  useEffect(() => {
    async function fetchCountries() {
      try {
        const res = await fetch(API);

        if (!res.ok) throw new Error('failed to fetch');

        const data = await res.json()
        //sort alphabetically
        const sortedData = data.sort((a, b) => a.name.common.localeCompare(b.name.common))
        setCountries(sortedData)
        console.log(sortedData)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCountries()
  }, [])

  // filter-logic
  const visible = countries.filter(c => {
    const matchSearch = c.name.common.toLowerCase().includes(search.toLocaleLowerCase())
    const matchRegion = region === '' || c.region === region

    return matchSearch && matchRegion
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')

    }

  }, [darkMode])

  return (
    <div>
      <Navbar darkMode={darkMode} onToggleDark={() => setDarkMode(d => !d)} />

      {selected ? (
        <CountryDetail
          country={selected}
          onBack={() => setSelected(null)}
        />
      ) : (
        <>
          <SearchBar search={search} onSearch={setSearch} region={region} onRegion={setRegion} />
          <main className="max-w-7xl mx-auto px-6 pb-10">

            {/* Loading state */}
            {loading && <p className="text-center text-gray-500 py-20">
              Loading countries...
            </p>}

            {/* Error state */}
            {error && (
              <p className="text-center text-red-500 py-20">{error}</p>
            )}

            {/* Empty state */}
            {!loading && !error && visible.length === 0 && (
              <p className="text-center text-gray-400 py-20">
                No countries found. Try a different search.
              </p>
            )}

            {/* Country grid */}
            {!loading && !error && (
              <div className="grid grid-cols-1 sm:grid-cols-2
                             md:grid-cols-3 lg:grid-cols-4 gap-8">
                {visible.map(country => (
                  <CountryCard
                    key={country.cca3}
                    country={country}
                    onClick={setSelected}
                  />
                ))}
              </div>
            )}
          </main>

        </>
      )
      }


    </div>
  )
}

export default App