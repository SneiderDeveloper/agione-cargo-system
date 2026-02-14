const awbs = [
  {
    id: 1,
    statusId: 2,
    orderId: 5001,
    status: "Pending",
    order: {
      driverId: 1,
      warehouseAgentId: 1,
      priorityId: 1,
      priority: 'Low',
      driver: {
        fullName: "John Doe",
        registrationDate: "2024-06-01",
        licensePhoto: "license.jpg"
      },
      warehouseAgent: {
        fullName: "Jane Smith",
      },
    },
    code: "002-8765-4321",
    totalNumberOfPieces: 10,
    totalWeight: 1200.5,
    cubicMeters: 3.2,
    route: {
      orgId: 1,
      destId: 2,
      org: "MEX",
      dest: "JFK"
    },
    flightNumber: "AM123",
    departureDate: new Date("2024-06-01T10:00:00Z"),
    natureOfGoods: "Electronics",
    isBUP: true,
    isActiveContainer: true,
    groupMode: true,
    shc: [101, 102],
    pendingDgCheck: false,
    warehouseAgentCheck: {
      completed: {
        signature: "John Doe",
      },
      reject: {
        rejectionCategoryId: 0,
        detailedReason: "",
      },
      date: new Date("2024-06-01T12:00:00Z"),
    }
  },
  {
    id: 2,
    statusId: 1,
    orderId: 5002,
    status: "In Progress",
    order: {
      driverId: 102,
      warehouseAgentId: 2,
      priorityId: 1,
      priority: "Medium",
      driver: {
        fullName: "Jane Doe",
        registrationDate: "2024-06-02",
        licensePhoto: "jane_doe_license.jpg"
      },
      warehouseAgent: {
        fullName: "Mark Johnson",
      },
    },
    code: "002-8765-4322",
    totalNumberOfPieces: 15,
    totalWeight: 1850.75,
    cubicMeters: 4.5,
    route: {
      orgId: 2,
      destId: 3,
      org: "JFK",
      dest: "LAX"
    },
    flightNumber: "AA456",
    departureDate: new Date("2024-06-02T14:30:00Z"),
    natureOfGoods: "Textiles",
    isBUP: false,
    isActiveContainer: false,
    groupMode: false,
    shc: [103],
    pendingDgCheck: true,
    warehouseAgentCheck: {
      completed: {
        signature: "",
      },
      reject: {
        rejectionCategoryId: 0,
        detailedReason: "",
      },
      date: new Date("2024-06-02T16:00:00Z"),
    }
  },
  {
    id: 3,
    statusId: 3,
    orderId: 5003,
    status: "Accepted",
    order: {
      driverId: 103,
      warehouseAgentId: 3,
      priorityId: 3,
      priority: "Low",
      driver: {
        fullName: "Alice Johnson",
        registrationDate: "2024-06-03",
        licensePhoto: "alice_johnson_license.jpg"
      },
      warehouseAgent: {
        fullName: "Patricia Davis",
      },
    },
    code: "002-8765-4323",
    totalNumberOfPieces: 8,
    totalWeight: 950.3,
    cubicMeters: 2.8,
    route: {
      orgId: 3,
      destId: 1,
      org: "LAX",
      dest: "MEX"
    },
    flightNumber: "DL789",
    departureDate: new Date("2024-06-03T08:15:00Z"),
    natureOfGoods: "Pharmaceuticals",
    isBUP: true,
    isActiveContainer: true,
    groupMode: true,
    shc: [104, 105],
    pendingDgCheck: false,
    warehouseAgentCheck: {
      completed: {
        signature: "Jane Smith",
      },
      reject: {
        rejectionCategoryId: 0,
        detailedReason: "",
      },
      date: new Date("2024-06-03T10:00:00Z"),
    }
  },
  {
    id: 4,
    statusId: 1,
    orderId: 5004,
    status: "Rejected",
    order: {
      driverId: 104,
      warehouseAgentId: 4,
      priorityId: 2,
      priority: "High",
      driver: {
        fullName: "Bob Brown",
        registrationDate: "2024-06-04",
        licensePhoto: "bob_brown_license.jpg"
      },
      warehouseAgent: {
        fullName: "Linda Martinez",
      },
    },
    code: "002-8765-4324",
    totalNumberOfPieces: 20,
    totalWeight: 2500.0,
    cubicMeters: 6.0,
    route: {
      orgId: 1,
      destId: 3,
      org: "MEX",
      dest: "LAX"
    },
    flightNumber: "UA321",
    departureDate: new Date("2024-06-04T18:45:00Z"),
    natureOfGoods: "Machinery Parts",
    isBUP: false,
    isActiveContainer: false,
    groupMode: false,
    shc: [106],
    pendingDgCheck: false,
    warehouseAgentCheck: {
      completed: {
        signature: "Mike Johnson",
      },
      reject: {
        rejectionCategoryId: 0,
        detailedReason: "",
      },
      date: new Date("2024-06-04T20:00:00Z"),
    }
  },
  {
    id: 5,
    statusId: 2,
    orderId: 5005,
    status: "Pending",
    order: {
      driverId: 105,
      warehouseAgentId: 5,
      priorityId: 1,
      priority: "Medium",
      driver: {
        fullName: "Charlie Green",
        registrationDate: "2024-06-05",
        licensePhoto: "charlie_green_license.jpg"
      },
      warehouseAgent: {
        fullName: "Nancy Wilson",
      },
    },
    code: "002-8765-4325",
    totalNumberOfPieces: 12,
    totalWeight: 1400.8,
    cubicMeters: 3.7,
    route: {
      orgId: 2,
      destId: 1,
      org: "JFK",
      dest: "MEX"
    },
    flightNumber: "BA654",
    departureDate: new Date("2024-06-05T11:20:00Z"),
    natureOfGoods: "Food Products",
    isBUP: true,
    isActiveContainer: true,
    groupMode: true,
    shc: [107, 108, 109],
    pendingDgCheck: true,
    warehouseAgentCheck: {
      completed: {
        signature: "Sarah Williams",
      },
      reject: {
        rejectionCategoryId: 0,
        detailedReason: "",
      },
      date: new Date("2024-06-05T13:00:00Z"),
    }
  },
  {
    id: 6,
    statusId: 1,
    orderId: 5006,
    status: "In Progress",
    order: {
      driverId: 106,
      warehouseAgentId: 6,
      priorityId: 2,
      priority: "High",
      driver: {
        fullName: "David White",
        registrationDate: "2024-06-06",
        licensePhoto: "david_white_license.jpg"
      },
      warehouseAgent: {
        fullName: "Karen Taylor",
      },
    },
    code: "002-8765-4326",
    totalNumberOfPieces: 25,
    totalWeight: 3200.5,
    cubicMeters: 8.5,
    route: {
      orgId: 3,
      destId: 2,
      org: "LAX",
      dest: "JFK"
    },
    flightNumber: "SW987",
    departureDate: new Date("2024-06-06T06:00:00Z"),
    natureOfGoods: "Automotive Parts",
    isBUP: false,
    isActiveContainer: false,
    groupMode: false,
    shc: [110],
    pendingDgCheck: false,
    warehouseAgentCheck: {
      completed: {
        signature: "Robert Brown",
      },
      reject: {
        rejectionCategoryId: 0,
        detailedReason: "",
      },
      date: new Date("2024-06-06T08:00:00Z"),
    }
  }
]

export default defineEventHandler(async () => {
  return awbs
})
