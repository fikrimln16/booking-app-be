const bookingData = [
  // Data Approved
  {
    bookingRoomDate: "2023-12-20",
    startTime: "09:00 ",
    endTime: "11:00 ",
    agenda: "Team Meeting",
    userOperator: "yes",
    technicalNote: "Technical details for the meeting",
    room: "Meeting Room A",
    roomDesc: "A cozy meeting room with a whiteboard",
    locationDesc: "Floor 5, Building XYZ",
    roomFacilities: ["Projector", "Whiteboard", "Conference Table"],
    name: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    status: "Approved"
  },
  {
    bookingRoomDate: "2023-12-21",
    startTime: "02:00 ",
    endTime: "04:00 ",
    agenda: "Training Session",
    userOperator: "no",
    technicalNote: "Training materials and resources needed",
    room: "Training Room B",
    roomDesc: "Spacious room for training sessions",
    locationDesc: "Floor 3, Building ABC",
    roomFacilities: ["Projector", "Flipchart", "Training Materials"],
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phoneNumber: "987-654-3210",
    status: "Approved"
  },

  // Data Not Approved
  {
    bookingRoomDate: "2023-12-22",
    startTime: "10:00 ",
    endTime: "12:00 ",
    agenda: "Presentation",
    userOperator: "yes",
    technicalNote: "Slides and materials for the presentation",
    room: "Presentation Room C",
    roomDesc: "Special room for presentations",
    locationDesc: "Floor 7, Building XYZ",
    roomFacilities: ["Projector", "Screen", "Seating Arrangement"],
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phoneNumber: "555-123-4567",
    status: "Not Approved"
  },
  {
    bookingRoomDate: "2023-12-23",
    startTime: "03:00 ",
    endTime: "05:00 ",
    agenda: "Workshop",
    userOperator: "no",
    technicalNote: "Materials and tools for the workshop",
    room: "Workshop Room D",
    roomDesc: "Room equipped for interactive workshops",
    locationDesc: "Floor 2, Building ABC",
    roomFacilities: ["Whiteboard", "Tables", "Chairs"],
    name: "Bob Williams",
    email: "bob.williams@example.com",
    phoneNumber: "333-987-6543",
    status: "Not Approved"
  },
  {
    bookingRoomDate: "2023-12-24",
    startTime: "01:00 ",
    endTime: "03:00 ",
    agenda: "Interviews",
    userOperator: "no",
    technicalNote: "Interview setup and waiting area",
    room: "Interview Room E",
    roomDesc: "Quiet room for interview sessions",
    locationDesc: "Floor 4, Building XYZ",
    roomFacilities: ["Chair", "Table", "Privacy"],
    name: "Eva Anderson",
    email: "eva.anderson@example.com",
    phoneNumber: "777-456-7890",
    status: "Not Approved"
  },
  {
    bookingRoomDate: "2023-12-25",
    startTime: "11:00 ",
    endTime: "01:00 ",
    agenda: "Discussion",
    userOperator: "yes",
    technicalNote: "Discussion points and collaboration tools",
    room: "Discussion Room F",
    roomDesc: "Room designed for group discussions",
    locationDesc: "Floor 6, Building ABC",
    roomFacilities: ["Whiteboard", "Chairs", "Round Table"],
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    phoneNumber: "999-876-5432",
    status: "Not Approved"
  }
];

module.exports = bookingData;
