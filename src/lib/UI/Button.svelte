<script lang="ts">
	import type { Action } from 'svelte/action';
	import type { Readable } from 'svelte/store';

	type Builder = Readable<Record<string, unknown>> & Action<HTMLElement>;

	export let builder: Builder | undefined = undefined;
	export let ariaLabel: string | undefined = undefined;

	$: attributes = builder ? $builder : {};
	function action(node: HTMLElement) {
		if (builder) return builder(node);
	}
</script>

<button aria-label={ariaLabel} type="button" {...attributes} use:action>
	<slot />
</button>

<style lang="postcss">
	button {
		@apply inline-flex h-9 w-9 items-center justify-center rounded-full bg-white;
		@apply text-magnum-900 transition-colors hover:bg-white/90;
		@apply data-[highlighted]:ring-magnum-400 data-[highlighted]:ring-offset-2 !important;
		@apply p-0 text-sm font-medium  data-[highlighted]:outline-none;
	}
</style>
