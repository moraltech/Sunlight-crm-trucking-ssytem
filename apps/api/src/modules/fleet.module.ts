import { Controller, Get, Module } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Injectable } from "@nestjs/common";

@Injectable()
class FleetService {
  listVehicles() {
    return {
      data: [
        {
          id: "veh-101",
          plateNumber: "TX-3941",
          status: "ACTIVE",
          make: "Freightliner",
          model: "Cascadia",
          year: 2022,
        },
      ],
    };
  }

  listDrivers() {
    return {
      data: [
        {
          id: "driver-001",
          name: "Avery Johnson",
          licenseNumber: "TX-DR-7782",
          status: "ACTIVE",
        },
      ],
    };
  }
}

@ApiTags("fleet")
@Controller("fleet")
class FleetController {
  constructor(private readonly fleetService: FleetService) {}

  @Get("vehicles")
  vehicles() {
    return this.fleetService.listVehicles();
  }

  @Get("drivers")
  drivers() {
    return this.fleetService.listDrivers();
  }
}

@Module({
  controllers: [FleetController],
  providers: [FleetService],
})
export class FleetModule {}
