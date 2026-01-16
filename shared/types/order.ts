export interface Order {
  id: number
  statusId: number,
  priorityId: number,
  driverId: number,
  warehouseAgentId: number,
  assignedDoorId: number,
  code: string,
  status: string,
  priority: string,
  assignedDoor: string,
  active: boolean,
  truckCompany: string,
  awbsSummary: {
    totalWeight: number,
    totalAwbs: number,
    dest: string[]
  },
  driver: {
    fullName: string,
    registrationDate: Date
  },
  driverCheckIn: Date | null,
  driverCheckOut: Date | null,
  completed: boolean,
  completionDate: Date | null,
  proofOfAcceptance: string,
  createdAt: Date
}