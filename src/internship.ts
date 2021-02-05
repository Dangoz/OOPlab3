import faker from "faker";

export class Internship {

  businessName: string;
  location: {
    latitude: number,
    longtitude: number;
  };

  constructor() {
    this.businessName = faker.company.companyName();

    // location range within Vancouver
    this.location = { 
      latitude: parseFloat(faker.address.latitude(49.146292, 49.346292)),
      longtitude: parseFloat(faker.address.longitude(-123.016226, -123.216226)) 
    };
  }
}