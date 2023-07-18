<script>
	import Dialog from '$lib/components/Dialog.svelte';
	import DropdownMenu from '$lib/components/DropdownMenu.svelte';
	import { createDialog } from '@melt-ui/svelte';

	const { trigger, ...dialogProps } = createDialog();
</script>

<DropdownMenu items={['About Melt UI', 'Open Feedback Modal', 'Check for updates', 'Settings']}>
	<svelte:fragment slot="item" let:item let:melted>
		{#if item === 'Open Feedback Modal'}
			<button class="item" melt={melted} {...trigger} use:trigger>Shenanigans</button>
		{:else}
			<span class="item" melt={melted}>
				{item}
			</span>
		{/if}
	</svelte:fragment>
</DropdownMenu>
<Dialog props={dialogProps} />
