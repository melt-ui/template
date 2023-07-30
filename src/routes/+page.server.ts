import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

const step1 = z.object({
	name: z.string().min(1)
});
const step2 = z.object({
	email: z.string().email().min(1)
});

export const load = async () => {
	const step1Form = await superValidate(step1);
	const step2Form = await superValidate(step2);

	// Always return { form } in load and form actions.
	return { step1Form, step2Form };
};

import { fail } from '@sveltejs/kit';

export const actions = {
	step1: async ({ request }) => {
		const step1Form = await superValidate(request, step1);
		console.log('POST', step1Form);

		// Convenient validation check:
		if (!step1Form.valid) {
			// Again, always return { form } and things will just work.
			return fail(400, { step1Form });
		}

		// Yep, return { form } here too
		return { step1Form };
	},
	step2: async ({ request }) => {
		const step2Form = await superValidate(request, step2);
		console.log('POST', step2Form);

		// Convenient validation check:
		if (!step2Form.valid) {
			// Again, always return { form } and things will just work.
			return fail(400, { step2Form });
		}

		// TODO: Do something with the validated data

		// Yep, return { form } here too
		return { step2Form };
	}
};
