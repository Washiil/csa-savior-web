<script lang="ts">
	import '../app.postcss';
	import { goto } from '$app/navigation';
	import { redirect } from '@sveltejs/kit';
	import { AppShell, AppBar, TreeView, TreeViewItem, type TreeViewNode } from '@skeletonlabs/skeleton';

	let questions: Record<string, number[]> = {
		'2021': [1],
		'2022': [1, 2, 3, 4],
	}
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">CSA-Savior</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://discord.gg/EXqV7W8MtY"
					target="_blank"
					rel="noreferrer"
				>
					Discord
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://twitter.com/SkeletonUI"
					target="_blank"
					rel="noreferrer"
				>
					Twitter
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/skeletonlabs/skeleton"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
			</svelte:fragment>
		</AppBar>

		
	</svelte:fragment>
	<!-- This is the sidebar -->
	<svelte:fragment slot="sidebarLeft">
		<!-- Hidden below Tailwind's large breakpoint -->
		<div id="sidebar-left" class="hidden lg:block bg-surface-800 m-2 rounded w-48 no-scrollbar" style='height: 98%'>
			<TreeView>
				{#each Object.entries(questions) as [key, value]}
					<TreeViewItem>
					{key}
					<svelte:fragment slot="children">
						{#each questions[key] as question}
							<TreeViewItem>
								<button on:click={() => goto(`/${key}/Question_${question}`)}>Question {question}</button>
							</TreeViewItem>
						{/each}
					</svelte:fragment>
					</TreeViewItem>
				{/each}
			</TreeView>
		</div>
	</svelte:fragment>
	<!-- Page Route Content -->
	<div class='bg-surface-800 m-2 rounded p-4' style='height: 98%'>
		<slot />
	</div>
</AppShell>

<style>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
</style>