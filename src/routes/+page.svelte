<script>
	import Dialog from '$lib/components/Dialog.svelte';
	import DropdownMenu from '$lib/components/DropdownMenu.svelte';
	import { createDialog } from '@melt-ui/svelte';

	const { trigger, ...dialogProps } = createDialog();
</script>

<DropdownMenu
	items={[
		{ label: 'About Melt UI' },
		{ label: 'Open Feedback Modal', melted: $trigger },
		{ label: 'Check for updates' },
		{ label: 'Settings' }
	]}
/>
<Dialog props={dialogProps} />
