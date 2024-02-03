import { Exercise } from '../entities/exercise.entity';

export class CreateSessionLogDto {
  muscle_group: string;
  exercises: Partial<Exercise>[];
}
