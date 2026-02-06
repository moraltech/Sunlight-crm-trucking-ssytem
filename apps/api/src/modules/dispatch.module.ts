import { Controller, Get, Module } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Injectable } from "@nestjs/common";

@Injectable()
class DispatchService {
  listJobs() {
    return {
      data: [
        {
          id: "job-2001",
          status: "ASSIGNED",
          scheduledAt: new Date().toISOString(),
          origin: "Dallas, TX",
          destination: "Austin, TX",
          driverId: "driver-001",
          vehicleId: "veh-101",
        },
      ],
    };
  }
}

@ApiTags("dispatch")
@Controller("dispatch")
class DispatchController {
  constructor(private readonly dispatchService: DispatchService) {}

  @Get("jobs")
  jobs() {
    return this.dispatchService.listJobs();
  }
}

@Module({
  controllers: [DispatchController],
  providers: [DispatchService],
})
export class DispatchModule {}
