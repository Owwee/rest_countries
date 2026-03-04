

function Navbar({ darkMode, onToggleDark }) {

    return (
        <nav className="bg-white dark:bg-gray-800 shadow-md px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                    World Explorer
                </h1>
                <button
                    onClick={onToggleDark}
                    className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700
                     text-gray-700 dark:text-white hover:bg-gray-200
                     dark:hover:bg-gray-600 transition"
                >
                    {darkMode ? '☀️ Light' : '🌙 Dark'}
                </button>

            </div>
        </nav>
    )
}

export default Navbar