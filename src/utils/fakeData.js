export  const segmentData = [
    { value: 'existing', label: 'Existing' },
    { value: 'new', label: 'New' },
];

export  const segmentationAnalysisData = [
    {
      id: 1,
      value: "Segmentation Analysis"
    },
    {
      id: 2,
      value: "Customer's Profile",
    }
  ];

export  const categoryData = [
    { id: 1, value: "theAgricClients", label: "The Agric Clients" },
    { id: 2, value: "theMicroTechs", label: "The Micro Techs" },
    { id: 3, value: "theRetailTechs", label: "The Retail Techs" },
    { id: 4, value: "theLoyalists", label: "The Loyalists" },
    { id: 5, value: "theCorporates", label: "The Corporates" },

  ];

  export  const activeClientsData = [
    {
      id: 1,
      title: "The Agric Clients",
      value: 62
    },
    {
      id: 2,
      title: "The Micro Techs",
      value: 71
    },
    {
      id: 3,
      title: "The Retail Techs",
      value: 43
    },
    {
      id: 4,
      title: "The Loyalists",
      value: 50
    },
    {
      id: 5,
      title: "The Corporates",
      value: 27
    }
  ];

  export  const averageTransactionalValueData = [
    {
      id: 1,
      title: "The Agric Clients",
      value: "₦ 6,875"
    },
    {
      id: 2,
      title: "The Micro Techs",
      value: "₦ 2,491"
    },
    {
      id: 3,
      title: "The Retail Techs",
      value: "₦ 1,689"
    },
    {
      id: 4,
      title: "The Loyalists",
      value: "₦ 300,816"
    },
    {
      id: 5,
      title: "The Corporates",
      value: "₦ 20,880,542"
    }
  ];

  export  const averageMonthlyBalanceData = [
    {
      id: 1,
      title: "The Agric Clients",
      value: "₦ 9,526"
    },
    {
      id: 2,
      title: "The Micro Techs",
      value: "-₦ 2,491"
    },
    {
      id: 3,
      title: "The Retail Techs",
      value: "₦ 2,491"
    },
    {
      id: 4,
      title: "The Loyalists",
      value: "₦ 2,491"
    },
    {
      id: 5,
      title: "The Corporates",
      value: "₦ 9,526"
    }
  ];

  export  const pillarDistributionData = [
    {
      id: 1,
      title: "Social Protection (SP)",
      color: "#407BFF"
    },
    {
      id: 2,
      title: "Education and Leadership Development (Education)",
      color: "#407BFF"
    },
    {
      id: 3,
      title: "Energy & Environment (EE)",
      color: "#2A38A4"
    },
    {
      id: 4,
      title: "Enterprise development & financial inclusion (E+E)",
      color: "#2A38A4"
    },
    {
      id: 5,
      title: "Food & Agriculture (F&A)",
      color: "#407BFF"
    }
  ];

  export const allCustomersData = [
    {
      id: 1,
      name: "John Doe",
      customerId: "1DNFEA2",
      category: "AGRIC CLIENT",
      loanPeriod: "NOV 2020 - MAY 2021",
      status: true
    },
    {
      id: 2,
      name: "Dorcas Gibss",
      customerId: "1DNFEA3",
      category: "MICRO TECH",
      loanPeriod: "NOV 2020 - MAY 2021",
      status: false
    },
    {
      id: 3,
      name: "Dan Mike",
      customerId: "1DNFEA4",
      category: "CORPORATES",
      loanPeriod: "NOV 2020 - MAY 2021",
      status: true
    },
    {
      id: 4,
      name: "Brown Jackson",
      customerId: "1DNFEA6",
      category: "RETAIL TECHS",
      loanPeriod: "NOV 2020 - MAY 2021",
      status: false
    },
    {
      id: 5,
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
      id: 5,
      name: "Joe Bryan",
      customerId: "1DNFEA15",
      category: "CORPORATES",
      loanPeriod: "NOV 2020 - MAY 2021",
      status: false
    },
  ]

  export const categoryColors = {
    'AGRIC CLIENT': { background: '#C9ECE2', text: '#04674B' },
    'MICRO TECH': { background: '#D4D9FF', text: '#2A38A4' },
    'CORPORATES': { background: '#9BBAFF', text: '#002370' },
    'RETAIL TECHS': { background: '#C4A2FC', text: '#2D0076' },
    'LOYALIST': { background: '#FFE1C0', text: '#BE6402' },
  };