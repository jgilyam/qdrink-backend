import { DataTypes, Model, Optional } from "sequelize";
import { CustomerEntity } from "../../../domain/entities";
import { db } from "../conecction";

interface CustomerCreationAttributes extends Optional<CustomerEntity, "id"> {}

interface CustomerInstance
  extends Model<CustomerEntity, CustomerCreationAttributes>,
    CustomerEntity {
  createdAt?: Date;
  updatedAt?: Date;
}

const tableName = {
  tableName: "customers",
};
const Customer = db.define<CustomerInstance>(
  "Customer",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
    },
    email: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    phone: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  },
  tableName
);

export default Customer;
