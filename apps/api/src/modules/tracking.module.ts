import { Controller, Get, Module } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Injectable } from "@nestjs/common";

@Injectable()
class TrackingService {
  listLiveVehicles() {
    return {
      data: [
        {
          vehicleId: "veh-101",
          driverId: "driver-001",
          latitude: 32.7767,
          longitude: -96.797,
          speedMph: 55,
          lastUpdated: new Date().toISOString(),
        },
      ],
    };
  }

  listAlerts() {
    return {
      data: [
        {
          id: "alert-007",
          type: "GEOFENCE_EXIT",
          vehicleId: "veh-101",
          message: "Vehicle left approved zone",
          createdAt: new Date().toISOString(),
        },
      ],
    };
  }
}

@ApiTags("tracking")
@Controller("tracking")
class TrackingController {
  constructor(private readonly trackingService: TrackingService) {}

  @Get("vehicles")
  vehicles() {
    return this.trackingService.listLiveVehicles();
  }

  @Get("alerts")
  alerts() {
    return this.trackingService.listAlerts();
  }
}

@Module({
  controllers: [TrackingController],
  providers: [TrackingService],
})
export class TrackingModule {}
