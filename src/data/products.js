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
      { model: "NWNB-01", name: "Bluetooth Neckband Earphone", spec: "Up to 20 Hrs Battery", image: "/neckband/NWNB-01.webp" },
      { model: "NWNB-02", name: "Wireless Sport Neckband",     spec: "Up to 20 Hrs Battery", image: "/neckband/NWNB-02.webp" },
      { model: "NWNB-03", name: "Bass Pro Neckband",           spec: "Up to 20 Hrs Battery", image: "/neckband/NWNB-03.webp" },
      { model: "NWNB-04", name: "Magnetic Neckband Earphone",  spec: "Up to 20 Hrs Battery", image: "/neckband/NWNB-04.webp" },
      { model: "NWNB-05", name: "Deep Bass Neckband",          spec: "Up to 20 Hrs Battery", image: "/neckband/NWNB-05.webp" },
      { model: "NWNB-06", name: "Premium Neckband Earphone",   spec: "Up to 20 Hrs Battery", image: "/neckband/NWNB-06.webp" },
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
      { model: "NWEB-01", name: "True Wireless Earbuds",  spec: "30 Hrs Total Battery", image: "/buds/NWEB-01.webp" },
      { model: "NWEB-02", name: "ANC TWS Earbuds",        spec: "30 Hrs Total Battery", image: "/buds/NWEB-02.webp" },
      { model: "NWEB-03", name: "Sport TWS Earbuds",      spec: "30 Hrs Total Battery", image: "/buds/NWEB-03.webp" },
      { model: "NWEB-04", name: "Pro TWS Earbuds",        spec: "30 Hrs Total Battery", image: "/buds/NWEB-04.webp" },
      { model: "NWEB-05", name: "Bass TWS Earbuds",       spec: "30 Hrs Total Battery", image: "/buds/NWEB-05.webp" },
      { model: "NWEB-06", name: "Mini TWS Earbuds",       spec: "30 Hrs Total Battery", image: "/buds/NWEB-06.webp" },
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
      { model: "PB-300", name: "30000mAh Power Bank",      spec: "65W PD Fast Charge", image: heroImg },
      { model: "PB-200", name: "20000mAh Power Bank",      spec: "65W PD Fast Charge", image: heroImg },
      { model: "PB-150", name: "15000mAh Slim Power Bank", spec: "45W PD Fast Charge", image: heroImg },
      { model: "PB-100", name: "10000mAh Power Bank",      spec: "22.5W Fast Charge",  image: heroImg },
      { model: "PB-50",  name: "5000mAh Power Bank",       spec: "18W Fast Charge",    image: heroImg },
      { model: "PB-250", name: "25000mAh Power Bank",      spec: "65W PD Fast Charge", image: heroImg },
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
      { model: "CH-65G", name: "65W GaN Wall Charger",   spec: "65W PD Fast Charge",  image: "/speakers/NWS-01.png" },
      { model: "CH-45G", name: "45W GaN Wall Charger",   spec: "45W PD Fast Charge",  image: "/speakers/NWS-02.png" },
      { model: "CH-33W", name: "33W Wall Charger",       spec: "33W Fast Charge",     image: "/speakers/NWS-01.png" },
      { model: "CH-20W", name: "20W USB-C Charger",      spec: "20W PD Fast Charge",  image: "/speakers/NWS-02.png" },
      { model: "CH-CC3", name: "3-Port Car Charger",     spec: "65W Total Output",    image: "/speakers/NWS-01.png" },
      { model: "CH-4P",  name: "4-Port Desktop Charger", spec: "100W Total Output",   image: "/speakers/NWS-02.png" },
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
      { model: "NWCB-01", name: "Type-C to Type-C Cable",     spec: "100W PD Transfer",  image: "/cables/NWCB-01.webp" },
      { model: "NWCB-02", name: "Type-C to USB-A Cable",      spec: "65W Fast Charge",   image: "/cables/NWCB-02.webp" },
      { model: "NWCB-03", name: "Micro USB Cable",            spec: "22.5W Fast Charge", image: "/cables/NWCB-03.webp" },
      { model: "NWCB-04", name: "Nylon Braided Type-C Cable", spec: "100W PD Transfer",  image: "/cables/NWCB-04.webp" },
      { model: "NWCB-05", name: "3-in-1 Multi Cable",         spec: "60W Fast Charge",   image: "/cables/NWCB-01.webp" },
      { model: "NWCB-06", name: "2M Long USB-C Cable",        spec: "65W Fast Charge",   image: "/cables/NWCB-02.webp" },
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
      { model: "SW-Pro",   name: "AMOLED Smart Band Pro",  spec: "14 Days Battery", image: heroImg },
      { model: "SW-Ultra", name: "Ultra Smart Band",       spec: "14 Days Battery", image: heroImg },
      { model: "SW-Fit",   name: "Fitness Smart Band",     spec: "10 Days Battery", image: heroImg },
      { model: "SW-Round", name: "Round Dial Smart Band",  spec: "10 Days Battery", image: heroImg },
      { model: "SW-Lite",  name: "Lite Smart Band",        spec: "7 Days Battery",  image: heroImg },
      { model: "SW-Kids",  name: "Kids Smart Band",        spec: "5 Days Battery",  image: heroImg },
    ],
  },
};

export const featuredSlugs = ["neckband", "tws", "power-bank"];
