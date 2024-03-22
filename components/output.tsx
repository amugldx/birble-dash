import Astronaut from './astronaut';
import { Button } from './ui/button';

function Output() {
	return (
		<div className='bg-clr-bg-secondary p-6 rounded-2xl h-full'>
			<div className='bg-background  p-6 rounded-2xl flex justify-between items-center'>
				<div>Result</div>
				<Button className='text-white bg-gradient-to-r from-clr-gradient-left to-clr-gradient-right'>
					Generate Avatar
				</Button>
			</div>
			<div className='h-full'>
				<div className='h-full flex justify-center items-center'>
					<Astronaut />
				</div>
			</div>
		</div>
	);
}

export default Output;
