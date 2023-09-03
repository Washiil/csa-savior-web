export type Tags = '2D Array' | 'Loops' | 'Math'

export type Question = {
	title: string,
	slug: string,
	description: string,
	tags: Tags[]
	date: string
}