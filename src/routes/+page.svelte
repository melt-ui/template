<script>
	import { enhance } from '$app/forms';
	import AlertDialog from '$lib/components/AlertDialog/AlertDialog.svelte';

	let submitted = false;
</script>

{submitted}

<AlertDialog let:Trigger>
	<Trigger>Open</Trigger>

	<form
		class="text-neutral-900"
		method="POST"
		use:enhance={({ formData }) => {
			submitted = true;
			console.log(formData.get('checkbox'));
		}}
		slot="content"
		let:Title
		let:Description
		let:Close
	>
		<Title>Title</Title>
		<Description>Description</Description>
		<label class="block">
			<input name="checkbox" type="checkbox" value="on" checked />
			<span>Checkbox</span>
		</label>

		<div class="mt-4">
			<Close type="submit">Close</Close>
		</div>
	</form>
</AlertDialog>
