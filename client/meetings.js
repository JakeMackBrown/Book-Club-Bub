async function showData (){
    try {
    const response = await axios.get('http://localhost:3001/meetings')
    console.log(response)
    const meetingsContainer = document.getElementById('meetings-container')
    response.data.forEach(meeting => {
      console.log("Book ID:", meeting.book_id)
      const meetingItem = document.createElement('div')
      meetingItem.textContent = `Meeting on ${new Date(meeting.date).toDateString()} at ${meeting.location}, Book: ${meeting.book_id.title}`
      meetingsContainer.appendChild(meetingItem)
      })

  } catch (error) {
  console.error('Error fetching meetings:', error)
  }}

showData()