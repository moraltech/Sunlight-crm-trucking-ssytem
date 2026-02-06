import { Controller, Get, Module } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Injectable } from "@nestjs/common";

@Injectable()
class ReportsService {
  getSummary() {
    return {
      revenueYtd: 485000,
      jobsCompleted: 1240,
      onTimeDeliveryRate: 0.94,
      fleetUtilization: 0.82,
    };
  }
}

@ApiTags("reports")
@Controller("reports")
class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get("summary")
  summary() {
    return this.reportsService.getSummary();
  }
}

@Module({
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
