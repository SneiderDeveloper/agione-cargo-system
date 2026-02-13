const awbs = [
  {
    id: 1,
    driverId: 101,
    statusId: 2,
    orderId: 5001,
    status: "Pending",
    order: {
      priorityId: 2,
      priority: "High",
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
    driver: {
      fullName: "John Smith",
      registrationDate: new Date("2024-06-01T12:00:00Z"),
      licensePhoto: "john_smith_license.jpg",
    },
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
    driverId: 102,
    statusId: 1,
    status: "In Progress",
    orderId: 5002,
    order: {
      priorityId: 1,
      priority: "Medium",
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
    driver: {
      fullName: "Jane Doe",
      registrationDate: new Date("2024-06-02T12:00:00Z"),
      licensePhoto: "jane_doe_license.jpg",
    },
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
    driverId: 103,
    statusId: 3,
    status: "Accepted",
    orderId: 5003,
    order: {
      priorityId: 3,
      priority: "Low",
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
    driver: {
      fullName: "Alice Johnson",
      registrationDate: new Date("2024-06-03T12:00:00Z"),
      licensePhoto: "alice_johnson_license.jpg",
    },
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
    driverId: 104,
    statusId: 1,
    status: "Rejected",
    orderId: 5004,
    order: {
      priorityId: 2,
      priority: "High",
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
    driver: {
      fullName: "Bob Brown",
      registrationDate: new Date("2024-06-04T12:00:00Z"),
      licensePhoto: "bob_brown_license.jpg",
    },
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
    driverId: 105,
    statusId: 2,
    status: "Pending",
    orderId: 5005,
    order: {
      priorityId: 1,
      priority: "Medium",
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
    driver: {
      fullName: "Charlie Green",
      registrationDate: new Date("2024-06-05T12:00:00Z"),
      licensePhoto: "charlie_green_license.jpg",
    },
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
    driverId: 106,
    statusId: 1,
    status: "In Progress",
    orderId: 5006,
    order: {
      priorityId: 2,
      priority: "High",
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
    driver: {
      fullName: "David White",
      registrationDate: new Date("2024-06-06T12:00:00Z"),
      licensePhoto: "david_white_license.jpg",
    },
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

export default defineEventHandler(async (event) => {
  return awbs
})
