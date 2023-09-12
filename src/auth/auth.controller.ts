import { Controller } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  async login() {
    await this._authService.login();
  }
}
