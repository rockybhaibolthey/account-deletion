document.getElementById('deletionForm').addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevent form submission

  const mobileNumber = document.getElementById('mobile').value;

  // Send data to AWS Lambda via API Gateway
  try {
    const response = await fetch('https://<api-id>.execute-api.<region>.amazonaws.com/prod', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mobile: mobileNumber }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Response from Lambda:', data);
      document.getElementById('confirmationMessage').style.display = 'block';
    } else {
      console.error('Error:', response.statusText);
      alert('Something went wrong. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong. Please try again.');
  }
});
