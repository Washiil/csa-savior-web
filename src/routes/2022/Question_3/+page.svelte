<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import 'highlight.js/styles/base16/dracula.css';
	import hljs from 'highlight.js';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);
</script>

<div>
	<h1>Question 3</h1>
	<br>
	<CodeBlock language="java" code={`
System.out.println("Hello world");

for(String i : strings) {

}`}>
</CodeBlock>
</div>