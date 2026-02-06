export default defineEventHandler(async () => {
	return await new Promise((resolve) => setTimeout(() => resolve([
		{ label: 'Dock Door 1' , value: 1 },
		{ label: 'Dock Door 2' , value: 2 },
		{ label: 'Dock Door 3' , value: 3 },
		{ label: 'Dock Door 4' , value: 4 },
		{ label: 'Dock Door 5' , value: 5 },
		{ label: 'Dock Door 6' , value: 6 },
		{ label: 'Dock Door 7' , value: 7 },
	]), 5000))
})