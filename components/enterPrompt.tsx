import { Textarea } from '@/components/ui/textarea';

function EnterPrompt() {
	return (
		<div className='bg-clr-bg-secondary p-6 rounded-2xl'>
			<h3 className='mb-6 flex justify-between'>
				Enter Prompt <span className='text-clr-gray'>Negative Prompt</span>
			</h3>
			<Textarea
				className='w-full rounded-2xl p-4'
				placeholder='Type your message here.'
			/>
		</div>
	);
}

export default EnterPrompt;
