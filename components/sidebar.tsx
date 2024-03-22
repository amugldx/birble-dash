import EnterPrompt from './enterPrompt';
import ModifyOutput from './modifyOutput';
import SelectGenerator from './selectGenerator';

function Sidebar() {
	return (
		<>
			<SelectGenerator />
			<div className='mt-4'>
				<EnterPrompt />
			</div>
			<div className='mt-4'>
				<ModifyOutput />
			</div>
		</>
	);
}

export default Sidebar;
