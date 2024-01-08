
import React from 'react';

function FilterBar({ open, show, generatedNames, handleAccordionClick, handleToggleClick, neutralChecked, singlyIonizedChecked, doublyIonizedChecked, handleElementButtonClick, temp, setTemp }) {

  return (

      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button type="button" className="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" 
            data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
            <span>Filters:</span>
            <div style={{ display: 'flex', float: "right", justifyContent: 'space-between', alignItems: 'center', marginRight: "30px", marginLeft: "30px" }}>
              <div className="flex items-center me-4">
                <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={open} // Use checked instead of value to set the checkbox state
                  onChange={() => handleToggleClick()} // Use onChange for checkbox
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Element</span>
                </label>
              </div>
              <div className="flex items-center me-4">
                <input 
                  id="teal-checkbox" type="checkbox" 
                  checked={neutralChecked}
                  onChange={(e) => setNeutralChecked(e.target.checked)}
                  className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="teal-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Neutral</label>
              </div>
              <div className="flex items-center me-4">
                <input 
                  id="yellow-checkbox" type="checkbox" 
                  checked={singlyIonizedChecked}
                  onChange={(e) => setSinglyIonizedChecked(e.target.checked)}
                  className="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="yellow-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Singly Ionized</label>
              </div>
              <div className="flex items-center me-4">
                <input 
                  id="orange-checkbox" type="checkbox" 
                  checked={doublyIonizedChecked}
                  onChange={(e) => setDoublyIonizedChecked(e.target.checked)}
                className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="orange-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Doubly Ionized</label>
              </div>
              {temp ?
                <div>
                  <div className="flex items-center me-4">
                    <label htmlFor="minmax-range" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Temperature</label>
                  </div>
                  <div className="relative mb-6 me-4" style={{width:"400px"}}>
                    <input id="steps-range" type="range" 
                      min="2000" max="8400" step="100" 
                      value={temp} 
                      onChange={(e) => setTemp(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                    <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">2000K</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/4 -translate-x-1/4 rtl:translate-x-1/4 -bottom-6">3600K</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">5200K</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-3/4 -translate-x-3/4 rtl:translate-x-3/4 -bottom-6">6800K</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">8400K</span>
                  </div>
                </div>:null
              }
            </div>
            <svg class="w-6 h-6 text-gray-800 dark:text-white" onClick={() => handleAccordionClick()} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill={show ? 'none' : 'currentColor'} viewBox="0 0 20 20">
              {(show)?<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9h2v5m-2 0h4M9.408 5.5h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>:
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>}
            </svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-1" className={(!open)?"show":"hidden"} aria-labelledby="accordion-collapse-heading-1">
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <p className="font-medium rtl:text-right text-gray-500">Selected species:</p>
          {
            generatedNames.map((element, index) => (
            <span
              key={index} // Ensure to add a unique key when mapping through an array in React
              id="badge-dismiss-default"
              className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-300"
            >
              {element}
              <button
                type="button"
                className="inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300"
                data-dismiss-target="#badge-dismiss-default"
                aria-label="Remove"
                onClick={() => handleElementButtonClick(element)}
              >
                <svg
                  className="w-2 h-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Remove badge</span>
              </button>
            </span>))
          }
          </div>
        
          <div id="accordion-collapse-body-1" className={(show&!open)?"show":"hidden"} aria-labelledby="accordion-collapse-heading-1">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p>M<sub>ej</sub>: ejected mass in the line-forming region.</p>
            <p>M<sub>ej, s</sub>: mass of a species in the line-forming region.</p>
            <p>L<sub>bol</sub>: total bolometric luminosity.</p>
            <p>M<sub>bol, s</sub>: bolometric luminosity from the species' line interaction.</p>
            <p>Temperature: temperature of the photosphere and its line-forming region</p>
            <p style={{color:"red"}}>Caveat 1: all results are based on the solar r-process abundance (Prantzos et al., 2020).</p>
            <p style={{color:"red"}}>Caveat 2: the bolometric luminosity is computed from 3000A to 15000A.</p>
            <p style={{color:"red"}}>Caveat 3: Other setup can be found in the <u><a href="./info" style={{color:"blue"}}>Simulation Setup</a></u> page.</p>
            </div>
          </div>
          <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
      </div>
  );
}

export default FilterBar;

