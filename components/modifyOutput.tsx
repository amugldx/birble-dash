'use client';

import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Button } from './ui/button';

function ModifyOutput({
	width,
	height,
	outputNumber,
	setWidth,
	setHeight,
	setOutputNumber,
	guidence,
	setGuidence,
	steps,
	setSteps,
}: {
	width: number;
	height: number;
	outputNumber: number;
	setWidth: (width: number) => void;
	setHeight: (height: number) => void;
	setOutputNumber: (outputNumber: number) => void;
	guidence: number;
	setGuidence: (guidence: number) => void;
	steps: number;
	setSteps: (steps: number) => void;
}) {
	const handleStepsChange = (newValue: number[]) => {
		setSteps(newValue[0]);
	};

	const handleGuidenceChange = (newValue: number[]) => {
		setGuidence(newValue[0]);
	};
	return (
		<div className='bg-clr-bg-secondary p-6 rounded-2xl'>
			<h3 className='mb-6'>Modify Output</h3>
			<div className='bg-background rounded-2xl p-4'>
				<p className='text-clr-gray'>Output Dimensions</p>
				<div className='flex gap-4 mt-4'>
					<Input
						value={width}
						type='number'
						className='bg-clr-bg-secondary rounded-2xl'
						placeholder='Width'
						onChange={e => setWidth(parseInt(e.target.value))}
					/>
					<Input
						value={height}
						type='number'
						className='bg-clr-bg-secondary rounded-2xl'
						placeholder='Height'
						onChange={e => setHeight(parseInt(e.target.value))}
					/>
				</div>
			</div>
			<div className='bg-background mt-4 rounded-2xl p-4'>
				<p className='text-clr-gray'>Number of Outputs</p>
				<div className='flex gap-4 mt-4 w-full'>
					<Button
						onClick={() => setOutputNumber(1)}
						className='flex-1 text-white hover:bg-accent hover:text-clr-darkest bg-clr-bg-secondary focus:bg-accent focus:text-clr-darkest'>
						1
					</Button>
					<Button
						onClick={() => setOutputNumber(2)}
						className='flex-1 text-white hover:bg-accent hover:text-clr-darkest bg-clr-bg-secondary focus:bg-accent focus:text-clr-darkest'>
						2
					</Button>
					<Button
						onClick={() => setOutputNumber(3)}
						autoFocus
						className='flex-1 text-white hover:bg-accent hover:text-clr-darkest bg-clr-bg-secondary focus:bg-accent focus:text-clr-darkest'>
						3
					</Button>
					<Button
						onClick={() => setOutputNumber(4)}
						className='flex-1 text-white hover:bg-accent hover:text-clr-darkest bg-clr-bg-secondary focus:bg-accent focus:text-clr-darkest'>
						4
					</Button>
				</div>
			</div>
			<div className='bg-background mt-4 rounded-2xl p-4'>
				<p className='text-clr-gray flex justify-between'>
					Steps
					<span className='h-8 w-16 bg-clr-bg-light text-white flex justify-center items-center rounded-xl '>
						{steps}
					</span>
				</p>
				<div className='mt-4 flex gap-2'>
					<div className='w-12 h-8 flex justify-center items-center bg-clr-bg-secondary rounded-xl'>
						0
					</div>
					<Slider
						defaultValue={[steps]}
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
					<span className='h-8 w-16 bg-clr-bg-light text-white flex justify-center items-center rounded-xl '>
						{guidence}
					</span>
				</p>
				<div className='mt-4 flex gap-2'>
					<div className='w-12 h-8 flex justify-center items-center bg-clr-bg-secondary rounded-xl'>
						0
					</div>
					<Slider
						defaultValue={[guidence]}
						onValueChange={handleGuidenceChange}
						max={3}
						step={0.01}
					/>
					<div className='w-12 h-8 flex justify-center items-center bg-clr-bg-secondary rounded-xl'>
						3
					</div>
				</div>
			</div>
		</div>
	);
}

export default ModifyOutput;
