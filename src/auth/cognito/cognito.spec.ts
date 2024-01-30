import { Test, TestingModule } from '@nestjs/testing';
import { CognitoProvider } from './cognito';

describe('Cognito', () => {
  let provider: CognitoProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CognitoProvider],
    }).compile();

    provider = module.get<CognitoProvider>(CognitoProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
