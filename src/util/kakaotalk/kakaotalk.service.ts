import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { KakaotalkUserResponse } from "./kakaotalk.dtos";

@Injectable()
export class KakaotalkService {
  constructor(private httpService: HttpService) {}

  async getUserByKakaoApi() {
    const userResponse = await this.httpService.get<KakaotalkUserResponse>(`/oauth/authorize`).toPromise();
    console.log(userResponse);
  }
}
