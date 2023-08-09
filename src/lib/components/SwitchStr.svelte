<script lang="ts">
	import { createSwitch, melt } from '@melt-ui/svelte';

	export let name: string;

	const {
		elements: { root, input },
		states: { checked }
	} = createSwitch({
		name,
		value: 'on'
	});
</script>

<label class="flex item-scenter gap-2">
	<div class="flex items-center justify-center">
		<button
			use:melt={$root}
			class="relative h-6 w-11 cursor-default rounded-full bg-magnum-800 transition-colors data-[state=checked]:bg-magnum-950"
			id="airplane-mode"
		>
			<span
				class="block h-5 w-5 translate-x-0.5 rounded-full bg-white
                transition-transform will-change-transform
                {$checked && 'translate-x-[22px]'}"
			/>
		</button>
		<input use:melt={$input} />
	</div>
	Switch Str
</label>
