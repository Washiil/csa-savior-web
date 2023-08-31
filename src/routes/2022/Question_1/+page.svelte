<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import 'highlight.js/styles/base16/dracula.css';
	import hljs from 'highlight.js';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);
</script>

<div>
	<h1>Question 1: Methods and Control Structures</h1>
	<br>
	<h2>Part A</h2>
	<br>
	<CodeBlock language="java" code={`
public int getScore() {
    int score = 0;
    if (levelOne.goalReached()) {
        score = levelOne.getPoints();
        if (levelTwo.goalReached()) {
            score += levelTwo.getPoints();
            if (levelThree.goalReached()) {
                score += levelThree.getPoints();
            }
        }
    }
    if (isBonus()) {
        score *= 3;
    }
    return score;
}`}/>
	<br>
	<h2>Part B</h2>
	<br>
	<CodeBlock language="java" code={`
public int playManyTimes(int num) {
    int max = 0;
    for (int i = 0; i < num; i++) {
        play();
        int score = getScore();
        if (score > max) {
            max = score;
        }
    }
    return max;
}`}/>
</div>