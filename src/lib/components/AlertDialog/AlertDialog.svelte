<script lang="ts" context="module">
	import type { Dialog } from '@melt-ui/svelte';
	import { getContext, setContext } from 'svelte';

	type AlertDialogContext = Dialog;

	function setAlertDialogCtx(ctx: AlertDialogContext) {
		setContext<AlertDialogContext>('alertDialog', ctx);
	}

	export function getAlertDialogCtx(): AlertDialogContext {
		return getContext<AlertDialogContext>('alertDialog');
	}
</script>

<script lang="ts">
	import { createDialog, melt } from '@melt-ui/svelte';

	import { fade } from 'svelte/transition';
	import Trigger from './Trigger.svelte';
	import Title from './Title.svelte';
	import Description from './Description.svelte';
	import Close from './Close.svelte';

	const dialog = createDialog({
		role: 'alertdialog',
		closeOnOutsideClick: false
	});

	setAlertDialogCtx(dialog);

	const {
		elements: { overlay, content, portalled },
		states: { open }
	} = dialog;
</script>

<slot {Trigger} />

<div use:melt={$portalled}>
	{#if $open}
		<div use:melt={$overlay} class="fixed inset-0 z-50 bg-black/50" />
		<div
			class="fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw]
            max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-white
            p-6 shadow-lg"
			transition:fade={{
				duration: 150
			}}
			use:melt={$content}
		>
			<slot name="content" {Title} {Description} {Close} />
		</div>
	{/if}
</div>
