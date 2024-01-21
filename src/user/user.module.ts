import { Module } from '@nestjs/common';
// import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
// import { HealthcheckModule } from './healthcheck/healthcheck.module';
import { HealthCheckModule } from './health_check/health_check.module';

@Module({
  imports: [UserModule, BookmarkModule, HealthCheckModule],
})
export class UserModule {}
