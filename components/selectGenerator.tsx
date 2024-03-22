import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

function SelectGenerator() {
	return (
		<div className='bg-clr-bg-secondary p-6 rounded-2xl'>
			<h3 className='mb-6'>Select Generator</h3>
			<Select>
				<SelectTrigger className='w-full rounded-2xl'>
					<SelectValue placeholder='SDXL Lightning' />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value='SDXL Lightning'>SDXL Lightning</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
}

export default SelectGenerator;
