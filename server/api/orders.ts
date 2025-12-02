export default defineEventHandler(async (event) => {
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
        totalAwbs: 5,
        dest: ["MIA", "LAX", "JFK"]
      },
      driver: {
        fullName: "John Smith",
        registrationDate: new Date("2024-01-15")
      },
      driverCheckIn: new Date("2025-01-20T08:30:00"),
      driverCheckOut: new Date("2025-01-20T16:45:00"),
      completed: false,
      completionDate: new Date("2025-01-20T17:00:00"),
      proofOfAcceptance: "POA-2025-001.pdf",
      createdAt: new Date("2025-01-20T07:00:00")
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
      driver: {
        fullName: "Emily Chen",
        registrationDate: new Date("2024-02-28")
      },
      driverCheckIn: new Date("2025-01-20T10:45:00"),
      driverCheckOut: null,
      completed: false,
      completionDate: null,
      proofOfAcceptance: null,
      createdAt: new Date("2025-01-20T09:30:00")
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
      driver: {
        fullName: "Michael Brown",
        registrationDate: new Date("2023-09-05")
      },
      driverCheckIn: new Date("2025-01-18T08:00:00"),
      driverCheckOut: new Date("2025-01-18T14:20:00"),
      completed: true,
      completionDate: new Date("2025-01-18T14:30:00"),
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