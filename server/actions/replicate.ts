'use server';

import { revalidatePath } from 'next/cache';
import Replicate from 'replicate';

const replicate = new Replicate({
	auth: process.env.REPLICATE_API_TOKEN,
});

export const callReplicate = async ({
	width,
	height,
	prompt,
	guidence,
	steps,
}: {
	width: number;
	height: number;
	prompt: string;
	guidence: number;
	steps: number;
}) => {
	const output = await replicate.run(
		'shefa/turbo-enigma:85b256ceda2edad7d72ad740de2e168e512090f1dacf2f3a9b705b04c254254a',
		{
			input: {
				width: width,
				height: height,
				prompt: prompt,
				guidance_scale: guidence,
				num_inference_steps: steps,
			},
		},
	);

	revalidatePath('/');
	if (!output)
		return {
			output: 'error',
		};
	if (output)
		return {
			output,
		};
};
