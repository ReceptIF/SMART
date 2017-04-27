
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
    author: User;
    typeId?: number;
    closed: boolean;
    authorId?: number;
  }

  interface ServiceType {
    id: number;
    name: string;
    icon: string;
	createdAt: string;
	updatedAt?: string;
  }

  interface User {
    id: number;
    email : string;
    firstName : string;
    lastName : string;
    cellphone? : string;
    address? : string;
    ahAmount : number;
    coordX? : number;
    coordY? : number;
    cityId? : number;
  }
