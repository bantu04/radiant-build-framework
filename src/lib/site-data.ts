export const CLINIC = {
  name: "Akshaya Dental Hospital",
  nameTelugu: "అక్షయ డెంటల్ హాస్పిటల్",
  doctor: "Dr. Hitendra Singh",
  doctorTitle: "Chief Dental Surgeon",
  rating: 4.9,
  reviews: 38,
  address: "LBS Nagar, Shastri Nagar, Fatehnagar, Balanagar, Hyderabad, Telangana 500018",
  phone: "080 0849 9594",
  phoneRaw: "08008499594",
  email: "hello@akshayadental.in",
  hours: [
    { day: "Monday", hours: "9:00 AM – 8:00 PM" },
    { day: "Tuesday", hours: "9:00 AM – 8:00 PM" },
    { day: "Wednesday", hours: "9:00 AM – 8:00 PM" },
    { day: "Thursday", hours: "9:00 AM – 8:00 PM" },
    { day: "Friday", hours: "9:00 AM – 8:00 PM" },
    { day: "Saturday", hours: "9:00 AM – 6:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ],
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Akshaya+Dental+Hospital,+Balanagar,+Hyderabad",
  mapEmbed:
    "https://www.google.com/maps?q=Akshaya+Dental+Hospital+Balanagar+Hyderabad&t=&z=16&ie=UTF8&iwloc=&output=embed",
};

export const SERVICES = [
  {
    slug: "wisdom-tooth-extraction",
    title: "Wisdom Tooth Extraction",
    short: "Calm, precise removal — even for the most anxious patients.",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80",
    body: "From simple removals to surgical extractions of impacted molars, performed under sterile protocols with effective local anaesthesia and gentle, paced communication throughout.",
  },
  {
    slug: "smile-correction",
    title: "Smile Correction & Whitening",
    short: "Whitening, veneers and bonding for a smile that feels like yours.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
    body: "In-chair professional whitening, composite bonding, ceramic veneers and gum aesthetics — designed to enhance rather than replace your natural smile.",
  },
  {
    slug: "dental-consultation",
    title: "Dental Consultation",
    short: "An unhurried assessment with full explanations and honest options.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
    body: "Comprehensive oral examination, digital imaging when needed, and a written treatment plan — including costs, alternatives and what we'd recommend you delay.",
  },
  {
    slug: "family-dental-care",
    title: "Family Dental Care",
    short: "One trusted clinic for grandparents, parents and children.",
    image: "https://images.unsplash.com/photo-1559591935-c6c92c6cdc44?auto=format&fit=crop&w=1200&q=80",
    body: "Coordinated care plans across generations — routine cleanings, sealants for kids, dentures and gum care for seniors, all under one roof.",
  },
  {
    slug: "preventive-treatment",
    title: "Preventive Treatment & Scaling",
    short: "Cleanings, sealants and habits that keep dentistry minimal.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80",
    body: "Ultrasonic scaling, polishing, fluoride application and personalised home-care coaching — because the best treatment is the one you never need.",
  },
  {
    slug: "restorative-dentistry",
    title: "Restorative Dentistry",
    short: "Tooth-coloured fillings, crowns and bridges built to last.",
    image: "https://images.unsplash.com/photo-1581585093487-7a909a76b09b?auto=format&fit=crop&w=1200&q=80",
    body: "Composite fillings, ceramic crowns, bridges and inlays — restoring function and form with materials selected for longevity and aesthetics.",
  },
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    short: "Single-visit endodontics with modern rotary instrumentation.",
    image: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&w=1200&q=80",
    body: "Rotary endodontics with apex location and obturation under magnification — comfortable, predictable, and usually completed in one or two visits.",
  },
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    short: "Gentle, playful, never rushed — building trust from the first visit.",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=1200&q=80",
    body: "Preventive checks, fluoride, sealants and treatment of cavities for kids — paced patiently with parents present throughout.",
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    short: "Permanent replacements that look and feel like your own teeth.",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80",
    body: "Single-tooth implants, multi-unit bridges and full-arch rehabilitation using internationally-recognised implant systems.",
  },
  {
    slug: "orthodontics",
    title: "Orthodontics & Aligners",
    short: "Traditional braces and modern clear aligners for every age.",
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=1200&q=80",
    body: "Metal and ceramic braces, plus clear aligner therapy — with realistic timelines and honest pricing before you commit.",
  },
];

export const REVIEWS = [
  {
    name: "Arun Jyothi",
    role: "Wisdom tooth extraction",
    when: "6 months ago",
    body: "The entire experience went far better than expected. I was extremely anxious going in but the team made it completely manageable. Calm, clear, and surprisingly painless.",
  },
  {
    name: "IshwarSingh Deora Savrata",
    role: "Local Guide",
    when: "7 months ago",
    body: "Doctor examined all my family members and treated them with minimum cost — that is hard to find these days. He explains things very well and never pushes unnecessary work.",
  },
  {
    name: "Pralhad Vishwakarma",
    role: "Local Guide",
    when: "8 months ago",
    body: "Good experience, good explanation. Always grateful to Dr. Hitendra Singh ji for the way he treats his patients.",
  },
  {
    name: "Sravanthi K.",
    role: "Family Dental Care",
    when: "3 months ago",
    body: "Took my mother and two kids here. Patient, gentle and transparent about every step and every rupee. Finally a family clinic we trust.",
  },
  {
    name: "Mohammed Faiz",
    role: "Root canal treatment",
    when: "5 months ago",
    body: "Painless root canal, finished in two visits. The chair-side manner is unhurried — you genuinely feel heard.",
  },
  {
    name: "Anitha Reddy",
    role: "Scaling & whitening",
    when: "2 months ago",
    body: "Beautiful, calm clinic. The hygiene standards are visibly excellent. My teeth haven't felt this clean in years.",
  },
];

export const GALLERY = [
  { src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=80", w: 4, h: 5, cat: "Clinic" },
  { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80", w: 4, h: 3, cat: "Clinic" },
  { src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=80", w: 3, h: 4, cat: "Treatments" },
  { src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=80", w: 4, h: 5, cat: "Treatments" },
  { src: "https://images.unsplash.com/photo-1581585093487-7a909a76b09b?auto=format&fit=crop&w=1400&q=80", w: 4, h: 3, cat: "Treatments" },
  { src: "https://images.unsplash.com/photo-1559591935-c6c92c6cdc44?auto=format&fit=crop&w=1400&q=80", w: 3, h: 4, cat: "Team" },
  { src: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=1400&q=80", w: 4, h: 3, cat: "Team" },
  { src: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&w=1400&q=80", w: 4, h: 5, cat: "Treatments" },
  { src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=80", w: 4, h: 3, cat: "Before/After" },
  { src: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=1400&q=80", w: 3, h: 4, cat: "Treatments" },
  { src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1400&q=80", w: 4, h: 3, cat: "Clinic" },
  { src: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=1400&q=80", w: 4, h: 5, cat: "Clinic" },
];

export const BEFORE_AFTER = [
  {
    before: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&w=1400&q=80",
    after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=80",
    label: "Whitening & Smile Design",
  },
  {
    before: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=1400&q=80",
    after: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=80",
    label: "Orthodontic Alignment",
  },
];

export function isOpenNow(now = new Date()) {
  const day = now.getDay(); // 0 Sun .. 6 Sat
  const minutes = now.getHours() * 60 + now.getMinutes();
  if (day === 0) return false;
  const close = day === 6 ? 18 * 60 : 20 * 60;
  return minutes >= 9 * 60 && minutes < close;
}