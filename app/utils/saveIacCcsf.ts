export const saveIacCcsf = async (orderRecord: Order, id: number) => {
  try {
    console.log('seal photos', orderRecord.iacCcsf.sealPhotos)
    
    const formData = new FormData()
    formData.append('isIacCcsf', String(orderRecord?.isIacCcsf))
    formData.append('verified', String(orderRecord?.iacCcsf?.verified))
    formData.append('report', String(orderRecord?.iacCcsf?.report))
    formData.append('endDate', new Date().toISOString())
    formData.append('verificationNotes', orderRecord.iacCcsf.verificationNotes)
    
    if (
      orderRecord?.iacCcsf?.sealPhotos && 
      (orderRecord.iacCcsf.sealPhotos.length > 0)
    ) {
      orderRecord.iacCcsf.sealPhotos.forEach((file, index) => {
        formData.append('sealPhotos', file)
      })
    }
    
    return await $fetch(`/api/order/${id}`, {
      method: 'POST',
      body: formData,
    })
  } catch (error) {
    console.error('Error submitting IAC-CCSF compliance:', error)
    throw Error('Failed to submit IAC-CCSF compliance. Please try again.')
  }
}