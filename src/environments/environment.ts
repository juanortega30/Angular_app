export const environment = {
  apiBaseUrl: 'https://localhost:7072', 
  endpoints: {
    expenses: '/expenses',
    expensesAdd: '/expenses/add',
    expensesUpdate: (id: number) => `/expenses/update/${id}`,
    expensesDelete: (id: number) => `/expenses/delete/${id}`
  }
};