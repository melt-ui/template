<script lang="ts">
	import SwitchBool from '$lib/components/SwitchBool.svelte';
	import SwitchStr from '$lib/components/SwitchStr.svelte';
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	// Client API:
	const { form, fields, enhance } = superForm(data.form);
</script>

<SuperDebug data={$form} />

<p>Make sure you submit the form to see superDebug value being changed</p>

<form class="flex flex-col items-start gap-2 mt-8" method="POST" use:enhance>
	<SwitchStr name={fields.checkedStr.name} />
	<SwitchBool name={fields.checkboxBool.name} bind:checked={$form.checkboxBool} />

	<button class="bg-white text-magnum-700 px-3 py-1 rounded-md">Submit</button>
</form>
