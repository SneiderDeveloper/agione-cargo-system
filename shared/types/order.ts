export interface Order {
  statusId: number;
  priorityId: number;
  driverId: number;
  warehouseAgentId: number;
  assignedDoorId: number;
  code: string;
  status: string;
  priority: string;
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
  awbs: Array<{
    id: number;
    code: string;
    statusId: number;
    status: 'Pending' | 'In progress' | 'Completed';
    natureOfGoods: string;
    totalNumberOfPieces: number;
    totalWeight: number;
    shc: number[];
    pendingDgCheck: boolean;
  }>;
  driver: {
    fullName: string;
    registrationDate: Date;
    licensePhoto: string;
  };
  smsId: number;
  driverCheckIn: Date;
  driverCheckOut: Date;
  verifiedDriver: boolean;
  completed: boolean;
  completionDate: Date;
  proofOfAcceptance: string;
  createdAt: string;
}
