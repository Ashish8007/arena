import { Test, TestingModule } from '@nestjs/testing';
import { ForgotPasswordService } from './forget-password.service';

describe('ForgetPasswordService', () => {
  let service: ForgotPasswordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ForgotPasswordService],
    }).compile();

    service = module.get<ForgotPasswordService>(ForgotPasswordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
