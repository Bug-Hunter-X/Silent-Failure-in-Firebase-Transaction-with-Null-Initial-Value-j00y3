function incrementCounter(counterRef) {
  counterRef.transaction(current => {
    return current == null ? 1 : current + 1; 
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