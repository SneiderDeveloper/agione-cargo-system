export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    console.log('Received IAC-CCSF compliance data:', body)

    // throw createError({
    //     statusCode: 500,
    //     statusMessage: 'Failed to submit IAC-CCSF compliance',
    // })
})