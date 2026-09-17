/* ============================================================
   PROJECTS DATA
   ------------------------------------------------------------
   HOW TO ADD A NEW PROJECT:
   1. Copy one whole { ... } block below (including the commas).
   2. Paste it inside the PROJECTS array, edit the fields.
   3. Save the file — the site updates automatically, no other
      changes needed.

   FIELD NOTES:
   - id            : any unique short text, no spaces (e.g. "p011")
   - title         : project name
   - domain        : must match one of the keys in PROJECT_DOMAINS
                      below (controls which filter tab it appears under)
   - tagline       : one sentence, shown on the card
   - techStack     : array of short strings, e.g. ["ESP32","MQTT"]
   - year          : e.g. "2024"
   - image         : path to an image file, e.g. "assets/projects/p011.jpg"
                      Leave as "" if you don't have one yet — the card
                      will show a placeholder graphic instead, which is
                      completely fine to leave as-is.
   - youtubeId     : the part after "watch?v=" in a YouTube URL.
                      Leave as "" if there's no video for this project.
   - detail        : a longer paragraph (how it works) shown when a
                      visitor clicks "Read more". Leave as "" to skip.
   - featured      : true/false — featured projects can be highlighted
                      later if you want a "highlights" row; unused for
                      now but kept for future use.
   ============================================================ */

// Filter tab categories — edit labels here if you want different wording.
// Keep "domain" keys used in PROJECTS matching one of these "key" values.
const PROJECT_DOMAINS = [
  { key: "all", label: "All Projects" },
  { key: "agriculture", label: "Agriculture" },
  { key: "smart-home", label: "Smart Home & Living" },
  { key: "industrial", label: "Industrial & Manufacturing" },
  { key: "healthcare", label: "Healthcare" },
  { key: "education", label: "Education & Campus" },
  { key: "hospitality", label: "Hospitality & Real Estate" },
  { key: "other", label: "Other" }
];

const PROJECTS = [
  {
    // This first project has its "image" and "youtubeId" fields filled in
    // on purpose, as a working example — see how it renders differently
    // from the others below. Replace cold-chain-demo.jpg with your own
    // photo (same folder, or update the path), and swap the youtubeId
    // for a real one once you have a demo video, or clear both back to
    // "" if this project doesn't have media yet.
    id: "p001",
    title: "Soil & Irrigation Monitor",
    domain: "agriculture",
    tagline: "Automated soil moisture sensing that triggers irrigation only when a field actually needs it.",
    techStack: ["ESP32", "Soil Sensors", "LoRa", "Solar"],
    year: "2023",
    image: "assets/projects/cold-chain-demo.jpg",
    youtubeId: "M7lc1UVf-VE",
    detail: "A field-deployed sensor node reads soil moisture, temperature and humidity at set intervals and reports over a low-power LoRa link to a base station, which triggers irrigation valves automatically when moisture drops below a threshold. Designed for intermittent solar charging and multi-week unattended operation.",
    featured: true
  },
  {
    id: "p002",
    title: "Smart Access & Presence System",
    domain: "smart-home",
    tagline: "RFID + app-based access control with real-time presence logging for a residential building.",
    techStack: ["RFID", "ESP32", "Firebase", "Mobile App"],
    year: "2024",
    image: "",
    youtubeId: "",
    detail: "Combines RFID tag entry with a companion mobile app so residents and building management get real-time logs of who entered which unit and when, with remote-unlock as a fallback.",
    featured: true
  },
  {
    id: "p003",
    title: "Cold Storage Temperature Network",
    domain: "industrial",
    tagline: "Multi-point temperature and humidity monitoring across a cold storage facility with instant alerting.",
    techStack: ["STM32", "MQTT", "Dashboard", "SMS Alerts"],
    year: "2024",
    image: "",
    youtubeId: "",
    detail: "Distributed sensor nodes across storage racks feed a central dashboard; threshold breaches trigger immediate SMS/email alerts to facility staff, reducing spoilage risk from undetected cooling failures.",
    featured: true
  },
  {
    id: "p004",
    title: "Patient Vitals Companion",
    domain: "healthcare",
    tagline: "Wearable prototype for continuous heart-rate and SpO2 tracking with caregiver alerts.",
    techStack: ["Arduino", "Pulse Sensor", "BLE", "Companion App"],
    year: "2022",
    image: "",
    youtubeId: "",
    detail: "A low-cost wearable prototype exploring continuous vitals monitoring for at-home elder care, streaming readings over BLE to a companion app that flags caregivers on abnormal readings.",
    featured: false
  },
  {
    id: "p005",
    title: "Smart Campus Attendance",
    domain: "education",
    tagline: "Contactless classroom attendance system integrated with a college's existing ERP.",
    techStack: ["RFID", "Raspberry Pi", "REST API"],
    year: "2023",
    image: "",
    youtubeId: "",
    detail: "Deployed across multiple classrooms, this system logs attendance the moment a student taps in and syncs directly with the institution's existing academic ERP — no manual roll call, no separate spreadsheet.",
    featured: false
  },
  {
    id: "p006",
    title: "Hotel Room Energy Automation",
    domain: "hospitality",
    tagline: "Occupancy-based lighting and climate control to cut energy waste in unoccupied rooms.",
    techStack: ["PIR Sensors", "Relay Modules", "ESP8266"],
    year: "2023",
    image: "",
    youtubeId: "",
    detail: "Occupancy sensors tied into room lighting and AC circuits automatically power down non-essential systems when a room sits empty past a set window, with manual override preserved for guest comfort.",
    featured: false
  },
  {
    id: "p007",
    title: "Air Quality & Noise Monitor",
    domain: "smart-home",
    tagline: "Compact indoor air quality and ambient noise monitor with a simple local dashboard.",
    techStack: ["ESP32", "MQ Sensors", "Local Dashboard"],
    year: "2022",
    image: "",
    youtubeId: "",
    detail: "A desk-sized unit tracking CO2, VOC and ambient noise levels with a locally hosted dashboard — built to demonstrate that useful environmental monitoring doesn't require a cloud subscription.",
    featured: false
  },
  {
    id: "p008",
    title: "Predictive Maintenance Sensor",
    domain: "industrial",
    tagline: "Vibration-based early warning system for rotating machinery on a factory floor.",
    techStack: ["Accelerometer", "Edge Processing", "BLE"],
    year: "2024",
    image: "",
    youtubeId: "",
    detail: "Captures vibration signatures directly on rotating equipment and flags deviations from a learned baseline, giving maintenance teams a heads-up before a bearing failure turns into downtime.",
    featured: false
  },
  {
    id: "p009",
    title: "Water Level & Flood Alert Node",
    domain: "other",
    tagline: "Ultrasonic water-level sensing for early flood warning in low-lying areas.",
    techStack: ["Ultrasonic Sensor", "GSM Module", "Solar"],
    year: "2023",
    image: "",
    youtubeId: "",
    detail: "A ruggedized node measures water level at fixed intervals and sends SMS alerts to a configured list of numbers once levels cross defined danger thresholds — built for areas with unreliable internet but working cellular coverage.",
    featured: false
  },
  {
    id: "p010",
    title: "Classroom Energy Meter Dashboard",
    domain: "education",
    tagline: "Live per-classroom power consumption dashboard built with a college engineering department.",
    techStack: ["Current Sensors", "Node-RED", "Dashboard"],
    year: "2022",
    image: "",
    youtubeId: "",
    detail: "Built with a college engineering department to visualize per-classroom power draw in real time, used both as a working facilities tool and as a teaching example for the department's IoT coursework.",
    featured: false
  }
];
