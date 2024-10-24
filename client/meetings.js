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

      const discussionsResponse = await axios.get('http://localhost:3001/discussions')
      const discussionsContainer = document.getElementById('discussions-container')
      discussionsResponse.data.forEach(discussion => {
        const discussionItem = document.createElement('div')
        discussionItem.textContent = `User: ${discussion.user_id}, Date: ${new Date(discussion.date).toDateString()}, Content: ${discussion.content}`
        discussionsContainer.appendChild(discussionItem)
      })

  } catch (error) {
  console.error('Error fetching meetings:', error)
  }}

showData()