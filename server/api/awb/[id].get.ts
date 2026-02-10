const awbs = [
  {
    id: 1,
    driverId: 101,
    statusId: 2,
    orderId: 5001,
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
    activeContainer: {
      containerTypeId: 2,
      temperature: 5.5,
      batteryPercentage: 80,
    },
    groupMode: true,
    acceptanceDetails: {
      numberUld: "ULD123",
      contourId: 4,
      numberOfPieces: 10,
      weight: 1200.5,
      perPiece: false,
      pieces: [
        {
          length: 120,
          width: 80,
          height: 60,
          isCargoDamaged: false,
          damageDescription: "",
        }
      ],
      packagingTypeId: 2,
      warehouseLocationId: 7,
      shipmentEvidencePhotos: ["photo1.jpg", "photo2.jpg"],
      additionalNotes: "Handle with care",
      ticket: "TCKT-001",
    },
    groups: [
      {
        id: 201,
        statusId: 2,
        numberUld: "ULD124",
        contourId: 5,
        numberOfPieces: 5,
        weight: 600.25,
        perPiece: false,
        pieces: [
          {
            length: 120,
            width: 80,
            height: 60,
            isCargoDamaged: false,
            damageDescription: "",
          }
        ],
        packagingTypeId: 3,
        warehouseLocationId: 8,
        shipmentEvidencePhotos: [],
        additionalNotes: "No issues",
        ticket: "TCKT-002",
        status: "completed",
      }
    ],
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
    orderId: 5002,
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
    activeContainer: {
      containerTypeId: 0,
      temperature: 0,
      batteryPercentage: 0,
    },
    groupMode: false,
    acceptanceDetails: {
      numberUld: "ULD125",
      contourId: 3,
      numberOfPieces: 15,
      weight: 1850.75,
      perPiece: true,
      pieces: [
        {
          length: 100,
          width: 70,
          height: 50,
          isCargoDamaged: false,
          damageDescription: "",
        }
      ],
      packagingTypeId: 1,
      warehouseLocationId: 5,
      shipmentEvidencePhotos: ["photo3.jpg"],
      additionalNotes: "",
      ticket: "TCKT-003",
    },
    groups: [],
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
    orderId: 5003,
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
    activeContainer: {
      containerTypeId: 1,
      temperature: 2.0,
      batteryPercentage: 95,
    },
    groupMode: true,
    acceptanceDetails: {
      numberUld: "ULD126",
      contourId: 2,
      numberOfPieces: 8,
      weight: 950.3,
      perPiece: false,
      pieces: [
        {
          length: 110,
          width: 75,
          height: 55,
          isCargoDamaged: false,
          damageDescription: "",
        }
      ],
      packagingTypeId: 3,
      warehouseLocationId: 6,
      shipmentEvidencePhotos: ["photo4.jpg", "photo5.jpg", "photo6.jpg"],
      additionalNotes: "Temperature sensitive",
      ticket: "TCKT-004",
    },
    groups: [
      {
        id: 202,
        statusId: 3,
        numberUld: "ULD127",
        contourId: 2,
        numberOfPieces: 4,
        weight: 475.15,
        perPiece: false,
        pieces: [
          {
            length: 110,
            width: 75,
            height: 55,
            isCargoDamaged: false,
            damageDescription: "",
          }
        ],
        packagingTypeId: 3,
        warehouseLocationId: 6,
        shipmentEvidencePhotos: ["photo7.jpg"],
        additionalNotes: "",
        ticket: "TCKT-005",
        status: "in-progress",
      }
    ],
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
    orderId: 5004,
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
    activeContainer: {
      containerTypeId: 0,
      temperature: 0,
      batteryPercentage: 0,
    },
    groupMode: false,
    acceptanceDetails: {
      numberUld: "ULD128",
      contourId: 5,
      numberOfPieces: 20,
      weight: 2500.0,
      perPiece: true,
      pieces: [
        {
          length: 150,
          width: 100,
          height: 80,
          isCargoDamaged: true,
          damageDescription: "Minor scratches on surface",
        }
      ],
      packagingTypeId: 4,
      warehouseLocationId: 9,
      shipmentEvidencePhotos: ["photo8.jpg", "photo9.jpg"],
      additionalNotes: "Heavy cargo",
      ticket: "TCKT-006",
    },
    groups: [],
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
    orderId: 5005,
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
    activeContainer: {
      containerTypeId: 3,
      temperature: -18.0,
      batteryPercentage: 70,
    },
    groupMode: true,
    acceptanceDetails: {
      numberUld: "ULD129",
      contourId: 3,
      numberOfPieces: 12,
      weight: 1400.8,
      perPiece: false,
      pieces: [
        {
          length: 130,
          width: 85,
          height: 65,
          isCargoDamaged: false,
          damageDescription: "",
        }
      ],
      packagingTypeId: 5,
      warehouseLocationId: 10,
      shipmentEvidencePhotos: ["photo10.jpg"],
      additionalNotes: "Frozen goods - maintain cold chain",
      ticket: "TCKT-007",
    },
    groups: [
      {
        id: 203,
        statusId: 2,
        numberUld: "ULD130",
        contourId: 3,
        numberOfPieces: 6,
        weight: 700.4,
        perPiece: false,
        pieces: [
          {
            length: 130,
            width: 85,
            height: 65,
            isCargoDamaged: false,
            damageDescription: "",
          }
        ],
        packagingTypeId: 5,
        warehouseLocationId: 10,
        shipmentEvidencePhotos: [],
        additionalNotes: "Second batch",
        ticket: "TCKT-008",
        status: "pending",
      }
    ],
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
    orderId: 5006,
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
    activeContainer: {
      containerTypeId: 0,
      temperature: 0,
      batteryPercentage: 0,
    },
    groupMode: false,
    acceptanceDetails: {
      numberUld: "ULD131",
      contourId: 6,
      numberOfPieces: 25,
      weight: 3200.5,
      perPiece: true,
      pieces: [
        {
          length: 140,
          width: 90,
          height: 70,
          isCargoDamaged: false,
          damageDescription: "",
        }
      ],
      packagingTypeId: 2,
      warehouseLocationId: 11,
      shipmentEvidencePhotos: ["photo11.jpg", "photo12.jpg", "photo13.jpg"],
      additionalNotes: "Fragile items included",
      ticket: "TCKT-009",
    },
    groups: [],
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
  const id = event.context.params?.id

  if (!id) return awbs

  const awb = awbs.find(a => a.id === Number(id))

  if (!awb) {
    throw createError({
      statusCode: 404,
      statusMessage: "AWB not found",
    })
  }

  return awb
})