import { Textarea } from '@/components/ui/textarea';

function EnterPrompt({
	setPrompt,
	prompt,
}: {
	setPrompt: (prompt: string) => void;
	prompt: string;
}) {
	return (
		<div className='bg-clr-bg-secondary p-6 rounded-2xl'>
			<h3 className='mb-6 flex justify-between'>
				Enter Prompt <span className='text-clr-gray'>Negative Prompt</span>
			</h3>
			<Textarea
				value={prompt}
				className='w-full rounded-2xl p-4'
				placeholder='Type your message here.'
				onChange={e => setPrompt(e.target.value)}
			/>
		</div>
	);
}

export default EnterPrompt;
