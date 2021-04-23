import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@stack-v4210/api/core/data-access'

import { ApiAccountDataAccessService } from './api-account-data-access.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [ApiAccountDataAccessService],
  exports: [ApiAccountDataAccessService],
})
export class ApiAccountDataAccessModule {}
