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

export const createUser = async (usreData) => {
  try {
    const res = await fetch("http://localhost:8080/users", {
      method: "POST",
      body: JSON.stringify(usreData),
      headers: { "content-type": "application/json" },
    });
    const data = await res.json();
    return { data };
  } catch (error) {
    // Handle any errors that occur during the fetch operation
    console.error("An error occurred:", error);
    throw error; // Optionally re-throw the error to propagate it further
  }
};

export const checkUser = async (loginInfo) => {
  try {
    const email = loginInfo.email;
    const password = loginInfo.password;
    const res = await fetch("http://localhost:8080/users?email=" + email);
    const data = await res.json();
    console.log(data);
    if (data.length) {
      if (data[0].password == password) {
        return { data: data[0] };
      }
    }
  } catch (error) {
    // Handle any errors that occur during the fetch operation
    console.error("user not found:", error);
    throw error; // Optionally re-throw the error to propagate it further
  }
};

export const updateUser = async (user) => {
  try {
    const res = await fetch("http://localhost:8080/users/" + user.id, {
      method: "PATCH",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
    return { data };
  } catch (error) {
    // Handle any errors that occur during the fetch operation
    console.error("user not found:", error);
    throw error; // Optionally re-throw the error to propagate it further
  }
};

//! updateUser is being called but the state and ui not getting updated until refresing
//!clue: in authslice updateUser returning undefined??
//! solved i didnt return the data from api to authslice 😓

export const signOut = async (userId) => {
  try {
    // const res = await fetch("http://localhost:8080/users?email=" + userId);
    // const data = await res.json();
    // console.log(data);
    // if (data.length) {
    //   if (data[0].password == password) {
    //     return { data: data[0] };
    //   }
    // }

    return { data: "success" };
  } catch (error) {
    // Handle any errors that occur during the fetch operation
    console.error("user not found:", error);
    throw error; // Optionally re-throw the error to propagate it further
  }
};
