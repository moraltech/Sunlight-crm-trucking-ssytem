import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaModule } from "./prisma/prisma.module";
import { AuthModule } from "./modules/auth.module";
import { CrmModule } from "./modules/crm.module";
import { DispatchModule } from "./modules/dispatch.module";
import { FleetModule } from "./modules/fleet.module";
import { HealthModule } from "./modules/health.module";
import { HrModule } from "./modules/hr.module";
import { ReportsModule } from "./modules/reports.module";
import { TenantsModule } from "./modules/tenants.module";
import { TrackingModule } from "./modules/tracking.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    HealthModule,
    AuthModule,
    TenantsModule,
    CrmModule,
    DispatchModule,
    FleetModule,
    HrModule,
    TrackingModule,
    ReportsModule,
  ],
})
export class AppModule {}
