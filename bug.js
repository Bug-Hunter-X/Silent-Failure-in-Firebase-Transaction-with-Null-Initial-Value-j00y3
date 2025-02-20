function incrementCounter(counterRef) {
  counterRef.transaction(current => {
    if (current === null) {
      return 1; // Initialize to 1 if it doesn't exist
    } else {
      return current + 1; // Increment otherwise
    } 
  }).then(() => {
    console.log('Counter incremented successfully!'); 
  }).catch((error) => {
    console.error('Transaction failed: ', error); 
  });
}

// ... later in your code ...

db.ref('/counters/myCounter').once('value', snapshot => {
  const currentCounterValue = snapshot.val();
  console.log('Current Counter value:',currentCounterValue)
  incrementCounter(db.ref('/counters/myCounter'));
});