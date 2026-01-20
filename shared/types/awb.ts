export interface Awb {
  driverId: number,
  statusId: number,
  orderId: number,
  status: string,
  code: string, // 002-8765-4321
  totalNumberOfPieces: number,
  totalWeight: number,
  cubicMeters: number,
  route: {
    orgId: number,
    destId: number,
    org: string,
    dest: string
  },
  flightNumber: string,
  departureDate: string,
  natureOfGoods: string,
  isBUP: boolean,
  activeContainer?: {
    containerTypeId: number,
    temperature: number,
    batteryPercentage: number,
  },
  groupMode: boolean, // ?
  acceptanceDetails: { // ?
    numberUld: string,
    contourId: number,
    numberOfPieces: number,
    weight: number,
    cargoDimensions: {
      length: number,
      width: number,
      height: number,
      perPiece: boolean,
      dimensions: [
        {
          length: number,
          width: number,
          height: number,
        }
      ]
    },
    packagingTypeId: number,
    warehouseLocationId: number,
    shipmentEvidencePhotos: string[],
    isCargoDamaged: boolean,
    damageDescription?: string,
    additionalNotes: string,
    ticket: string,
    // status: string,
  },
  groups: [
    {
      id: number,
      statusId: number,
      numberUld: string,
      contourId: number,
      numberOfPieces: number,
      weight: number,
      cargoDimensions: {
        length: number,
        width: number,
        height: number,
        perPiece: boolean,
        dimensions: [
          {
            length: number,
            width: number,
            height: number,
          }
        ]
      },
      packagingTypeId: number,
      warehouseLocationId: number,
      shipmentEvidencePhotos: string[],
      isCargoDamaged: boolean,
      damageDescription?: string,
      additionalNotes: string,
      ticket: string,
      status: string, // completed - loaded
    }
  ],
  shc: number[],
  pendingDgCheck: boolean, // ?
  warehouseAgentCheck: {
    completed: {
      signature: string,
    },
    reject: {
      rejectionCategoryId: number,
      detailedReason: string,
    }
    date: string,
  }
}