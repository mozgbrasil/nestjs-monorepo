import { Test, TestingModule } from '@nestjs/testing';
import { MjvLibraryService } from './mjv-library.service';

describe('MjvLibraryService', () => {
  let service: MjvLibraryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MjvLibraryService],
    }).compile();

    service = module.get<MjvLibraryService>(MjvLibraryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
