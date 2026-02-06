import { Controller, Get, Module } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Injectable } from "@nestjs/common";

@Injectable()
class CrmService {
  listCustomers() {
    return {
      data: [
        {
          id: "cust-001",
          name: "North Ridge Manufacturing",
          status: "ACTIVE",
          billingEmail: "billing@northridge.example",
          lifecycleValue: 125000,
        },
      ],
    };
  }

  listTickets() {
    return {
      data: [
        {
          id: "ticket-1001",
          subject: "Contract renewal",
          status: "OPEN",
          priority: "MEDIUM",
          customerId: "cust-001",
        },
      ],
    };
  }
}

@ApiTags("crm")
@Controller("crm")
class CrmController {
  constructor(private readonly crmService: CrmService) {}

  @Get("customers")
  customers() {
    return this.crmService.listCustomers();
  }

  @Get("tickets")
  tickets() {
    return this.crmService.listTickets();
  }
}

@Module({
  controllers: [CrmController],
  providers: [CrmService],
})
export class CrmModule {}
