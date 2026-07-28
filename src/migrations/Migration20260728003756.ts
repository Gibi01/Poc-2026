import { Migration } from '@mikro-orm/migrations';

export class Migration20260728003756 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table \`usuario\` add \`edad\` int not null;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table \`usuario\` drop column \`edad\`;`);
  }

}
