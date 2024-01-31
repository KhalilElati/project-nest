import { Module } from '@nestjs/common';
// import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
// import { HealthcheckModule } from './healthcheck/healthcheck.module';
import { HealthCheckModule } from './health_check/health_check.module';
import { UserService } from './user.service';
import { User } from './user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers:[UserService],
  exports: [TypeOrmModule],

})
export class UserModule {}
