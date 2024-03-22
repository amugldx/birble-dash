import EnterPrompt from './enterPrompt';
import ModifyOutput from './modifyOutput';
import SelectGenerator from './selectGenerator';

interface SidebarProps {
	setPrompt: (prompt: string) => void;
	setWidth: (width: number) => void;
	setHeight: (height: number) => void;
	setOutputNumber: (outputNumber: number) => void;
	guidence: number;
	setGuidence: (guidence: number) => void;
	steps: number;
	setSteps: (steps: number) => void;
}

function Sidebar({
	setPrompt,
	setWidth,
	setHeight,
	setOutputNumber,
	guidence,
	setGuidence,
	steps,
	setSteps,
}: SidebarProps) {
	return (
		<>
			<SelectGenerator />
			<div className='mt-4'>
				<EnterPrompt setPrompt={setPrompt} />
			</div>
			<div className='mt-4'>
				<ModifyOutput
					setWidth={setWidth}
					setHeight={setHeight}
					setOutputNumber={setOutputNumber}
					guidence={guidence}
					setGuidence={setGuidence}
					steps={steps}
					setSteps={setSteps}
				/>
			</div>
		</>
	);
}

export default Sidebar;
