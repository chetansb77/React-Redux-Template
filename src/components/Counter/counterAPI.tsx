// A mock function to mimic making an async request for data
async function fetchCount(amount = 1): Promise<any> {
  return new Promise((resolve) => setTimeout(() => resolve({ data: amount }), 500));
}

export default fetchCount;
