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

export const fetchLoggedInUser = async (userId) => {
  try {
    const res = await fetch("http://localhost:8080/users" + userId);
    const data = await res.json();
    return { data };
  } catch (error) {
    // Handle any errors that occur during the fetch operation
    console.error("An error occurred:", error);
    throw error; // Optionally re-throw the error to propagate it further
  }
};

export const fetchLoggedInUserOrders = async (userId) => {
  try {
    const res = await fetch("http://localhost:8080/orders?user.id=" + userId);
    const data = await res.json();
    return { data };
  } catch (error) {
    // Handle any errors that occur during the fetch operation
    console.error("An error occurred:", error);
    throw error; // Optionally re-throw the error to propagate it further
  }
};

export const updateUser = async (userId) => {
  try {
    const res = await fetch("http://localhost:8080/users" + userId);
    const data = await res.json();
    return { data };
  } catch (error) {
    // Handle any errors that occur during the fetch operation
    console.error("An error occurred:", error);
    throw error; // Optionally re-throw the error to propagate it further
  }
};
