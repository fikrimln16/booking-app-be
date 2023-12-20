const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); 
const app = express();
const port = 3000;

//import semua yang menyimpan data bookingan
const userData = require("./data/userData"); 
const bookingData = require("./data/bookingData"); 
const bookingEquipments = require("./data/bookingEquipments"); 

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


//POST METHOD LOGIN
app.post("/login", (req, res) => {
  const { nim, password } = req.body;
  const userMatch = userData.find(
    (user) => user.nim === nim && user.password === password
  );

  if (userMatch) {
    if (userMatch.type === "admin") {
      res.json({
        success: true,
        userType: "admin",
        message: "Admin login successful",
      });
    } else if (userMatch.type === "user") {
      res.json({
        success: true,
        userType: "user",
        message: "User login successful",
      });
    } else {
      res.status(500).json({ success: false, error: "Invalid user type" });
    }
  } else {
    res.status(401).json({ success: false, error: "Password Salah" });
  }
});


//POST METHOD UNTUK BOOKING ROOM
app.post("/bookingRoom", (req, res) => {
  const {
    bookingRoomDate,
    startTime,
    endTime,
    agenda,
    userOperator,
    technicalNote,
    room,
    roomDesc,
    locationDesc,
    roomFacilities,
    name,
    email,
    phoneNumber,
  } = req.body;

  const newBooking = {
    bookingRoomDate,
    startTime,
    endTime,
    agenda,
    userOperator,
    technicalNote,
    room,
    roomDesc,
    locationDesc,
    roomFacilities,
    name,
    email,
    phoneNumber,
    status: "Not Approved",
  };

  bookingData.push(newBooking);

  res.status(201).json({
    success: true,
    message: "Booking created successfully",
    booking: newBooking,
  });
});


//POST METHOD UNTUK BOOKING EQUIPMENTS
app.post("/bookingEquipments", (req, res) => {
  const { nama, nim, date, agenda, location, phoneNumber, borrowedEquipment } =
    req.body;

  const newBarangBooking = {
    nama,
    nim,
    date,
    agenda,
    location,
    phoneNumber,
    borrowedEquipment,
    status: "Not Approved",
  };

  bookingEquipments.push(newBarangBooking);

  res.status(201).json({
    success: true,
    message: "Barang booking created successfully",
    barangBooking: newBarangBooking,
  });
});


//POST METHOD UNTUK APPROVAL EQUIPMENT
app.post("/approve-equipment", (req, res) => {
  const { nama, nim, date } = req.body;

  const requestIndex = bookingEquipments.findIndex(
    (req) => req.nama === nama && req.nim === nim && req.date === date
  );

  if (requestIndex === -1) {
    return res.status(404).json({ error: "Request not found" });
  }

  bookingEquipments[requestIndex].status = "Approved";

  res.json({ success: true, request: bookingEquipments[requestIndex] });
});


// POST METHOD UNTUK APPROVAL ROOM
app.post("/approve-room", (req, res) => {
  const { nama, email, phoneNumber } = req.body;

  const requestIndex = bookingData.findIndex(
    (req) => req.name === nama && req.email === email && req.phoneNumber === phoneNumber
  );

  if (requestIndex === -1) {
    return res.status(404).json({ error: "Request not found" });
  }

  bookingData[requestIndex].status = "Approved";

  res.json({ success: true, request: bookingData[requestIndex] });
});


//GET METHOD UNTUK MENGAMBIL SEMUA DATA BOOKING ROOM
app.get("/room-bookings", (req, res) => {
  res.json({ success: true, bookingData });
});


//GET METHOD UNTUK MENGAMBIL SEMUA DATA BOOKING EQUIPMENTS
app.get("/equipments-bookings", (req, res) => {
  res.json({ success: true, bookingEquipments });
});


//MENJALANKAN API
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
