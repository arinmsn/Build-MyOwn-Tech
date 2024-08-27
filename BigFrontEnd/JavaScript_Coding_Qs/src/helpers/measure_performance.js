function measurePerformance(fn, ...args) {
    // Start the timer
    console.time('Execution Time');

    // Measure the initial memory
    let initialMemory = process.memoryUsage().heapUsed;

    // Execute the function
    fn(...args);

    // Measure the final memory
    let finalMemory = process.memoryUsage().heapUsed;

    // Stop the timer
    console.timeEnd('Execution Time');

    // Log the memeroy usage
    console.log(`Memory used: ${(finalMemory - initialMemory) / 1024 / 1024} MB`);
}

module.exports = measurePerformance;