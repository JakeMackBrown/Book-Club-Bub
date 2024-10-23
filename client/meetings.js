async function showData (){
    try {
    const response = await axios.get('http://localhost:3001/meetings');
    console.log(response)
    const meetingsContainer = document.getElementById('meetings-container');
    response.data.forEach(meeting => {
      const meetingItem = document.createElement('div');
      meetingItem.textContent = `Meeting on ${meeting.date} at ${meeting.location}, Book ID: ${meeting.book_id}`;
      meetingsContainer.appendChild(meetingItem);
      });
  } catch (error) {
  console.error('Error fetching meetings:', error);
  }}

showData()