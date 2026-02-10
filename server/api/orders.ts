export default defineEventHandler(async () => {
  return [
    {
      id: 1,
      statusId: 1,
      priorityId: 2,
      driverId: 101,
      warehouseAgentId: 50,
      assignedDoorId: 3,
      code: "ORD-2025-001",
      status: "In Progress",
      priority: "High",
      assignedDoor: "Door A-3",
      active: true,
      truckCompany: "Transport Solutions Inc.",
      awbsSummary: {
        totalWeight: 1250.75,
        totalAwbs: 1,
        dest: ["MIA", "LAX", "JFK"]
      },
      awbs: [
        {
          id: 1,
          statusId: 5,
          code: "002-8765-4321",
          status: "Pending",
          natureOfGoods: "Electronics",
          totalNumberOfPieces: 15,
          totalWeight: 320.5,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2026-02-08T16:45:00",
          }
        }    
      ],
      driver: {
        fullName: "John Smith",
        registrationDate: new Date("2024-01-15")
      },
      driverCheckIn: new Date("2025-01-20T08:30:00"),
      driverCheckOut: new Date("2025-01-20T16:45:00"),
      completed: false,
      completionDate: new Date("2025-01-20T17:00:00"),
      proofOfAcceptance: "POA-2025-001.pdf",
      createdAt: new Date("2026-02-09T18:00:00")
    },
    {
      id: 2,
      statusId: 1,
      priorityId: 2,
      driverId: 104,
      warehouseAgentId: 53,
      assignedDoorId: 7,
      code: "ORD-2025-004",
      status: "Pending",
      priority: "High",
      assignedDoor: "Door A-7",
      active: false,
      truckCompany: "Swift Cargo Services",
      awbsSummary: {
        totalWeight: 1575.90,
        totalAwbs: 6,
        dest: ["BOS", "PHL", "IAD"]
      },
      awbs: [
        {
          id: 2,
          statusId: 5,
          code: "002-8765-4322",
          status: "Pending",
          natureOfGoods: "Textiles",
          totalNumberOfPieces: 25,
          totalWeight: 450.30,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-20T10:45:00",
          }
        },
        {
          id: 3,
          statusId: 5,
          code: "002-8765-4323",
          status: "Pending",
          natureOfGoods: "Machinery Parts",
          totalNumberOfPieces: 10,
          totalWeight: 280.20,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-20T11:00:00",
          }
        },
        {
          id: 4,
          statusId: 5,
          code: "002-8765-4324",
          status: "Pending",
          natureOfGoods: "Documents",
          totalNumberOfPieces: 5,
          totalWeight: 15.50,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-20T11:15:00",
          }
        },
        {
          id: 5,
          statusId: 5,
          code: "002-8765-4325",
          status: "Pending",
          natureOfGoods: "Auto Parts",
          totalNumberOfPieces: 18,
          totalWeight: 365.40,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-20T11:30:00",
          }
        },
        {
          id: 6,
          statusId: 5,
          code: "002-8765-4326",
          status: "Pending",
          natureOfGoods: "Pharmaceuticals",
          totalNumberOfPieces: 12,
          totalWeight: 220.80,
          pendingDgCheck: true,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-20T11:45:00",
          }
        },
        {
          id: 7,
          statusId: 5,
          code: "002-8765-4327",
          status: "Pending",
          natureOfGoods: "Consumer Goods",
          totalNumberOfPieces: 30,
          totalWeight: 243.70,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-20T12:00:00",
          }
        }
      ],
      driver: {
        fullName: "Emily Chen",
        registrationDate: new Date("2024-02-28")
      },
      driverCheckIn: new Date("2025-01-20T10:45:00"),
      driverCheckOut: null,
      completed: false,
      completionDate: null,
      proofOfAcceptance: null,
      createdAt: new Date("2026-02-09T10:00:00")
    },
    {
      id: 3,
      statusId: 2,
      priorityId: 1,
      driverId: 105,
      warehouseAgentId: 54,
      assignedDoorId: 2,
      code: "ORD-2025-005",
      status: "Pending",
      priority: "Medium",
      assignedDoor: "Door B-2",
      active: false,
      truckCompany: "National Haulers Inc.",
      awbsSummary: {
        totalWeight: 750.40,
        totalAwbs: 4,
        dest: ["MSP", "DTW"]
      },
      awbs: [
        {
          id: 8,
          statusId: 5,
          code: "002-8765-4328",
          status: "Completed",
          natureOfGoods: "Furniture",
          totalNumberOfPieces: 8,
          totalWeight: 195.60,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: 'Agent-54-Signature',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-18T09:00:00",
          }
        },
        {
          id: 9,
          statusId: 5,
          code: "002-8765-4329",
          status: "Completed",
          natureOfGoods: "Books",
          totalNumberOfPieces: 40,
          totalWeight: 185.20,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: 'Agent-54-Signature',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-18T09:30:00",
          }
        },
        {
          id: 10,
          statusId: 5,
          code: "002-8765-4330",
          status: "Completed",
          natureOfGoods: "Office Supplies",
          totalNumberOfPieces: 22,
          totalWeight: 158.90,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: 'Agent-54-Signature',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-18T10:00:00",
          }
        },
        {
          id: 11,
          statusId: 5,
          code: "002-8765-4331",
          status: "Completed",
          natureOfGoods: "Sporting Goods",
          totalNumberOfPieces: 15,
          totalWeight: 210.70,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: 'Agent-54-Signature',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-18T10:30:00",
          }
        }
      ],
      driver: {
        fullName: "Michael Brown",
        registrationDate: new Date("2023-09-05")
      },
      driverCheckIn: new Date("2025-01-18T08:00:00"),
      driverCheckOut: new Date("2025-01-18T14:20:00"),
      completed: true,
      completionDate: new Date("2025-01-18T12:30:00"),
      proofOfAcceptance: "POA-2025-005.pdf",
      createdAt: new Date("2025-01-18T07:15:00")
    },
    {
      id: 4,
      statusId: 2,
      priorityId: 1,
      driverId: 102,
      warehouseAgentId: 51,
      assignedDoorId: 5,
      code: "ORD-2025-002",
      status: "Pending",
      priority: "Medium",
      assignedDoor: "Door B-5",
      active: false,
      truckCompany: "Global Freight Co.",
      awbsSummary: {
        totalWeight: 890.50,
        totalAwbs: 3,
        dest: ["ORD", "DFW"]
      },
      awbs: [
        {
          id: 12,
          statusId: 5,
          code: "002-8765-4332",
          status: "Completed",
          natureOfGoods: "Chemicals",
          totalNumberOfPieces: 6,
          totalWeight: 305.80,
          pendingDgCheck: true,
          warehouseAgentCheck: {
            completed: {
              signature: 'Agent-51-Signature',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-19T10:00:00",
          }
        },
        {
          id: 13,
          statusId: 5,
          code: "002-8765-4333",
          status: "Completed",
          natureOfGoods: "Plastics",
          totalNumberOfPieces: 20,
          totalWeight: 290.40,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: 'Agent-51-Signature',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-19T10:30:00",
          }
        },
        {
          id: 14,
          statusId: 5,
          code: "002-8765-4334",
          status: "Completed",
          natureOfGoods: "Metal Components",
          totalNumberOfPieces: 12,
          totalWeight: 294.30,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: 'Agent-51-Signature',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-19T11:00:00",
          }
        }
      ],
      driver: {
        fullName: "Maria Garcia",
        registrationDate: new Date("2023-11-20")
      },
      driverCheckIn: new Date("2025-01-19T09:15:00"),
      driverCheckOut: new Date("2025-01-19T15:30:00"),
      completed: true,
      completionDate: new Date("2025-01-19T15:45:00"),
      proofOfAcceptance: "POA-2025-002.pdf",
      createdAt: new Date("2025-01-19T08:00:00")
    },
    {
      id: 5,
      statusId: 3,
      priorityId: 3,
      driverId: 103,
      warehouseAgentId: 52,
      assignedDoorId: 1,
      code: "ORD-2025-003",
      status: "Pending",
      priority: "Low",
      assignedDoor: "Door C-1",
      active: false,
      truckCompany: "Express Logistics LLC",
      awbsSummary: {
        totalWeight: 2100.25,
        totalAwbs: 8,
        dest: ["SEA", "PDX", "SFO", "LAX"]
      },
      awbs: [
        {
          id: 15,
          statusId: 5,
          code: "002-8765-4335",
          status: "Pending",
          natureOfGoods: "Apparel",
          totalNumberOfPieces: 50,
          totalWeight: 285.40,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-21T07:30:00",
          }
        },
        {
          id: 16,
          statusId: 5,
          code: "002-8765-4336",
          status: "Pending",
          natureOfGoods: "Toys",
          totalNumberOfPieces: 35,
          totalWeight: 195.60,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-21T08:00:00",
          }
        },
        {
          id: 17,
          statusId: 5,
          code: "002-8765-4337",
          status: "Pending",
          natureOfGoods: "Food Products",
          totalNumberOfPieces: 28,
          totalWeight: 320.75,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-21T08:30:00",
          }
        },
        {
          id: 18,
          statusId: 5,
          code: "002-8765-4338",
          status: "Pending",
          natureOfGoods: "Medical Equipment",
          totalNumberOfPieces: 14,
          totalWeight: 410.50,
          pendingDgCheck: true,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-21T09:00:00",
          }
        },
        {
          id: 19,
          statusId: 5,
          code: "002-8765-4339",
          status: "Pending",
          natureOfGoods: "Computer Parts",
          totalNumberOfPieces: 22,
          totalWeight: 265.30,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-21T09:30:00",
          }
        },
        {
          id: 20,
          statusId: 5,
          code: "002-8765-4340",
          status: "Pending",
          natureOfGoods: "Building Materials",
          totalNumberOfPieces: 10,
          totalWeight: 395.80,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-21T10:00:00",
          }
        },
        {
          id: 21,
          statusId: 5,
          code: "002-8765-4341",
          status: "Pending",
          natureOfGoods: "Artwork",
          totalNumberOfPieces: 5,
          totalWeight: 125.90,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-21T10:30:00",
          }
        },
        {
          id: 22,
          statusId: 5,
          code: "002-8765-4342",
          status: "Pending",
          natureOfGoods: "Laboratory Samples",
          totalNumberOfPieces: 8,
          totalWeight: 101.00,
          pendingDgCheck: true,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-21T11:00:00",
          }
        }
      ],
      driver: {
        fullName: "Robert Johnson",
        registrationDate: new Date("2024-03-10")
      },
      driverCheckIn: new Date("2025-01-21T07:00:00"),
      driverCheckOut: null,
      completed: false,
      completionDate: null,
      proofOfAcceptance: null,
      createdAt: new Date("2025-01-21T06:30:00")
    },
    {
      id: 6,
      statusId: 3,
      priorityId: 3,
      driverId: 106,
      warehouseAgentId: 55,
      assignedDoorId: 4,
      code: "ORD-2025-006",
      status: "Pending",
      priority: "Low",
      assignedDoor: "Door C-4",
      active: false,
      truckCompany: "Reliable Transport Group",
      awbsSummary: {
        totalWeight: 1820.60,
        totalAwbs: 7,
        dest: ["HOU", "DFW", "AUS"]
      },
      awbs: [
        {
          id: 23,
          statusId: 5,
          code: "002-8765-4343",
          status: "Pending",
          natureOfGoods: "Agricultural Products",
          totalNumberOfPieces: 32,
          totalWeight: 340.20,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-22T07:00:00",
          }
        },
        {
          id: 24,
          statusId: 5,
          code: "002-8765-4344",
          status: "Pending",
          natureOfGoods: "Cosmetics",
          totalNumberOfPieces: 45,
          totalWeight: 215.80,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-22T07:30:00",
          }
        },
        {
          id: 25,
          statusId: 5,
          code: "002-8765-4345",
          status: "Pending",
          natureOfGoods: "Household Goods",
          totalNumberOfPieces: 26,
          totalWeight: 278.90,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-22T08:00:00",
          }
        },
        {
          id: 26,
          statusId: 5,
          code: "002-8765-4346",
          status: "Pending",
          natureOfGoods: "Industrial Equipment",
          totalNumberOfPieces: 8,
          totalWeight: 425.30,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-22T08:30:00",
          }
        },
        {
          id: 27,
          statusId: 5,
          code: "002-8765-4347",
          status: "Pending",
          natureOfGoods: "Jewelry",
          totalNumberOfPieces: 3,
          totalWeight: 45.60,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-22T09:00:00",
          }
        },
        {
          id: 28,
          statusId: 5,
          code: "002-8765-4348",
          status: "Pending",
          natureOfGoods: "Musical Instruments",
          totalNumberOfPieces: 12,
          totalWeight: 268.40,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-22T09:30:00",
          }
        },
        {
          id: 29,
          statusId: 5,
          code: "002-8765-4349",
          status: "Pending",
          natureOfGoods: "Pet Supplies",
          totalNumberOfPieces: 38,
          totalWeight: 246.40,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-22T10:00:00",
          }
        }
      ],
      driver: {
        fullName: "Sarah Wilson",
        registrationDate: new Date("2024-04-12")
      },
      driverCheckIn: new Date("2025-01-22T06:30:00"),
      driverCheckOut: null,
      completed: false,
      completionDate: null,
      proofOfAcceptance: null,
      createdAt: new Date("2025-01-22T06:00:00")
    },
    {
      id: 7,
      statusId: 1,
      priorityId: 2,
      driverId: 107,
      warehouseAgentId: null,
      assignedDoorId: 6,
      code: "ORD-2025-007",
      status: "In Progress",
      priority: "High",
      assignedDoor: "Door A-6",
      active: true,
      truckCompany: "Prime Movers Ltd.",
      awbsSummary: {
        totalWeight: 1425.30,
        totalAwbs: 5,
        dest: ["ATL", "CLT", "RDU"]
      },
      awbs: [
        {
          id: 30,
          statusId: 5,
          code: "002-8765-4350",
          status: "In Progress",
          natureOfGoods: "Aviation Parts",
          totalNumberOfPieces: 16,
          totalWeight: 385.70,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-23T08:00:00",
          }
        },
        {
          id: 31,
          statusId: 5,
          code: "002-8765-4351",
          status: "In Progress",
          natureOfGoods: "Telecommunications Equipment",
          totalNumberOfPieces: 11,
          totalWeight: 298.50,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-23T08:30:00",
          }
        },
        {
          id: 32,
          statusId: 5,
          code: "002-8765-4352",
          status: "In Progress",
          natureOfGoods: "Batteries",
          totalNumberOfPieces: 20,
          totalWeight: 275.40,
          pendingDgCheck: true,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-23T09:00:00",
          }
        },
        {
          id: 33,
          statusId: 5,
          code: "002-8765-4353",
          status: "In Progress",
          natureOfGoods: "Printed Materials",
          totalNumberOfPieces: 55,
          totalWeight: 195.80,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-23T09:30:00",
          }
        },
        {
          id: 34,
          statusId: 5,
          code: "002-8765-4354",
          status: "In Progress",
          natureOfGoods: "Renewable Energy Components",
          totalNumberOfPieces: 9,
          totalWeight: 269.90,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-23T10:00:00",
          }
        }
      ],
      driver: {
        fullName: "David Martinez",
        registrationDate: new Date("2023-12-08")
      },
      driverCheckIn: new Date("2025-01-23T07:45:00"),
      driverCheckOut: null,
      completed: false,
      completionDate: null,
      proofOfAcceptance: null,
      createdAt: new Date("2025-01-23T07:00:00")
    },
    {
      id: 8,
      statusId: 2,
      priorityId: 1,
      driverId: 108,
      warehouseAgentId: null,
      assignedDoorId: 8,
      code: "ORD-2025-008",
      status: "Pending",
      priority: "Medium",
      assignedDoor: "Door B-8",
      active: false,
      truckCompany: "Metro Freight Solutions",
      awbsSummary: {
        totalWeight: 980.85,
        totalAwbs: 4,
        dest: ["DEN", "SLC"]
      },
      awbs: [
        {
          id: 35,
          statusId: 5,
          code: "002-8765-4355",
          status: "Completed",
          natureOfGoods: "Leather Goods",
          totalNumberOfPieces: 24,
          totalWeight: 245.60,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: 'Agent-Signature',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-23T10:00:00",
          }
        },
        {
          id: 36,
          statusId: 5,
          code: "002-8765-4356",
          status: "Completed",
          natureOfGoods: "Glassware",
          totalNumberOfPieces: 18,
          totalWeight: 278.45,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: 'Agent-Signature',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-23T10:30:00",
          }
        },
        {
          id: 37,
          statusId: 5,
          code: "002-8765-4357",
          status: "Completed",
          natureOfGoods: "Ceramics",
          totalNumberOfPieces: 14,
          totalWeight: 198.20,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: 'Agent-Signature',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-23T11:00:00",
          }
        },
        {
          id: 38,
          statusId: 5,
          code: "002-8765-4358",
          status: "Completed",
          natureOfGoods: "Gardening Tools",
          totalNumberOfPieces: 21,
          totalWeight: 258.60,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: 'Agent-Signature',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-23T11:30:00",
          }
        }
      ],
      driver: {
        fullName: "Jessica Taylor",
        registrationDate: new Date("2024-05-22")
      },
      driverCheckIn: new Date("2025-01-23T09:00:00"),
      driverCheckOut: new Date("2025-01-23T14:15:00"),
      completed: true,
      completionDate: new Date("2025-01-23T14:30:00"),
      proofOfAcceptance: "POA-2025-008.pdf",
      createdAt: new Date("2025-01-23T08:15:00")
    },
    {
      id: 9,
      statusId: 3,
      priorityId: 3,
      driverId: 109,
      warehouseAgentId: null,
      assignedDoorId: 9,
      code: "ORD-2025-009",
      status: "Pending",
      priority: "Low",
      assignedDoor: "Door C-9",
      active: false,
      truckCompany: "Coastal Carriers Inc.",
      awbsSummary: {
        totalWeight: 1650.45,
        totalAwbs: 6,
        dest: ["MIA", "TPA", "JAX"]
      },
      awbs: [
        {
          id: 39,
          statusId: 5,
          code: "002-8765-4359",
          status: "Pending",
          natureOfGoods: "Marine Equipment",
          totalNumberOfPieces: 13,
          totalWeight: 385.90,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-24T09:00:00",
          }
        },
        {
          id: 40,
          statusId: 5,
          code: "002-8765-4360",
          status: "Pending",
          natureOfGoods: "Fishing Gear",
          totalNumberOfPieces: 27,
          totalWeight: 245.70,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-24T09:30:00",
          }
        },
        {
          id: 41,
          statusId: 5,
          code: "002-8765-4361",
          status: "Pending",
          natureOfGoods: "Beach Accessories",
          totalNumberOfPieces: 42,
          totalWeight: 198.35,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-24T10:00:00",
          }
        },
        {
          id: 42,
          statusId: 5,
          code: "002-8765-4362",
          status: "Pending",
          natureOfGoods: "Diving Equipment",
          totalNumberOfPieces: 15,
          totalWeight: 315.80,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-24T10:30:00",
          }
        },
        {
          id: 43,
          statusId: 5,
          code: "002-8765-4363",
          status: "Pending",
          natureOfGoods: "Water Sports Gear",
          totalNumberOfPieces: 19,
          totalWeight: 268.50,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-24T11:00:00",
          }
        },
        {
          id: 44,
          statusId: 5,
          code: "002-8765-4364",
          status: "Pending",
          natureOfGoods: "Nautical Instruments",
          totalNumberOfPieces: 8,
          totalWeight: 236.20,
          pendingDgCheck: false,
          warehouseAgentCheck: {
            completed: {
              signature: '',
            },
            reject: {
              rejectionCategoryId: null,
              detailedReason: '',
            },
            date: "2025-01-24T11:30:00",
          }
        }
      ],
      driver: {
        fullName: "Christopher Lee",
        registrationDate: new Date("2024-06-14")
      },
      driverCheckIn: new Date("2025-01-24T08:30:00"),
      driverCheckOut: null,
      completed: false,
      completionDate: null,
      proofOfAcceptance: null,
      createdAt: new Date("2025-01-24T07:45:00")
    }
  ]
})