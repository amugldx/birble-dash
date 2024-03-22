import Output from './output';
import Sidebar from './sidebar';

function Dashboard() {
	return (
		<div className='mb-10 grid grid-cols-3 gap-6'>
			<div className='col-span-1'>
				<Sidebar />
			</div>
			<div className='col-span-2'>
				<Output />
			</div>
		</div>
	);
}

export default Dashboard;
