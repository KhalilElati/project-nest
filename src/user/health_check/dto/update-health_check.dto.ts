import { PartialType } from '@nestjs/mapped-types';
import { CreateHealthCheckDto } from './create-health_check.dto';

export class UpdateHealthCheckDto extends PartialType(CreateHealthCheckDto) {}
