import Image from 'next/image';
import Astronaut from './astronaut';
import { Button } from './ui/button';

function Output({
	handleReplicate,
	outputImage,
}: {
	handleReplicate: () => void;
	outputImage: string;
}) {
	return (
		<div className='bg-clr-bg-secondary p-6 rounded-2xl h-full'>
			<div className='bg-background  p-6 rounded-2xl flex justify-between items-center'>
				<div>Result</div>
				<Button
					onClick={handleReplicate}
					className='text-white bg-gradient-to-r from-clr-gradient-left to-clr-gradient-right'>
					Generate Avatar
				</Button>
			</div>
			{outputImage ? (
				<div className='h-full mt-20'>
					<div className='max-w-60 max-h-60 flex justify-center items-center'>
						<Image
							src={outputImage}
							height={200}
							width={200}
							alt='output'
							className='w-full h-full object-cover rounded-2xl'
						/>
					</div>
				</div>
			) : (
				<div className='h-full'>
					<div className='h-full flex justify-center items-center'>
						<Astronaut />
					</div>
				</div>
			)}
		</div>
	);
}

export default Output;
