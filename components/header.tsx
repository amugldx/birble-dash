import { Button } from '@/components/ui/button';
import { ChevronRight, Undo2 } from 'lucide-react';

function Header() {
	return (
		<>
			<header>
				<h1 className='font-bold text-4xl'>Image Generator</h1>
				<h2 className='mt-2 text-clr-gray'>Animate still images with ease</h2>
			</header>
			<nav className='mt-10 flex flex-row gap-8 items-center'>
				<Button
					className='hover:bg-transparent hover:text-white'
					variant='ghost'
					size='ghost'>
					<Undo2 className='mr-4 h-6 w-6' /> Go Back
				</Button>
				<div className='bg-clr-darkest py-2 px-4 h-10 rounded-full border border-clr-gray flex flex-row justify-center gap-2 items-center whitespace-nowrap'>
					<span>Creativity Center</span>
					<ChevronRight className='h-4 w-4' />
					<span>Avatar</span>
				</div>
				<div className='h-[1px] bg-clr-gray w-full'></div>
			</nav>
		</>
	);
}

export default Header;
