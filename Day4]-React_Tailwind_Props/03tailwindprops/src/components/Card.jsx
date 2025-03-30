// rfce - shortcut

import React from 'react'

// Handle property
function Card({username, btnText="visit me"}) {
	
  return (
	
	<div className="relative h-[400] w-[300] rounded-md">
		<img src="https://images.pexels.com/photos/18681383/pexels-photo-18681383/free-photo-of-programming.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Air" className="z-0 h-full w-full rounded-md object-cover"
	    />

		<div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
		<div className="absolute bottom-4 left-4 text-left">
			<h1 className="text-lg font-semibold text-white">{username}</h1>
			<p className="mt-2 text-sm text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, minus?
			</p>
			<button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white"> {btnText} ⤏
			</button>
		</div>
	</div>
  )
}

export default Card