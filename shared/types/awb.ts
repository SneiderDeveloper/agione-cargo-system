import type { Driver, WarehouseAgent } from './order'

export interface AwbDetails {
  statusId: number,
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
  additionalNotes: string,
  ticket: string,
  status: string,
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

export interface WarehouseAgentCheck {
  completed: {
    signature: string,
  },
  reject: {
    rejectionCategoryId: number,
    detailedReason: string,
  }
  date: string,
}

export interface Order {
  driverId: number,
  warehouseAgentId: number,
  priorityId: number,
  priority: 'Low' | 'Medium' | 'High',
  driver: Driver,
  warehouseAgent: WarehouseAgent,
}

export interface Awb {
  id: number,
  driverId: number,
  statusId: number,
  orderId: number,
  status: 'Pending' | 'In progress' | 'Accepted' | 'Rejected',
  order: Order,
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
  driver: Driver,
  shc: number[],
  pendingDgCheck: boolean, // ?
  warehouseAgentCheck: WarehouseAgentCheck
}