import { Module } from '@nestjs/common';
import { MjvLibraryService } from './mjv-library.service';

@Module({
  providers: [MjvLibraryService],
  exports: [MjvLibraryService],
})
export class MjvLibraryModule {}
