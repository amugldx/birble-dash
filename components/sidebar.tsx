import EnterPrompt from './enterPrompt';
import ModifyOutput from './modifyOutput';
import SelectGenerator from './selectGenerator';

interface SidebarProps {
	prompt: string;
	setPrompt: (prompt: string) => void;
	width: number;
	setWidth: (width: number) => void;
	height: number;
	setHeight: (height: number) => void;
	outputNumber: number;
	setOutputNumber: (outputNumber: number) => void;
	guidence: number;
	setGuidence: (guidence: number) => void;
	steps: number;
	setSteps: (steps: number) => void;
}

function Sidebar({
	prompt,
	width,
	height,
	outputNumber,
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
				<EnterPrompt
					prompt={prompt}
					setPrompt={setPrompt}
				/>
			</div>
			<div className='mt-4'>
				<ModifyOutput
					width={width}
					height={height}
					outputNumber={outputNumber}
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
