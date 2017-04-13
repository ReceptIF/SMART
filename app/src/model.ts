
  interface Service {
    id: number;
    price: number;
    title: string;
    description?: string;
    estimatedTime?: number;
    startTime?: string;
    endTime?: string;
    createdAt?: string;
    address: string;
    coordX?: number;
    coordY?: number;
    sale?: boolean;
    announce_type: ServiceType;
    typeId?: number;
  }

  interface ServiceType {
    id: number;
    name: string;
    icon: string;
  }
