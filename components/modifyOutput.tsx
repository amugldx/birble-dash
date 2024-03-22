'use client';

import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { useState } from 'react';
import { Button } from './ui/button';

function ModifyOutput() {
	const [stepsValue, setStepsValue] = useState(0);
	const [guidenceValue, setGuidenceValue] = useState(0);

	const handleStepsChange = (newValue: number) => {
		setStepsValue(newValue);
	};

	const handleGuidenceChange = (newValue: number) => {
		setGuidenceValue(newValue);
	};
	return (
		<div className='bg-clr-bg-secondary p-6 rounded-2xl'>
			<h3 className='mb-6'>Modify Output</h3>
			<div className='bg-background rounded-2xl p-4'>
				<p className='text-clr-gray'>Output Dimensions</p>
				<div className='flex gap-4 mt-4'>
					<Input
						type='number'
						className='bg-clr-bg-secondary rounded-2xl'
						placeholder='Width'
					/>
					<Input
						type='number'
						className='bg-clr-bg-secondary rounded-2xl'
						placeholder='Height'
					/>
				</div>
			</div>
			<div className='bg-background mt-4 rounded-2xl p-4'>
				<p className='text-clr-gray'>Number of Outputs</p>
				<div className='flex gap-4 mt-4 w-full'>
					<Button className='flex-1 text-white hover:bg-accent hover:text-clr-darkest bg-clr-bg-secondary focus:bg-accent focus:text-clr-darkest'>
						1
					</Button>
					<Button className='flex-1 text-white hover:bg-accent hover:text-clr-darkest bg-clr-bg-secondary focus:bg-accent focus:text-clr-darkest'>
						2
					</Button>
					<Button className='flex-1 text-white hover:bg-accent hover:text-clr-darkest bg-clr-bg-secondary focus:bg-accent focus:text-clr-darkest'>
						3
					</Button>
					<Button className='flex-1 text-white hover:bg-accent hover:text-clr-darkest bg-clr-bg-secondary focus:bg-accent focus:text-clr-darkest'>
						4
					</Button>
				</div>
			</div>
			<div className='bg-background mt-4 rounded-2xl p-4'>
				<p className='text-clr-gray flex justify-between'>
					Steps
					<span className='h-8 w-10 bg-clr-bg-light text-white flex justify-center items-center rounded-xl '>
						{stepsValue}
					</span>
				</p>
				<div className='mt-4 flex gap-2'>
					<div className='w-12 h-8 flex justify-center items-center bg-clr-bg-secondary rounded-xl'>
						0
					</div>
					<Slider
						defaultValue={[stepsValue]}
						onValueChange={handleStepsChange}
						max={10}
						step={1}
					/>
					<div className='w-12 h-8 flex justify-center items-center bg-clr-bg-secondary rounded-xl'>
						10
					</div>
				</div>
			</div>
			<div className='bg-background mt-4 rounded-2xl p-4'>
				<p className='text-clr-gray flex justify-between'>
					Guidance Scale
					<span className='h-8 w-10 bg-clr-bg-light text-white flex justify-center items-center rounded-xl '>
						{guidenceValue}
					</span>
				</p>
				<div className='mt-4 flex gap-2'>
					<div className='w-12 h-8 flex justify-center items-center bg-clr-bg-secondary rounded-xl'>
						0
					</div>
					<Slider
						defaultValue={[guidenceValue]}
						onValueChange={handleGuidenceChange}
						max={50}
						step={1}
					/>
					<div className='w-12 h-8 flex justify-center items-center bg-clr-bg-secondary rounded-xl'>
						50
					</div>
				</div>
			</div>
		</div>
	);
}

export default ModifyOutput;
