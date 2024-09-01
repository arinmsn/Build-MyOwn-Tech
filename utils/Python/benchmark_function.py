import time
import tracemalloc


# Helper function to benchmark a function's performance
def benchmark_function(func, *args):
    # Start measuring memory
    tracemalloc.start()

    # Start measuring time
    start_time = time.perf_counter()

    # Run the function
    result = func(*args)

    # Stop measuring time
    end_time = time.perf_counter()

    # Stop measuring memory
    current, peak = tracemalloc.get_traced_memory()
    tracemalloc.stop()

    # Calculate time taken
    time_elapsed = (end_time - start_time) * 1000  # time in milliseconds (ms)

    # Convert memory usage to MB
    current_mb = current / (1024 * 1024)
    peak_mb = peak / (1024 * 1024)

    # Display results
    print(f"Time taken: {time_elapsed:.5f} ms")
    print(f"Memory usage: {current / 1024:.5f} KB -- {current_mb:.5f} MB")
    print(f"Peak memory usage: {peak / 1024:.5f} KB -- {peak_mb:.5f} MB")

    return result
