import { Test, TestingModule } from "@nestjs/testing";
import { KakaotalkService } from "./kakaotalk.service";

describe("KakaotalkService", () => {
  let service: KakaotalkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KakaotalkService],
    }).compile();

    service = module.get<KakaotalkService>(KakaotalkService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
