import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllproducts } from './productAPI';

const initialState = {
  products: [],
  status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const  fetchAllproductsAsync = createAsyncThunk(
  'product/fetchAllproducts',
  async () => {
    const response = await fetchAllproducts();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.products += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllproductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllproductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = productSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.product.value)`
export const selectAllProducts = (state) => state.product.products;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default productSlice.reducer;


// >>some solved questions

// q1:how does immer help in reducing complexity in redux toolkit ... ?

// ans:Immer is a JavaScript library that helps simplify state management in Redux applications, including those built using Redux Toolkit. It reduces the complexity of working with immutable data by providing a convenient and intuitive way to update state in a mutable manner.

// In Redux, the state is typically stored in an immutable data structure, meaning that it cannot be directly modified. To update the state, you need to create a new copy of the state with the desired changes, which can involve writing a lot of boilerplate code. Immer addresses this issue by allowing you to write code that appears to be mutating the state directly, while it actually handles the immutability under the hood.

// When using Immer with Redux Toolkit, you can take advantage of its createSlice and createReducer functions to define your Redux slices and reducers. These functions accept an initial state and a set of case reducers, which specify how the state should be updated in response to different actions.

// With Immer, you can write your case reducers as "mutating" functions, where you modify the state directly. Immer will create a draft copy of the state behind the scenes and track all the changes you make. Once your reducer finishes executing, Immer will use these changes to create a new immutable state for you.

// By using Immer, you don't have to worry about manually creating copies of the state or writing complex immutability logic. It simplifies the process of updating the state in Redux Toolkit, making your code more readable and maintainable. It also helps reduce the amount of code you need to write, as Immer handles the immutability operations for you.

// Overall, Immer is a powerful tool for reducing complexity in Redux Toolkit by providing a more intuitive and concise way to work with immutable data, allowing you to focus on defining the state transformations rather than dealing with immutability details.



// q2:but isnt objects and arrays are mutable ? cant i just update them without copying with three dots?

// ans:In JavaScript, objects and arrays are mutable data types, which means you can modify them directly by assigning new values to their properties or elements. However, when it comes to managing application state in Redux, immutability is a core principle that ensures predictable state updates and enables efficient change detection.

// Redux relies on immutability to track changes in the state and determine when to trigger UI updates. By enforcing immutability, Redux can compare the previous and current states more efficiently to determine what has changed, which in turn optimizes rendering performance.

// While you technically can update objects and arrays directly in Redux, doing so can lead to issues and make it challenging to reason about state changes. Consider the following:

// Predictability: Mutating the state directly can introduce hidden side effects and make it harder to trace how and when the state was modified. Redux's time-travel debugging and dev tools heavily rely on immutability to provide a clear picture of state changes over time.

// Immutable Updates: Redux encourages the use of immutable updates to ensure that the previous state remains unchanged. By creating a new copy of the state with the desired modifications, you preserve the integrity of the previous state, making it easier to reason about state transitions and undo/redo operations.

// Immutability and Pure Functions: Redux reducers are expected to be pure functions that produce the same output given the same input. Modifying objects or arrays in place breaks this contract and can lead to unexpected behavior and bugs.

// This is where libraries like Immer come in. They provide a convenient way to work with immutability by abstracting away the complexity of creating new copies of the state. Immer allows you to write code that appears to mutate the state directly, but under the hood, it ensures immutability by generating a new immutable state based on the modifications you make.

// Using Immer with Redux Toolkit simplifies the process of working with immutable data by reducing the boilerplate code required to update state and making the code more readable. It enforces immutability without sacrificing the benefits of mutability during the state update process, providing a balance between simplicity and predictability in Redux development.


// q3:so you mean i just think of mutable data types as immutable to keep the redux principle ? or redux itself something under the hood to make the mutable data types like objs arrays immutable so i can not avoid redux principle?

// ans:In Redux, the principle of immutability applies to the state managed by the Redux store. Redux itself does not enforce immutability on JavaScript's mutable data types such as objects and arrays. It is up to you as the developer to ensure that you follow the principles of immutability when updating the state in a Redux application.

// While JavaScript's objects and arrays are mutable by default, Redux expects you to treat them as immutable when working with state. This means that instead of directly modifying the state, you should create new copies of the state with the desired changes.

// Redux achieves its predictable behavior and efficient change detection by comparing the previous state with the new state during each update. By using immutable updates, Redux can determine what has changed more easily, allowing it to trigger UI updates efficiently.

// While you could technically mutate the state directly and avoid making copies, doing so would go against Redux principles and may lead to unpredictable behavior. It would make it harder to reason about state changes, trace the history of actions, and benefit from Redux's time-travel debugging and dev tools.

// Libraries like Immer help simplify working with immutable updates by abstracting away the complexity of creating new copies of the state. They provide a more intuitive and readable way to update state while ensuring immutability under the hood. Immer and similar libraries can be used in combination with Redux to make the process of managing immutable state easier and more efficient.

// So, in summary, while JavaScript's objects and arrays are mutable by default, it is important to treat them as immutable within the context of Redux to maintain the principles of predictability and efficient change detection. Libraries like Immer can assist in achieving immutability and simplify the process of working with state updates.


// q4:so by using immer redux keeps the "immutiblity principle" and still allows the developer to update states in easier conventional .. ~no copying state~ way ?

// Yes, that's correct! By using Immer with Redux, you can maintain the immutability principle while simplifying the process of updating state. Immer allows you to update state in a more conventional, mutable-like manner without directly modifying the original state.

// When you use Immer in your Redux application, you can write code that appears to mutate the state directly, but Immer takes care of creating a new immutable state behind the scenes. Immer tracks all the changes you make to the state and uses those changes to produce a new immutable state.

// This approach provides several benefits:

// Simplicity: Immer allows you to write code that looks like you're mutating the state directly, which is often easier to read and understand. It reduces the need for manual copying of state and the associated boilerplate code.

// Immutability Preservation: Immer ensures that the original state remains unchanged. It creates an immutable copy of the state, applying the changes you specify, while preserving the integrity of the original state. This helps maintain the immutability principle required by Redux.

// Performance Optimization: Immer is designed to optimize performance by minimizing unnecessary state copies. It uses structural sharing to reuse unchanged parts of the state tree, resulting in more efficient updates.

// By using Immer, you get the benefits of immutability while enjoying a more convenient and conventional update syntax. It simplifies state management and helps you write more readable and maintainable code, all while adhering to Redux principles.



////////////////////////////////////////////////
// q: why use extrareducers?

// ans: sometimes you want to access one action from another action like ex bonus/inc 100+ hoile reward/inc hit korbe +2% ...
//      eta extra reducers diye kora jabe ... not only that! async operation er jonne o eta kaje lage

// q:what is async thunk then?

// ans: first we need to understand how api fetching works and how we save the fetched data in redux state!

//    lets say we are fetching products .. for that we need a fetcch product function that feches data and the data is 
//    being dispatched inside the fect product function ! so we provide the function with dispatch 
//    ... if we want to call the function we do that inside useeffect! and that it 

//    ... but all of this happens in the component structure what we can separate the logic and keep in in async thunk 
//     in short its a middleware