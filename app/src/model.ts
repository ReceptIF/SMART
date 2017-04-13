
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
    type: ServiceType;
  }

  interface ServiceType {
    id: number;
    name: string;
    icon: string;
  }
