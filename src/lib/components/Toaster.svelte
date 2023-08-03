<script lang="ts" context="module">
	export type ToastData = {
		title: string;
		description: string;
		color: string;
	};

	export const closeDelay = 2500;

	const {
		elements,
		helpers,
		states: { toasts },
		actions: { portal }
	} = createToaster<ToastData>({
		closeDelay
	});

	export const addToast = helpers.addToast;
</script>

<script lang="ts">
	import { createToaster } from '@melt-ui/svelte';
	import { flip } from 'svelte/animate';
	import Toast from './Toast.svelte';
</script>

<div class="fixed bottom-0 right-0 z-50 m-4 flex flex-col items-end gap-2" use:portal>
	{#each $toasts as { id, data } (id)}
		<div animate:flip={{ duration: 500 }}>
			<Toast {data} {id} {elements} />
		</div>
	{/each}
</div>
