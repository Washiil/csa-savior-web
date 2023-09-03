import type { Question } from '$lib/types'

export async function load({ fetch }) {
	const response = await fetch('api/questions')
	const questions: Question[] = await response.json()
	return { questions }
}