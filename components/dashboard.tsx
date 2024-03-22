'use client';

import { useState } from 'react';
import Output from './output';
import Sidebar from './sidebar';

function Dashboard() {
	const [prompt, setPrompt] = useState('');
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);
	const [outputNumber, setOutputNumber] = useState(0);
	const [guidence, setGuidence] = useState(0);
	const [steps, setSteps] = useState(0);

	console.log(prompt, width, height, outputNumber, guidence, steps);

	return (
		<div className='mb-10 grid grid-cols-3 gap-6'>
			<div className='col-span-1'>
				<Sidebar
					setPrompt={setPrompt}
					setWidth={setWidth}
					setHeight={setHeight}
					setOutputNumber={setOutputNumber}
					guidence={guidence}
					setGuidence={setGuidence}
					steps={steps}
					setSteps={setSteps}
				/>
			</div>
			<div className='col-span-2'>
				<Output />
			</div>
		</div>
	);
}

export default Dashboard;
