import { MigrationInterface, QueryRunner } from 'typeorm';

export class Example1747660848199 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const hasSchema = await queryRunner.hasSchema('account');
    if (!hasSchema) {
      await queryRunner.createSchema('account', true); // `true` = ifNotExist
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const hasSchema = await queryRunner.hasSchema('account');
    if (hasSchema) {
      await queryRunner.dropSchema('account', true, true);
      // param 2: `ifExist`, param 3: `isCascade`
    }
  }
}
