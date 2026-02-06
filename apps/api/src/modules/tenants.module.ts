import { Controller, Get, Module } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Injectable } from "@nestjs/common";

@Injectable()
class TenantsService {
  listTenants() {
    return {
      data: [
        {
          id: "tenant-demo",
          name: "Sunlight Logistics",
          status: "ACTIVE",
          createdAt: new Date().toISOString(),
        },
      ],
    };
  }
}

@ApiTags("tenants")
@Controller("tenants")
class TenantsController {
  constructor(private readonly tenantsService: TenantsService) {}

  @Get()
  list() {
    return this.tenantsService.listTenants();
  }
}

@Module({
  controllers: [TenantsController],
  providers: [TenantsService],
})
export class TenantsModule {}
