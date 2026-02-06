import { Controller, Get, Module } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Injectable } from "@nestjs/common";

@Injectable()
class HrService {
  listEmployees() {
    return {
      data: [
        {
          id: "emp-010",
          name: "Morgan Wells",
          roleTitle: "Dispatch Manager",
          status: "ACTIVE",
        },
      ],
    };
  }

  listPayrollRuns() {
    return {
      data: [
        {
          id: "pay-2024-11",
          periodStart: "2024-11-01",
          periodEnd: "2024-11-15",
          status: "PROCESSING",
        },
      ],
    };
  }
}

@ApiTags("hr")
@Controller("hr")
class HrController {
  constructor(private readonly hrService: HrService) {}

  @Get("employees")
  employees() {
    return this.hrService.listEmployees();
  }

  @Get("payroll")
  payroll() {
    return this.hrService.listPayrollRuns();
  }
}

@Module({
  controllers: [HrController],
  providers: [HrService],
})
export class HrModule {}
