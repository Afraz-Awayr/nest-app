import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  Unique,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({
  tableName: 'students',
  timestamps: true,
  underscored: true,
})
class Student extends Model<Student> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(true)
  @Column(DataType.INTEGER)
  person_id?: number;

  @Unique('number')
  @Column(DataType.STRING(255))
  number!: string;

  @AllowNull(true)
  @Column(DataType.DATE)
  enrollment_date?: Date;

  @Column(DataType.INTEGER)
  session!: number;

  @Column(DataType.INTEGER)
  class!: number;

  @Column(DataType.INTEGER)
  section!: number;

  @AllowNull(true)
  @Column(DataType.INTEGER)
  created_by?: number;

  @AllowNull(true)
  @Column(DataType.INTEGER)
  updated_by?: number;

  @CreatedAt
  @Column(DataType.DATE)
  created_at?: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  updated_at?: Date;
}
export default Student;
