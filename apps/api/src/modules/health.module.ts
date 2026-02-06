import { Controller, Get, Module } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("health")
@Controller("health")
class HealthController {
  @Get()
  status() {
    return {
      status: "ok",
      timestamp: new Date().toISOString(),
      uptimeSeconds: Math.round(process.uptime()),
    };
  }
}

@Module({
  controllers: [HealthController],
})
export class HealthModule {}
