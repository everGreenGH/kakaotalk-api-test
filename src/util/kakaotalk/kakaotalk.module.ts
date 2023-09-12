import { Module } from "@nestjs/common";
import { KakaotalkService } from "./kakaotalk.service";

@Module({
  providers: [KakaotalkService],
})
export class KakaotalkModule {}
