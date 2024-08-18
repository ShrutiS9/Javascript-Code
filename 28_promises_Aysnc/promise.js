const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve("Operation succeeded"); // Fulfilled
    } else {
      reject(new Error("Operation failed")); // Rejected
    }
  }, 1000);
});

myPromise
  .then(result => {
    console.log("Success:", result); // This is called if the Promise is fulfilled
  })
  .catch(error => {
    console.error("Error:", error); // This is called if the Promise is rejected
  });
