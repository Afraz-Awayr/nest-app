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
    personId?: number;
  
    @Unique('number')
    @Column(DataType.STRING(255))
    number!: string;
  
    @AllowNull(true)
    @Column(DataType.DATE)
    enrollmentDate?: Date;
  
    @Column(DataType.INTEGER)
    session!: number;
  
    @Column(DataType.INTEGER)
    class!: number;
  
    @Column(DataType.INTEGER)
    section!: number;
  
    @AllowNull(true)
    @Column(DataType.INTEGER)
    createdBy?: number;
  
    @AllowNull(true)
    @Column(DataType.INTEGER)
    updatedBy?: number;
  
    @CreatedAt
    @Column(DataType.DATE)
    createdAt?: Date;
  
    @UpdatedAt
    @Column(DataType.DATE)
    updatedAt?: Date;
  }
  export default Student