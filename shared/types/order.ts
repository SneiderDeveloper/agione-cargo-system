import type { WarehouseAgentCheck } from './awb'

export interface AwbSummary {
  id: number;
  code: string;
  statusId: number;
  status: 'Pending' | 'In progress' | 'Completed';
  natureOfGoods: string;
  totalNumberOfPieces: number;
  totalWeight: number;
  shc: number[];
  pendingDgCheck: boolean;
  warehouseAgentCheck: WarehouseAgentCheck;
}

export interface Driver {
  fullName: string;
  registrationDate: string;
  licensePhoto: string;
}

export interface Order {
  id: number;
  statusId: number;
  priorityId: number;
  driverId: number;
  warehouseAgentId: number;
  assignedDoorId: number;
  code: string;
  status: 'Pending' | 'In progress' | 'Completed';
  priority: 'Low' | 'Medium' | 'High';
  assignedDoor: string;
  active: boolean;
  truckCompany: string;
  awbsSummary: {
    totalWeight: number;
    totalAwbs: number;
    dest: string[];
  };
  isIacCcsf: boolean;
  iacCcsf: {
    sealPhotos: string[];
    verificationNotes: string;
    verified: boolean;
    report: boolean;
    endDate: Date;
  };
  awbs: AwbSummary[];
  driver: Driver;
  smsId: number;
  driverCheckIn: Date;
  driverCheckOut: Date;
  verifiedDriver: boolean;
  completed: boolean;
  completionDate: string;
  proofOfAcceptance: string;
  createdAt: string;
}
