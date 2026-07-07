import heroImg from "../assets/hero.png";

export const productData = {
  neckband: {
    tag: "Wireless Audio",
    heading: "Neckband",
    heroHeading: "Superior\nWireless Sound",
    badgeIcon: "headphone",
    description:
      "Our neckbands deliver immersive sound, long-lasting battery, sleek design, and all-day comfort for a seamless wireless experience.",
    features: ["Bluetooth 5.0+", "Up to 20Hr Battery", "Magnetic Tips", "IPX5 Resistant", "Fast Charge", "Custom Branding"],
    items: [
      {
        model: "NWNB-01", name: "Bluetooth Neckband Earphone", spec: "Up to 20 Hrs Battery", image: "/neckband/NWNB-01.webp",
        description: "A reliable everyday neckband with Bluetooth 5.0 connectivity, deep bass sound, and magnetic eartips for easy storage. Ideal for fitness enthusiasts and daily commuters.",
        specs: [{ label: "Connectivity", value: "Bluetooth 5.0" }, { label: "Battery Life", value: "Up to 20 Hours" }, { label: "Charging", value: "Type-C Fast Charge" }, { label: "Water Resistance", value: "IPX5" }, { label: "Driver Size", value: "10mm Dynamic" }, { label: "OEM / ODM", value: "Available" }],
      },
      {
        model: "NWNB-02", name: "Wireless Sport Neckband", spec: "Up to 20 Hrs Battery", image: "/neckband/NWNB-02.webp",
        description: "Designed for active use — sweat-proof build, secure-fit ear tips, and a flexible neckband frame that stays in place during workouts.",
        specs: [{ label: "Connectivity", value: "Bluetooth 5.1" }, { label: "Battery Life", value: "Up to 20 Hours" }, { label: "Charging", value: "Type-C Fast Charge" }, { label: "Water Resistance", value: "IPX5" }, { label: "Driver Size", value: "10mm Dynamic" }, { label: "OEM / ODM", value: "Available" }],
      },
      {
        model: "NWNB-03", name: "Bass Pro Neckband", spec: "Up to 20 Hrs Battery", image: "/neckband/NWNB-03.webp",
        description: "Enhanced bass tuning and wide soundstage make this neckband ideal for music lovers who demand powerful, punchy audio.",
        specs: [{ label: "Connectivity", value: "Bluetooth 5.0" }, { label: "Battery Life", value: "Up to 20 Hours" }, { label: "Charging", value: "Type-C Fast Charge" }, { label: "Water Resistance", value: "IPX4" }, { label: "Driver Size", value: "12mm Dynamic" }, { label: "OEM / ODM", value: "Available" }],
      },
      {
        model: "NWNB-04", name: "Magnetic Neckband Earphone", spec: "Up to 20 Hrs Battery", image: "/neckband/NWNB-04.webp",
        description: "Smart magnetic eartips automatically pause music when removed and resume when worn — perfect for hands-free professionals.",
        specs: [{ label: "Connectivity", value: "Bluetooth 5.0" }, { label: "Battery Life", value: "Up to 20 Hours" }, { label: "Charging", value: "Magnetic / Type-C" }, { label: "Water Resistance", value: "IPX5" }, { label: "Driver Size", value: "10mm Dynamic" }, { label: "OEM / ODM", value: "Available" }],
      },
      {
        model: "NWNB-05", name: "Deep Bass Neckband", spec: "Up to 20 Hrs Battery", image: "/neckband/NWNB-05.webp",
        description: "Triple-layer passive noise isolation combined with deep bass drivers for an immersive audio experience in loud environments.",
        specs: [{ label: "Connectivity", value: "Bluetooth 5.0" }, { label: "Battery Life", value: "Up to 20 Hours" }, { label: "Charging", value: "Type-C Fast Charge" }, { label: "Water Resistance", value: "IPX5" }, { label: "Driver Size", value: "12mm Dynamic" }, { label: "OEM / ODM", value: "Available" }],
      },
      {
        model: "NWNB-06", name: "Premium Neckband Earphone", spec: "Up to 20 Hrs Battery", image: "/neckband/NWNB-06.webp",
        description: "Our flagship neckband with premium metal housing, HD audio output, and a sleek profile — built for the discerning listener.",
        specs: [{ label: "Connectivity", value: "Bluetooth 5.2" }, { label: "Battery Life", value: "Up to 20 Hours" }, { label: "Charging", value: "Type-C Fast Charge" }, { label: "Water Resistance", value: "IPX5" }, { label: "Housing", value: "Aluminium Alloy" }, { label: "OEM / ODM", value: "Available" }],
      },
    ],
  },
  tws: {
    tag: "True Wireless",
    heading: "TWS Earbuds",
    heroHeading: "True Stereo\nSound",
    badgeIcon: "headphone",
    description:
      "True wireless stereo earbuds with premium sound, noise isolation, touch controls, and compact charging cases ready for white-label.",
    features: ["Touch Controls", "ANC / ENC", "30Hr Total Battery", "Wireless Charging", "Instant Pairing", "Custom Logo"],
    items: [
      {
        model: "NWEB-01", name: "True Wireless Earbuds", spec: "30 Hrs Total Battery", image: "/buds/NWEB-01.webp",
        description: "True wireless freedom with crystal-clear stereo sound, one-touch pairing, and a compact charging case with 25-hour backup.",
        specs: [{ label: "Connectivity", value: "Bluetooth 5.1" }, { label: "Earbud Battery", value: "5 Hours" }, { label: "Case Battery", value: "25 Hours" }, { label: "Water Resistance", value: "IPX4" }, { label: "Controls", value: "Touch Control" }, { label: "OEM / ODM", value: "Available" }],
      },
      {
        model: "NWEB-02", name: "ANC TWS Earbuds", spec: "30 Hrs Total Battery", image: "/buds/NWEB-02.webp",
        description: "Active Noise Cancellation cuts out background noise so you can focus on what matters — music, calls, or silence.",
        specs: [{ label: "Connectivity", value: "Bluetooth 5.2" }, { label: "Earbud Battery", value: "5 Hours" }, { label: "Case Battery", value: "25 Hours" }, { label: "Noise Cancellation", value: "Hybrid ANC" }, { label: "Microphone", value: "Dual ENC Mic" }, { label: "OEM / ODM", value: "Available" }],
      },
      {
        model: "NWEB-03", name: "Sport TWS Earbuds", spec: "30 Hrs Total Battery", image: "/buds/NWEB-03.webp",
        description: "Ear-hook design and IPX5 sweat resistance make these the go-to choice for gym sessions, runs, and outdoor activity.",
        specs: [{ label: "Connectivity", value: "Bluetooth 5.1" }, { label: "Earbud Battery", value: "6 Hours" }, { label: "Case Battery", value: "24 Hours" }, { label: "Water Resistance", value: "IPX5" }, { label: "Fit", value: "Ear-Hook Secure" }, { label: "OEM / ODM", value: "Available" }],
      },
      {
        model: "NWEB-04", name: "Pro TWS Earbuds", spec: "30 Hrs Total Battery", image: "/buds/NWEB-04.webp",
        description: "Professional-grade earbuds with Hi-Fi audio tuning, ENC call quality, and wireless charging case for the power user.",
        specs: [{ label: "Connectivity", value: "Bluetooth 5.2" }, { label: "Earbud Battery", value: "5 Hours" }, { label: "Case Battery", value: "25 Hours" }, { label: "Charging", value: "Wireless + Type-C" }, { label: "Audio", value: "Hi-Fi Stereo" }, { label: "OEM / ODM", value: "Available" }],
      },
      {
        model: "NWEB-05", name: "Bass TWS Earbuds", spec: "30 Hrs Total Battery", image: "/buds/NWEB-05.webp",
        description: "Extra-large 13mm drivers deliver powerful bass and a full soundstage for an audiophile experience in a compact form.",
        specs: [{ label: "Connectivity", value: "Bluetooth 5.1" }, { label: "Earbud Battery", value: "5 Hours" }, { label: "Case Battery", value: "25 Hours" }, { label: "Driver Size", value: "13mm Dynamic" }, { label: "Water Resistance", value: "IPX4" }, { label: "OEM / ODM", value: "Available" }],
      },
      {
        model: "NWEB-06", name: "Mini TWS Earbuds", spec: "30 Hrs Total Battery", image: "/buds/NWEB-06.webp",
        description: "Ultra-compact half-in-ear design for all-day comfort and discreet style — ideal for long calls and casual listening.",
        specs: [{ label: "Connectivity", value: "Bluetooth 5.1" }, { label: "Earbud Battery", value: "5 Hours" }, { label: "Case Battery", value: "25 Hours" }, { label: "Fit Type", value: "Half In-Ear" }, { label: "Water Resistance", value: "IPX4" }, { label: "OEM / ODM", value: "Available" }],
      },
    ],
  },
  "power-bank": {
    tag: "Mobile Power",
    heading: "Power Bank",
    heroHeading: "Never Run Out\nof Power",
    badgeIcon: "battery",
    description:
      "Portable power solutions from 5000mAh to 30000mAh with fast charging, multi-port output, and slim designs for white-label supply.",
    features: ["5000–30000mAh", "PD & QC Fast Charge", "Multi-Port", "LED Indicator", "Slim Design", "Custom Branding"],
    items: [
      {
        model: "PB-300", name: "30000mAh Power Bank", spec: "65W PD Fast Charge", image: heroImg,
        description: "High-capacity 30000mAh power bank with 65W USB-C PD output to charge laptops, tablets, and phones simultaneously.",
        specs: [{ label: "Capacity", value: "30000 mAh" }, { label: "USB-C Output", value: "65W PD" }, { label: "USB-A Output", value: "22.5W QC" }, { label: "Ports", value: "2 USB-A + 1 USB-C" }, { label: "LED Indicator", value: "4-Level" }, { label: "OEM / ODM", value: "Available" }],
      },
      {
        model: "PB-200", name: "20000mAh Power Bank", spec: "65W PD Fast Charge", image: heroImg,
        description: "Reliable 20000mAh powerhouse with dual-port output and fast PD charging — the ideal travel companion for heavy users.",
        specs: [{ label: "Capacity", value: "20000 mAh" }, { label: "USB-C Output", value: "65W PD" }, { label: "USB-A Output", value: "18W QC" }, { label: "Ports", value: "1 USB-A + 1 USB-C" }, { label: "LED Indicator", value: "4-Level" }, { label: "OEM / ODM", value: "Available" }],
      },
      {
        model: "PB-150", name: "15000mAh Slim Power Bank", spec: "45W PD Fast Charge", image: heroImg,
        description: "Slim and lightweight 15000mAh design that slips into any pocket while delivering 45W PD fast charging performance.",
        specs: [{ label: "Capacity", value: "15000 mAh" }, { label: "USB-C Output", value: "45W PD" }, { label: "USB-A Output", value: "18W QC" }, { label: "Thickness", value: "14mm Slim" }, { label: "LED Indicator", value: "4-Level" }, { label: "OEM / ODM", value: "Available" }],
      },
      {
        model: "PB-100", name: "10000mAh Power Bank", spec: "22.5W Fast Charge", image: heroImg,
        description: "Compact 10000mAh power bank with 22.5W fast charging — small enough for a pocket, powerful enough for 2+ full phone charges.",
        specs: [{ label: "Capacity", value: "10000 mAh" }, { label: "USB-C Output", value: "22.5W" }, { label: "USB-A Output", value: "18W QC" }, { label: "Ports", value: "1 USB-A + 1 USB-C" }, { label: "LED Indicator", value: "4-Level" }, { label: "OEM / ODM", value: "Available" }],
      },
      {
        model: "PB-50", name: "5000mAh Power Bank", spec: "18W Fast Charge", image: heroImg,
        description: "Ultra-slim 5000mAh power bank — card-thin profile, 18W charging, and feather-light weight for everyday carry.",
        specs: [{ label: "Capacity", value: "5000 mAh" }, { label: "USB-C Output", value: "18W PD" }, { label: "Thickness", value: "8mm Ultra-Slim" }, { label: "Weight", value: "120g" }, { label: "LED Indicator", value: "4-Level" }, { label: "OEM / ODM", value: "Available" }],
      },
      {
        model: "PB-250", name: "25000mAh Power Bank", spec: "65W PD Fast Charge", image: heroImg,
        description: "25000mAh capacity with 65W PD for laptops and tri-port output to charge three devices at once — built for teams and travel.",
        specs: [{ label: "Capacity", value: "25000 mAh" }, { label: "USB-C Output", value: "65W PD" }, { label: "USB-A Output", value: "22.5W QC" }, { label: "Ports", value: "2 USB-A + 1 USB-C" }, { label: "LED Indicator", value: "4-Level" }, { label: "OEM / ODM", value: "Available" }],
      },
    ],
  },
  charger: {
    tag: "Fast Charging",
    heading: "Charger",
    heroHeading: "Charge at\nFull Speed",
    badgeIcon: "zap",
    description:
      "Wall chargers, car chargers, and multi-port hubs with GaN technology and universal compatibility — certified and brand-ready.",
    features: ["GaN Technology", "PD 65W / QC 3.0", "Universal Compat.", "Multi-Port", "Smart IC Protection", "CE / RoHS"],
    items: [
      {
        model: "CH-65G", name: "65W GaN Wall Charger", spec: "65W PD Fast Charge", image: "/speakers/NWS-01.png",
        description: "Third-generation GaN technology in a compact wall charger delivering 65W PD — enough to fast-charge a laptop and phone simultaneously.",
        specs: [{ label: "Total Output", value: "65W" }, { label: "USB-C PD", value: "65W" }, { label: "Protocol", value: "PD 3.0 / QC 4.0" }, { label: "Technology", value: "GaN III" }, { label: "Safety", value: "CE / RoHS / BIS" }, { label: "OEM / ODM", value: "Available" }],
      },
      {
        model: "CH-45G", name: "45W GaN Wall Charger", spec: "45W PD Fast Charge", image: "/speakers/NWS-02.png",
        description: "Compact 45W GaN charger with foldable pins — ideal for smartphones and tablets with smart adaptive charging.",
        specs: [{ label: "Total Output", value: "45W" }, { label: "USB-C PD", value: "45W" }, { label: "Protocol", value: "PD 3.0 / QC 3.0" }, { label: "Technology", value: "GaN" }, { label: "Safety", value: "CE / RoHS / BIS" }, { label: "OEM / ODM", value: "Available" }],
      },
      {
        model: "CH-33W", name: "33W Wall Charger", spec: "33W Fast Charge", image: "/speakers/NWS-01.png",
        description: "Affordable 33W fast charger compatible with all major fast-charge standards — perfect entry-level option for accessory bundles.",
        specs: [{ label: "Total Output", value: "33W" }, { label: "USB-C PD", value: "33W" }, { label: "Protocol", value: "PD 3.0 / QC 3.0" }, { label: "Compatibility", value: "Universal" }, { label: "Safety", value: "CE / RoHS" }, { label: "OEM / ODM", value: "Available" }],
      },
      {
        model: "CH-20W", name: "20W USB-C Charger", spec: "20W PD Fast Charge", image: "/speakers/NWS-02.png",
        description: "Ultra-compact 20W USB-C PD charger — the smallest in the lineup, compatible with iPhones and Android flagships.",
        specs: [{ label: "Total Output", value: "20W" }, { label: "USB-C PD", value: "20W" }, { label: "Protocol", value: "PD 3.0" }, { label: "Size", value: "Ultra Compact" }, { label: "Safety", value: "CE / RoHS / BIS" }, { label: "OEM / ODM", value: "Available" }],
      },
      {
        model: "CH-CC3", name: "3-Port Car Charger", spec: "65W Total Output", image: "/speakers/NWS-01.png",
        description: "Three-port car charger with 65W total output — one USB-C PD + two USB-A QC ports to charge the whole family on the go.",
        specs: [{ label: "Total Output", value: "65W" }, { label: "USB-C PD", value: "45W" }, { label: "USB-A x2", value: "10W Each" }, { label: "Input", value: "12V–24V Car Socket" }, { label: "Safety", value: "Overvoltage / OCP" }, { label: "OEM / ODM", value: "Available" }],
      },
      {
        model: "CH-4P", name: "4-Port Desktop Charger", spec: "100W Total Output", image: "/speakers/NWS-02.png",
        description: "Desktop charging station with 4 ports and 100W total output — charge laptops, phones, tablets, and accessories from one unit.",
        specs: [{ label: "Total Output", value: "100W" }, { label: "USB-C PD", value: "65W" }, { label: "USB-A x3", value: "18W Each" }, { label: "Design", value: "Desktop Station" }, { label: "Safety", value: "Smart IC Protection" }, { label: "OEM / ODM", value: "Available" }],
      },
    ],
  },
  cable: {
    tag: "Data & Charging",
    heading: "Data Cable",
    heroHeading: "Fast & Reliable\nTransfer",
    badgeIcon: "zap",
    description:
      "Durable braided and standard cables for Type-C, Micro USB, and Lightning with high-speed charging and data transfer.",
    features: ["Type-C / Micro / L", "Up to 100W PD", "480 Mbps Data", "Nylon Braided", "1m / 1.5m / 2m", "Custom Colors"],
    items: [
      {
        model: "NWCB-01", name: "Type-C to Type-C Cable", spec: "100W PD Transfer", image: "/cables/NWCB-01.webp",
        description: "Full-featured USB-C to USB-C cable supporting 100W power delivery and 480 Mbps data transfer — compatible with laptops, tablets, and phones.",
        specs: [{ label: "Connector", value: "Type-C to Type-C" }, { label: "Power Delivery", value: "100W PD 3.0" }, { label: "Data Speed", value: "480 Mbps" }, { label: "Length", value: "1m / 1.5m / 2m" }, { label: "Material", value: "Nylon Braided" }, { label: "OEM / ODM", value: "Available" }],
      },
      {
        model: "NWCB-02", name: "Type-C to USB-A Cable", spec: "65W Fast Charge", image: "/cables/NWCB-02.webp",
        description: "Backwards-compatible USB-A to Type-C cable for 65W fast charging — works with older chargers and modern devices.",
        specs: [{ label: "Connector", value: "USB-A to Type-C" }, { label: "Power Delivery", value: "65W Fast Charge" }, { label: "Data Speed", value: "480 Mbps" }, { label: "Length", value: "1m / 1.5m / 2m" }, { label: "Material", value: "Nylon Braided" }, { label: "OEM / ODM", value: "Available" }],
      },
      {
        model: "NWCB-03", name: "Micro USB Cable", spec: "22.5W Fast Charge", image: "/cables/NWCB-03.webp",
        description: "High-quality Micro USB cable with 22.5W fast charging and durable nylon braiding — ideal for budget smartphones and accessories.",
        specs: [{ label: "Connector", value: "Micro USB" }, { label: "Fast Charge", value: "22.5W" }, { label: "Data Speed", value: "480 Mbps" }, { label: "Length", value: "1m / 1.5m / 2m" }, { label: "Material", value: "Nylon Braided" }, { label: "OEM / ODM", value: "Available" }],
      },
      {
        model: "NWCB-04", name: "Nylon Braided Type-C Cable", spec: "100W PD Transfer", image: "/cables/NWCB-04.webp",
        description: "Military-grade nylon braiding rated for 20,000+ bends with 100W PD and reinforced metal tips — built to outlast standard cables.",
        specs: [{ label: "Connector", value: "Type-C to Type-C" }, { label: "Power Delivery", value: "100W PD 3.0" }, { label: "Data Speed", value: "480 Mbps" }, { label: "Durability", value: "20,000+ Bends" }, { label: "Material", value: "Military Nylon" }, { label: "OEM / ODM", value: "Available" }],
      },
      {
        model: "NWCB-05", name: "3-in-1 Multi Cable", spec: "60W Fast Charge", image: "/cables/NWCB-01.webp",
        description: "One cable, three connectors — Type-C, Micro USB, and Lightning tips built in. Charge any device without carrying multiple cables.",
        specs: [{ label: "Connectors", value: "Type-C + Micro + L" }, { label: "Fast Charge", value: "60W" }, { label: "Compatibility", value: "Universal" }, { label: "Length", value: "1.2m" }, { label: "Material", value: "Braided" }, { label: "OEM / ODM", value: "Available" }],
      },
      {
        model: "NWCB-06", name: "2M Long USB-C Cable", spec: "65W Fast Charge", image: "/cables/NWCB-02.webp",
        description: "Extra-long 2-metre USB-C cable for charging from a distance — perfect for bedside use, office desks, and gaming setups.",
        specs: [{ label: "Connector", value: "Type-C to Type-C" }, { label: "Fast Charge", value: "65W" }, { label: "Data Speed", value: "480 Mbps" }, { label: "Length", value: "2 Metres" }, { label: "Material", value: "Nylon Braided" }, { label: "OEM / ODM", value: "Available" }],
      },
    ],
  },
  "smart-band": {
    tag: "Wearable Tech",
    heading: "Smart Band",
    heroHeading: "Smart Living\nEvery Day",
    badgeIcon: "heart",
    description:
      "Feature-rich smart bands with health tracking, AMOLED displays, and custom firmware — OEM and ODM supply ready.",
    features: ["Heart Rate & SpO2", "Sleep & Step Track", "1.7\"–2.1\" AMOLED", "IP67 Resistant", "7–14 Day Battery", "Custom Watch Face"],
    items: [
      {
        model: "SW-Pro", name: "AMOLED Smart Band Pro", spec: "14 Days Battery", image: heroImg,
        description: "Flagship AMOLED smart band with 24/7 heart rate monitoring, SpO2 tracking, sleep analysis, and 14-day battery life.",
        specs: [{ label: "Display", value: "1.9\" AMOLED" }, { label: "Battery", value: "14 Days" }, { label: "Health Sensors", value: "HR + SpO2 + Stress" }, { label: "Water Rating", value: "IP67" }, { label: "Custom Watch Face", value: "Yes" }, { label: "OEM / ODM", value: "Available" }],
      },
      {
        model: "SW-Ultra", name: "Ultra Smart Band", spec: "14 Days Battery", image: heroImg,
        description: "Ultra-premium build with curved AMOLED display, always-on mode, GPS route tracking, and 50+ sport modes.",
        specs: [{ label: "Display", value: "2.1\" AMOLED Curved" }, { label: "Battery", value: "14 Days" }, { label: "GPS", value: "Built-In" }, { label: "Sport Modes", value: "50+" }, { label: "Water Rating", value: "IP68" }, { label: "OEM / ODM", value: "Available" }],
      },
      {
        model: "SW-Fit", name: "Fitness Smart Band", spec: "10 Days Battery", image: heroImg,
        description: "Purpose-built for fitness tracking — step counter, calorie burn, 30 workout modes, and a 10-day battery for non-stop activity.",
        specs: [{ label: "Display", value: "1.7\" AMOLED" }, { label: "Battery", value: "10 Days" }, { label: "Workout Modes", value: "30+" }, { label: "Step Counter", value: "Yes" }, { label: "Water Rating", value: "IP67" }, { label: "OEM / ODM", value: "Available" }],
      },
      {
        model: "SW-Round", name: "Round Dial Smart Band", spec: "10 Days Battery", image: heroImg,
        description: "Classic round dial design with a bright AMOLED display, watch face customisation, and comprehensive health sensors.",
        specs: [{ label: "Display", value: "1.8\" Round AMOLED" }, { label: "Battery", value: "10 Days" }, { label: "Health Sensors", value: "HR + SpO2" }, { label: "Notifications", value: "Yes" }, { label: "Water Rating", value: "IP67" }, { label: "OEM / ODM", value: "Available" }],
      },
      {
        model: "SW-Lite", name: "Lite Smart Band", spec: "7 Days Battery", image: heroImg,
        description: "Slim and affordable smart band with essential health tracking and notifications — great as a bundled accessory or entry-level wearable.",
        specs: [{ label: "Display", value: "1.7\" TFT" }, { label: "Battery", value: "7 Days" }, { label: "Health Sensors", value: "HR + Step" }, { label: "Notifications", value: "Yes" }, { label: "Water Rating", value: "IP67" }, { label: "OEM / ODM", value: "Available" }],
      },
      {
        model: "SW-Kids", name: "Kids Smart Band", spec: "5 Days Battery", image: heroImg,
        description: "Colorful, durable kids smart band with step tracking, sleep monitoring, and a soft silicone strap designed for small wrists.",
        specs: [{ label: "Display", value: "1.4\" TFT Color" }, { label: "Battery", value: "5 Days" }, { label: "Tracking", value: "Step + Sleep" }, { label: "Strap", value: "Soft Silicone" }, { label: "Water Rating", value: "IP67" }, { label: "OEM / ODM", value: "Available" }],
      },
    ],
  },
};

export const featuredSlugs = ["neckband", "tws", "power-bank"];
