const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./Routes/User');
const DevRoute = require('./Routes/Developer');
const ProjectRoute = require('./Routes/Project');
const BuildingRoute = require('./Routes/Buildings');
const ParkingRoute = require('./Routes/Parking');
const BookingRoute = require('./Routes/Booking');
const BookingStatusRoute = require('./Routes/Booking_Status');
const BuyerMasterRoute = require('./Routes/Buyer_Master');
const DemandRoute = require('./Routes/Demand');
const FlatRoute = require('./Routes/Flat');
const PaymentRecieveRoute = require('./Routes/Payment_Recieve');
const UnitRoute = require('./Routes/Unit');
const SaleInoventoryRoute = require('./Routes/Sale_Inoventory');
const cors = require("cors");
const cookieParser = require('cookie-parser');
const path = require('path');
require('dotenv').config({ path: "env/config.env" });
console.log(`server type: ${process.env.SERVER}`);
mongoose.connect(process.env.DB_URI).then(() => { console.log(`DB connection successful at URI: ${process.env.DB_URI}`) }).catch((err) => {
    console.log(`Error Occured: ${err}`)
})
// middleware

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api", userRoute);
app.use("/api", DevRoute);
app.use("/api", ProjectRoute);
app.use("/api", BuildingRoute);
app.use("/api", SaleInoventoryRoute);
app.use("/api", UnitRoute);
app.use("/api", PaymentRecieveRoute);
app.use("/api", FlatRoute);
app.use("/api", DemandRoute);
app.use("/api", BuyerMasterRoute);
app.use("/api", BookingStatusRoute);
app.use("/api", BookingRoute);
app.use("/api", ParkingRoute);


const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running at https://${process.env.PORT}`)
});
if (process.env.SERVER === "PRODUCTION") {
    app.use(express.static(path.join(__dirname, "../build")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../build/index.html"));
    })
}
let corsOptions = {
    origin : ['http://localhost:4040'],
}  