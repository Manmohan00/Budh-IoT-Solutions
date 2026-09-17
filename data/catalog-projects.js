/* ============================================================
   CATALOG DATA — for catalog.html only (student project listing)
   ------------------------------------------------------------
   This is separate from data/projects.js on purpose, since this
   list is about projects available for students to purchase/build
   from, not your portfolio of completed work.
   Same copy-a-block-and-edit approach as the other data files.
   "price" can be a number, or a string like "On request".
   ============================================================ */

const CATALOG_PROJECTS = [
  {
    id: "c001",
    title: "Home Automation Starter Kit (App Controlled)",
    level: "Beginner",
    description: "Control lights and appliances from a mobile app over Wi-Fi. Comes with full circuit diagram, code, and a report template.",
    techStack: ["ESP8266", "Blynk/App", "Relay Module"],
    price: "On request",
    image: ""
  },
  {
    id: "c002",
    title: "Smart Attendance System with RFID",
    level: "Intermediate",
    description: "RFID-based attendance logging with a simple web dashboard — a popular final-year pick with a clean scope.",
    techStack: ["Arduino", "RFID", "Web Dashboard"],
    price: "On request",
    image: ""
  },
  {
    id: "c003",
    title: "IoT-Based Weather Station",
    level: "Beginner",
    description: "Temperature, humidity and pressure logging with live graphs — a solid intro-level IoT project with real sensor work.",
    techStack: ["ESP32", "DHT22", "ThingSpeak"],
    price: "On request",
    image: ""
  },
  {
    id: "c004",
    title: "Gas Leakage Detection & Alert System",
    level: "Intermediate",
    description: "MQ-series gas sensing with a buzzer, SMS alert and a small safety-focused write-up — good for a viva demo.",
    techStack: ["Arduino", "MQ-2 Sensor", "GSM Module"],
    price: "On request",
    image: ""
  },
  {
    id: "c005",
    title: "Smart Dustbin with Fill-Level Alert",
    level: "Beginner",
    description: "Ultrasonic fill-level sensing that notifies when a bin needs emptying — simple build, clear real-world story.",
    techStack: ["Arduino", "Ultrasonic Sensor", "IoT Alert"],
    price: "On request",
    image: ""
  },
  {
    id: "c006",
    title: "Health Monitoring Wearable (Final Year Scope)",
    level: "Advanced",
    description: "Heart rate + SpO2 tracking with a mobile companion app — a heavier final-year project with documentation support included.",
    techStack: ["ESP32", "MAX30100", "BLE App"],
    price: "On request",
    image: ""
  }
];
