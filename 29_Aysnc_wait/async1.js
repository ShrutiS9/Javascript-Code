async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      // Perform some operations using 'data' synchronously
      return data;
    } catch (error) {
      // Handle any errors
      throw error;
    }
  }
  
  fetchData()
    .then(result => {
      // Do something with the result after fetchData is complete
    })
    .catch(error => {
      // Handle any errors that occur during or after fetchData
    });
  