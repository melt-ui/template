<script lang="ts">
	import { createProgress, melt, type ToastsElements } from '@melt-ui/svelte';
	import { X } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { closeDelay, type ToastData } from './Toaster.svelte';
	import { writable } from 'svelte/store';

	export let elements: ToastsElements;
	$: ({ content, title, description, close } = elements);

	export let data: ToastData;
	export let id: string;

	let created = performance.now();
	let progress = writable(0);

	const {
		elements: { root: progressEl },
		options: { max }
	} = createProgress({
		value: progress,
		max: 100
	});

	onMount(() => {
		let unsub: number;

		const calcProgress = () => {
			const now = performance.now();
			if (hovering) {
				// Ease into now
				created = now - (now - created) * 0.75;
				if (now - created < 50) {
					created = now;
				}
			}
			const delta = now - created;

			$progress = 100 * (delta / closeDelay);
			console.log($progress);
			if ($progress < 100) {
				unsub = requestAnimationFrame(calcProgress);
			}
		};

		unsub = requestAnimationFrame(calcProgress);

		return () => {
			cancelAnimationFrame(unsub);
		};
	});

	let hovering = false;
</script>

<div
	use:melt={$content(id)}
	in:fly={{ duration: 150, x: '100%' }}
	out:fly={{ duration: 150, x: '100%' }}
	on:pointerenter={() => (hovering = true)}
	on:pointerleave={() => (hovering = false)}
	class="rounded-lg overflow-hidden bg-neutral-800 text-white shadow-md"
>
	<div
		use:melt={$progressEl}
		class="relative h-1 rounded-full mt-3 ml-5 w-[10%] overflow-hidden bg-black/40"
	>
		<div
			class="h-full w-full bg-magnum-500"
			style={`transform: translateX(-${100 - (100 * ($progress ?? 0)) / ($max ?? 1)}%)`}
		/>
	</div>
	<div
		class="relative flex w-[24rem] max-w-[calc(100vw-2rem)] items-center justify-between gap-4 p-5"
	>
		<div>
			<h3 use:melt={$title(id)} class="flex items-center gap-2 font-semibold">
				{data.title}
				<span class="rounded-full square-1.5 {data.color}" />
			</h3>
			<div use:melt={$description(id)}>
				{data.description}
			</div>
		</div>
		<button
			use:melt={$close(id)}
			class="absolute right-4 top-4 grid place-items-center rounded-full text-magnum-500 square-6
      hover:bg-magnum-900/50"
		>
			<X class="square-4" />
		</button>
	</div>
</div>
