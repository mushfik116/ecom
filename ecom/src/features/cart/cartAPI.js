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

export const addItemTOCart = async (item) => {
  try {
    const res = await fetch("http://localhost:8080/cart", {
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

export const fetchItemByUserId = async (userId) => {
  try {
    const res = await fetch("http://localhost:8080/cart?user=" + userId);
    //!issue maybe?
    const data = await res.json();
    console.log(data);
    return { data };
  } catch (error) {
    // Handle any errors that occur during the fetch operation
    console.error("An error occurred:", error);
    throw error; // Optionally re-throw the error to propagate it further
  }
};

// im so worked u i forgot to remove this part causing my action not workin {
//   method: "POST",
//   body: JSON.stringify(item),
//   headers: { "content-type": "application/json" },
// }

export const updateCart = async (product) => {
  try {
    const res = await fetch("http://localhost:8080/cart/" + product.id, {
      method: "PATCH",
      body: JSON.stringify(product),
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

export const deleteItemFromCart = async (productId) => {
  try {
    const res = await fetch("http://localhost:8080/cart/" + productId, {
      method: "DELETE",

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

// export const resetCart = async (userId) => {
//   try {
//     const res = await fetch("http://localhost:8080/cart?user=" + userId, {
//       method: "DELETE",

//       headers: { "content-type": "application/json" },
//     });
//     const data = await res.json();
//     console.log(data);
//     return { data };
//   } catch (error) {
//     // Handle any errors that occur during the fetch operation
//     console.error("An error occurred:", error);
//     throw error; // Optionally re-throw the error to propagate it further
//   }
// };

//! in this resetCart api call didnt work but state did change for a particular time??but as soon i logged back the cart was filled
//its just we hv to use userid to grab all those cart items from cart bcs cart wasnt designed based on each user
// then we delete in this http://localhost:8080/cart route

// >> correct way
// export const resetCart = async (userId) => {
//   try {
//     // const res = await fetch("http://localhost:8080/cart?user=" + userId);
//     // const data = await res.json();
//     // instead use fn that we already made..
//     const res = await fetchItemByUserId(userId);
//     const data = await res.json();
//     console.log(data);
//     for (let item in data) {
//       await deleteItemFromCart(item.id);
//     }
//     // return { data };
//     return { status: "reset cart done" };
//   } catch (error) {
//     // Handle any errors that occur during the fetch operation
//     console.error("An error occurred:", error);
//     throw error; // Optionally re-throw the error to propagate it further
//   }
// };

//! inspect elm e res.json is not a fn ashe ??

export const resetCart = async (userId) => {
  try {
    const res = await fetch("http://localhost:8080/cart?user=" + userId);
    const data = await res.json();
    console.log(data);

    for (let item of data) {
      await deleteItemFromCart(item.id);
    }

    return { status: "reset cart done" };
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
};

//  for...in is used for iterating over object properties. In this case, since data is an array, we should use for...of to iterate over its elements. !!!
//!still the api not working..i think there is async issue
//? iisue solved lol.. the issssse was when i called " dispatch(resetCartAsync(  ));" i didnt pass user.id lmaooo
//? i should check if my previous logics were right lol
