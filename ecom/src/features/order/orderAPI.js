// // A mock function to mimic making an async request for data
// export function fetchCount(amount = 1) {
//   return new Promise(async(resolve) =>{
//     // setTimeout(() => resolve({ data: amount }), 500)
//     const res = await fetch("http://localhost:8080/")
// const data = await res.json()
// resolve({ data: data })
// }
//   );
// }

export const createOrder = async (item) => {
  try {
    const res = await fetch("http://localhost:8080/orders", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "content-type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
    return { data };
  } catch (error) {
    // Handle any errors that occur during the fetch operation
    console.error("An error occurred:", error);
    throw error; // Optionally re-throw the error to propagate it further
  }
};
