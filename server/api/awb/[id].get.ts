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
  }
]

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: "AWB ID is required",
    })
  }

  const awb = awbs.find(a => a.id === Number(id))

  if (!awb) {
    throw createError({
      statusCode: 404,
      statusMessage: "AWB not found",
    })
  }

  return awb
})