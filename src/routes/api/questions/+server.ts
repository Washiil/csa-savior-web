import { json } from '@sveltejs/kit'
import { Question } from '$lib/types';

async function getQuestions() {
	const paths = import.meta.glob('/src/questions/*.md', {
		eager: true,
	});

	let questions: Question[] = []

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if(file && typeof file == 'object' && slug) {
			const metadata = file.metadata as Omit<Question, 'slug'>
			const question = { ...metadata, slug } satisfies Question
			questions.push(question)
		}
	}

	return questions
}

export async function GET() {
	const questions = await getQuestions();
	return json(questions)
}