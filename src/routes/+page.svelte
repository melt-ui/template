<script lang="ts">
	import Tabs from '$lib/components/Tabs.svelte';
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	export let data;

	const {
		form: s1Form,
		enhance: s1Enhance,

		errors: s1Errors
	} = superForm(data.step1Form, {
		onResult({ result }) {
			if (result.type !== 'success') return;
			tab = 'Step 2';
			disabledTabs = [];
		}
	});

	const {
		form: s2Form,
		enhance: s2Enhance,

		errors: s2Errors
	} = superForm(data.step2Form, {
		onResult({ result }) {
			if (result.type !== 'success') return;
			success = true;
		}
	});

	let tab = 'Step 1';
	let disabledTabs = ['Step 2'];
	let success = false;

	$: if (tab === 'Step 1') {
		disabledTabs = ['Step 2'];
	}
</script>

<div class="pb-4">
	{#if success}
		<div class="flex flex-col gap-2">
			<h1 class="text-2xl font-semibold text-green-600">Success!</h1>
			<p class="text-lg">You have successfully completed the form.</p>
		</div>
	{:else}
		<div class="flex flex-col gap-2">
			<h1 class="text-2xl font-semibold">Multi-step form</h1>
			<p class="text-lg">
				This is a multi-step form. You can navigate between steps using the tabs below.
			</p>
		</div>
	{/if}
</div>

<Tabs tabs={['Step 1', 'Step 2']} let:tab bind:value={tab} {disabledTabs}>
	{#if tab === 'Step 1'}
		<form class="flex flex-col gap-2" method="POST" action="?/step1" use:s1Enhance>
			<fieldset class="flex flex-col gap-1">
				<label for="name">Name</label>
				<input
					class="border border-magnum-300 text-magnum-700 rounded-md px-2 py-1"
					type="text"
					name="name"
					bind:value={$s1Form.name}
				/>
				<span class="text-red-500 text-sm">{$s1Errors.name ?? ''}</span>
			</fieldset>

			<button
				class="bg-magnum-500 rounded-md px-4 py-2 self-end text-white font-semibold hover:opacity-75"
			>
				Next
			</button>
		</form>
	{:else if tab === 'Step 2'}
		<form class="flex flex-col gap-2" method="POST" action="?/step2" use:s2Enhance>
			<fieldset class="flex flex-col gap-1">
				<label for="email">Email</label>
				<input
					class="border border-magnum-300 text-magnum-700 rounded-md px-2 py-1"
					type="email"
					name="email"
					bind:value={$s2Form.email}
				/>
				<span class="text-red-500 text-sm">{$s2Errors.email ?? ''}</span>
			</fieldset>

			<button
				class="bg-magnum-500 rounded-md px-4 py-2 self-end text-white font-semibold hover:opacity-75"
			>
				Next
			</button>
		</form>
	{/if}
</Tabs>
