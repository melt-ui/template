<script lang="ts">
	import { addToast, type ToastData } from '$lib/components/Toaster.svelte';

	const toastData: ToastData[] = [
		{
			title: 'Success',
			description: 'Congratulations! It worked!',
			color: 'bg-green-500'
		},
		{
			title: 'Warning',
			description: 'Please check again.',
			color: 'bg-orange-500'
		},
		{
			title: 'Error',
			description: 'Something did not work!',
			color: 'bg-red-500'
		}
	];

	function addRandomToast() {
		addToast({ data: toastData[Math.floor(Math.random() * toastData.length)] });
	}
</script>

<button
	class="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 font-medium leading-none
  text-magnum-700 shadow-lg hover:opacity-75"
	on:click={addRandomToast}
>
	Show toast
</button>
