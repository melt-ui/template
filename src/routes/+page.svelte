<script>
	import { addToast } from '$lib/components/Toaster.svelte';
</script>

<button
	class="bg-magnum-700 px-4 py-2 text-white rounded-lg hover:opacity-75 active:opacity-50 transition"
	on:click={() => {
		addToast({
			data: {
				title: 'Hello',
				description: 'This is a toast',
				color: 'bg-magnum-500'
			}
		});
	}}
>
	Add toast
</button>
