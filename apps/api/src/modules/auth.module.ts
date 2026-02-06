import { Body, Controller, Module, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { Injectable } from "@nestjs/common";

type LoginRequest = {
  email: string;
  password: string;
  tenantId?: string;
};

@Injectable()
class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  login(payload: LoginRequest) {
    const tenantId = payload.tenantId ?? "tenant-demo";
    const token = this.jwtService.sign({
      sub: payload.email,
      tenantId,
      role: "dispatcher",
    });

    return {
      accessToken: token,
      tokenType: "Bearer",
      expiresIn: "12h",
    };
  }
}

@ApiTags("auth")
@Controller("auth")
class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  login(@Body() body: LoginRequest) {
    return this.authService.login(body);
  }
}

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || "change-me",
      signOptions: { expiresIn: "12h" },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
