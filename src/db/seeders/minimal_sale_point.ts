import mongoose from "mongoose";

import { SalePoint } from "../../core/sale-point/infrastructure/mongo/mongo.sale.point.model";

require("dotenv").config();

mongoose
.connect(process.env.MONGODB_CNN ?? '')
.catch((err: any) => {
    console.log(err);
    process.exit(1);
})
.then(() => {
    console.log("connected to db in development environment");
});

const salePoints = [   
  new SalePoint({
    name: "Bar Qdrink",
    passwordForTaps: "qdrink123",

}),
]
const seed = async()=>{
    await Promise.all(
        salePoints.map(async (p) => {
            await p.save()
        })
    )
}
seed()
    .then(()=>{
        console.log("DONE!");
        mongoose.disconnect();
    })
    .catch