'use client';

import { callReplicate } from '@/server/actions/replicate';
import { useState } from 'react';
import Output from './output';
import Sidebar from './sidebar';

function Dashboard() {
	const [prompt, setPrompt] = useState('Eowyn, lord of the rings, riding horse');
	const [width, setWidth] = useState(504);
	const [height, setHeight] = useState(600);
	const [outputNumber, setOutputNumber] = useState(1);
	const [guidence, setGuidence] = useState(1.77);
	const [steps, setSteps] = useState(5);
	const [outputImage, setOutputImage] = useState('');

	function handleReplicate() {
		callReplicate({
			width,
			height,
			prompt,
			guidence,
			steps,
		}).then(output => {
			if (output?.output) {
				setOutputImage(output.output.toString());
			}
		});
	}

	return (
		<div className='mb-10 grid grid-cols-3 gap-6'>
			<div className='col-span-1'>
				<Sidebar
					prompt={prompt}
					width={width}
					height={height}
					outputNumber={outputNumber}
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
				<Output
					outputImage={outputImage}
					handleReplicate={handleReplicate}
				/>
			</div>
		</div>
	);
}

export default Dashboard;
