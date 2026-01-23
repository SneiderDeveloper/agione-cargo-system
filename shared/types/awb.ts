export interface AwbDetails {
  numberUld: string,
  contourId: number,
  numberOfPieces: number,
  weight: number,
  perPiece: boolean,
  pieces: [
    {
      length: number,
      width: number,
      height: number,
      isCargoDamaged: boolean,
      damageDescription: string,
    }
  ],
  packagingTypeId: number,
  warehouseLocationId: number,
  shipmentEvidencePhotos: string[],
  isCargoDamaged: boolean,
  damageDescription?: string,
  additionalNotes: string,
  ticket: string,
}

export interface Group extends AwbDetails {
  id: number,
  statusId: number,
  status: string,
}

export interface ActiveContainer {
  containerTypeId: number,
  temperature: number,
  batteryPercentage: number,
}

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
  isActiveContainer: boolean,
  activeContainer?: ActiveContainer,
  groupMode: boolean, // ?
  acceptanceDetails: AwbDetails,
  groups: Group[],
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