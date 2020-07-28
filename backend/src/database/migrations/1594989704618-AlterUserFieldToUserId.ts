import {
  MigrationInterface, QueryRunner, TableColumn, TableForeignKey,
} from 'typeorm';

export default class AlterUserFieldToUserId1594989704618 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('trips', 'user');
    await queryRunner.addColumn('trips', new TableColumn({
      name: 'user_id',
      type: 'uuid',
      isNullable: true,
    }));

    await queryRunner.createForeignKey('trips', new TableForeignKey({
      name: 'UserTrip',
      columnNames: ['user_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('trips', 'UserTrip');

    await queryRunner.dropColumn('trips', 'user_id');

    await queryRunner.addColumn('trips', new TableColumn({
      name: 'user',
      type: 'varchar',
    }));
  }
}
