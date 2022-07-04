import bcrypt from 'bcrypt';
import { MigrationInterface, QueryRunner } from "typeorm";
import { v4 as uuid } from 'uuid';

export class createInitialSeed1656898634988 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const accountId = uuid()
        const password = await bcrypt.hash('admin', 12)
        await queryRunner.query(`INSERT INTO account (id, name, email, password) VALUES('${accountId}', 'Admin', 'admin@email.com', '${password}');`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> { }

}
