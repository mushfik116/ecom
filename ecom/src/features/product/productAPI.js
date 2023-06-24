//template way..
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



//async await way...
export const fetchAllproducts = async()=> {
  try {
    const res = await fetch("http://localhost:8080/products");
    const data = await res.json();
    return {data}
  } catch (error) {
    // Handle any errors that occur during the fetch operation
    console.error('An error occurred:', error);
    throw error; // Optionally re-throw the error to propagate it further
  }
}

//omnly promise way..
// export function fetchCount(amount = 1) {
//   return new Promise((resolve, reject) => {
//     fetch("http://localhost:8080/")
//       .then(res => res.json())
//       .then(data => {
//         resolve({ data: data });
//       })
//       .catch(error => {
//         // Handle any errors that occur during the fetch operation
//         console.error('An error occurred:', error);
//         reject(error); // Optionally reject the promise to propagate the error further
//       });
//   });
// }
