import { createSlice } from "@reduxjs/toolkit";

  const initialState = {
    data: [
        {
            id: 0,
            name: "John Doe",
            customerId: "1DNFEA2",
            category: "AGRIC CLIENT",
            loanPeriod: "NOV 2020 - MAY 2021",
            status: true
          },
          {
            id: 1,
            name: "Dorcas Gibss",
            customerId: "1DNFEA3",
            category: "MICRO TECH",
            loanPeriod: "NOV 2020 - MAY 2021",
            status: false
          },
          {
            id: 2,
            name: "Dan Mike",
            customerId: "1DNFEA4",
            category: "CORPORATES",
            loanPeriod: "NOV 2020 - MAY 2021",
            status: true
          },
          {
            id: 3,
            name: "Brown Jackson",
            customerId: "1DNFEA6",
            category: "RETAIL TECHS",
            loanPeriod: "NOV 2020 - MAY 2021",
            status: false
          },
          {
            id: 4,
            name: "Bright Johnson",
            customerId: "1DNFEA8",
            category: "RETAIL TECHS",
            loanPeriod: "NOV 2020 - MAY 2021",
            status: true
          },
          {
            id: 5,
            name: "Jon Bell",
            customerId: "1DNFEA12",
            category: "LOYALIST",
            loanPeriod: "NOV 2020 - MAY 2021",
            status: true
          },
          {
            id: 6,
            name: "Joe Bryan",
            customerId: "1DNFEA15",
            category: "CORPORATES",
            loanPeriod: "NOV 2020 - MAY 2021",
            status: false
          },
    ],
    bank: [
      {
        id: 0,
        customer: "EGF BANK CUSTOMERS",
        totalNumber: "1,113,040 Customers",
        transactionValue: "KES 124Bn",
        loansTaken: "200,000 Ksh",
        loansPerformance: {
          normal: "94% Normal",
          watch: "1.85% Watch",
          nlp: "4.17% NPL"
        }
        },
        {
          id: 0,
          customer: "NON-EGF BANK CUSTOMERS",
          totalNumber: "7,903,091 Customers",
          transactionValue: "KES 943Bn",
          loansTaken: "22.2M Loans Taken Total Value of 1.18Tn",
          loansPerformance: {
            normal: "92.84% Normal",
            watch: "1.58% Watch",
            nlp: "5.58% NPL"
          }
          }
    ]
  };

const productSlice = createSlice({
  name: "customer",
  initialState,
});

export const {  } = productSlice.actions;

export default productSlice.reducer;
