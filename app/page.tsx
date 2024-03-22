import Dashboard from '@/components/dashboard';
import Header from '@/components/header';

export default function Home() {
	return (
		<>
			<div className='min-h-svh px-16'>
				<div className='mt-16'>
					<Header />
				</div>
				<div className='mt-16'>
					<Dashboard />
				</div>
			</div>
		</>
	);
}
