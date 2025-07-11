import React from 'react'

function Footer() {
  return (
    <>
    <footer className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
	<div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-600 dark:divide-gray-400">
		<ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
			<li>Shop</li>
			<li>About</li>
			<li>Blog</li>
			<li>Pricing</li>
			<li>Contact</li>
		</ul>
		<div className="flex flex-col justify-center pt-6 lg:pt-0">
			<div className="flex justify-center space-x-4">
				{/** Sosial linklərdə rəng dəyişmələri */}
				<a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-violet-600 text-gray-50 hover:bg-violet-500 dark:bg-violet-500 dark:hover:bg-violet-400">
					{/* SVG */}
				</a>
				<a rel="noopener noreferrer" href="#" title="Pinterest" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-violet-600 text-gray-50 hover:bg-violet-500 dark:bg-violet-500 dark:hover:bg-violet-400">
					{/* SVG */}
				</a>
				<a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-violet-600 text-gray-50 hover:bg-violet-500 dark:bg-violet-500 dark:hover:bg-violet-400">
					{/* SVG */}
				</a>
				<a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-violet-600 text-gray-50 hover:bg-violet-500 dark:bg-violet-500 dark:hover:bg-violet-400">
					{/* SVG */}
				</a>
				<a rel="noopener noreferrer" href="#" title="Gmail" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-violet-600 text-gray-50 hover:bg-violet-500 dark:bg-violet-500 dark:hover:bg-violet-400">
					{/* SVG */}
				</a>
			</div>
		</div>
	</div>
</footer>

    </>
  )
}

export default Footer