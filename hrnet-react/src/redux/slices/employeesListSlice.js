import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = [];

// Create the employeesList slice
export const employeesListSlice = createSlice({
  name: "employeesList",
  initialState,
  reducers: {
    /**
     * Add an employee to the employees list.
     * @param {Array} state - The current state (employees list).
     * @param {Object} action - The action containing the payload (employee data).
     */
    addEmployee: (state, action) => {
      state.push(action.payload);
    },

    /**
     * Store the employees list in local storage.
     * @param {Array} state - The current state (employees list).
     */
    storeEmployeesList: (state) => {
      localStorage.setItem("employeesList", JSON.stringify(state));
    },

    /**
     * Retrieve the employees list from local storage.
     * @returns {Array} The employees list from local storage.
     */
    getEmployeesList: () => {
      const employeesList = localStorage.getItem("employeesList");
      return JSON.parse(employeesList) || [];
    },
  },
});

// Export action creators generated by createSlice
export const { addEmployee, storeEmployeesList, getEmployeesList } =
  employeesListSlice.actions;

// Export the employeesList reducer
export default employeesListSlice.reducer;
