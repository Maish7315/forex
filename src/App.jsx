import React from 'react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Compass,
  Globe2,
  Headphones,
  Heart,
  Instagram,
  Landmark,
  Leaf,
  Lightbulb,
  Facebook,
  Linkedin,
  MapPin,
  Menu,
  MessageCircle,
  Mountain,
  Navigation,
  Palette,
  Pause,
  Play,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Sunrise,
  TentTree,
  Trees,
  Twitter,
  X,
  Youtube,
  Zap,
} from 'lucide-react'

const ASSET = 'https://images.unsplash.com/'

const heroSlides = [
  {
    kicker: '01 / CULTURE & SOUL',
    title: 'Meet Kenya\nwith your whole heart.',
    body: 'The red earth, the warm welcome, the first light over the savannah — travel deeper with people who call this place home.',
    cta: 'Experience authentic Kenya',
    image: '/hero%20section/hero-image-3.jpeg',
    place: 'Loita Hills · Narok',
    accent: 'sunrise',
  },
  {
    kicker: '02 / THE BIG FIVE',
    title: 'Wild, in the\nmost beautiful way.',
    body: 'Track a lion at dawn. Hear an elephant breathe. Let the silence of the bush reset your sense of time.',
    cta: 'Find your wild',
    image: '/hero%20section/hero-image.jpeg',
    place: 'Tsavo · Amboseli · Mara',
    accent: 'gold',
  },
  {
    kicker: '03 / THE GREAT MIGRATION',
    title: 'Witness nature’s\ngreatest theatre.',
    body: 'Follow the ancient rhythm of the herds across the Mara — with a front-row seat and the time to take it all in.',
    cta: 'Plan your migration',
    image: '/hero%20section/hero-image-2.jpeg',
    place: 'Maasai Mara · July–October',
    accent: 'orange',
  },
  {
    kicker: '04 / PARADISE COAST',
    title: 'The ocean is calling.\nAnswer slowly.',
    body: 'Trade the road dust for salt air, turquoise water and long, unhurried days along Kenya’s luminous coast.',
    cta: 'Discover the coast',
    image: '/hero%20section/hero-image-4.jpeg',
    place: 'Watamu · Diani · Lamu',
    accent: 'coast',
  },
]

const navItems = [
  ['Home', 'home'],
  ['Destinations', 'destinations'],
  ['Safaris', 'safaris'],
  ['Migration', 'migration'],
  ['Gallery', 'gallery'],
  ['Our story', 'story'],
  ['Contact', 'contact'],
]

const destinations = [
  {
    name: 'Maasai Mara',
    region: 'Rift Valley · 3 nights minimum',
    category: 'Wildlife',
    image: '/The%20Great%20Migration%20_%20Maasai%20Mara.webp',
    tag: 'The main event',
    wildlife: 'Big five · Blue wildebeest · 450+ birds species · Maasai giraffe',
    activities: 'Game drives · Hot air balloon safari · Bird migration observation · Wildebeest migration',
  },
  {
    name: 'Tsavo East',
    region: 'Eastern Kenya · 2 nights minimum',
    category: 'Wilderness',
    image: '/tsavo.jpeg',
    tag: 'Our home ground',
    wildlife: 'Red elephant · Lions',
    activities: 'Yatta Plateau · Lugard Falls · Mudanda Rock · Aruba Dam · Bush breakfast',
  },
  {
    name: 'Tsavo West',
    region: 'Eastern Kenya · 2 nights minimum',
    category: 'Wilderness',
    image: '/rhino.webp',
    tag: 'Rhino country',
    wildlife: 'Black rhino · Leopard',
    activities: 'Mzima Springs · Shetani lava flow · Rhino sanctuary · Chaimu Crater · Five Sister Hills · Sundowners',
  },
  {
    name: 'Diani Beach',
    region: 'Coast · 3 nights minimum',
    category: 'Coast',
    image: `${ASSET}photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=86`,
    tag: 'The soft landing',
    wildlife: 'Dolphins · Turtles · Whale sharks',
    activities: 'Sky diving · Dolphin viewing · Golden fish · Crystal clear waters',
  },
  {
    name: 'Samburu',
    region: 'Northern frontier · 3 nights minimum',
    category: 'Culture',
    image: '/zebra.jpeg',
    tag: 'Far from familiar',
    wildlife: 'Grevy’s zebra · Gerenuk · Oryx',
    activities: 'Community visits · Nature walks · River safari',
  },
  {
    name: 'Lake Nakuru',
    region: 'Rift Valley · 2 nights minimum',
    category: 'Wildlife',
    image: '/lake.jpeg',
    tag: 'A quick wild one',
    wildlife: 'White rhino · Black rhino · Waterbuck · Rothschild\'s giraffe · Flamingos',
    activities: 'Menengai Crater · Thomson\'s Falls · Hyrax Hill Prehistoric Site · Lord Egerton Castle · Forest drives',
  },
  {
    name: 'Watamu',
    region: 'Coast · 3 nights minimum',
    category: 'Coast',
    image: `${ASSET}photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=86`,
    tag: 'Blue mind',
    wildlife: 'Sea turtles · Reef fish · Dolphins',
    activities: 'Marine park · Mangrove creek · Gede ruins',
  },
  {
    name: 'Amboseli',
    region: 'Southern Kenya · 2 nights minimum',
    category: 'Wildlife',
    image: '/Amboseli.jpeg',
    tag: 'Elephant kingdom',
    wildlife: 'Africa bush elephants · Cheetah · Plains zebra · Africa fish eagle',
    activities: 'Large herds of free-ranging elephants',
  },
  {
    name: 'Viewing Mount Kilimanjaro',
    region: 'Kenya / Tanzania border',
    category: 'Scenic',
    image: '/kilimanjaro view/Kilimanjaro.jpeg',
    tag: "Africa's highest peak",
    wildlife: '',
    activities: '',
  },
]

const kilimanjaroImages = [
  '/kilimanjaro view/kilimanjaro (4).jpeg',
  '/kilimanjaro view/kilimanjaro (2).jpeg',
  '/kilimanjaro view/Kilimanjaro.jpeg',
  '/kilimanjaro view/kilimanjaro (3).jpeg',
]

const packages = [
  { index: '01', name: 'The Mara, Slowly', duration: '5 days / 4 nights', place: 'Maasai Mara', image: destinations[0].image, icon: TentTree, details: ['Private 4×4 with pop-up roof', 'Boutique tented camp', 'Daily sunrise & sunset drives'], tone: 'amber' },
  { index: '02', name: 'Tsavo in Gold', duration: '4 days / 3 nights', place: 'Tsavo East + West', image: destinations[1].image, icon: Mountain, details: ['Lodge with a view to the waterhole', 'Mzima Springs & Shetani Lava Flow', 'Bush breakfast and sundowner'], tone: 'green' },
  { index: '03', name: 'Salt & Savannah', duration: '8 days / 7 nights', place: 'Mara + Diani', image: destinations[3].image, icon: Sun, details: ['Wildlife and coast in one arc', 'Handpicked beach retreat', 'Domestic flight connections'], tone: 'blue' },
]

const galleryImages = [
  { id: 1, title: 'Morning gold', category: 'Wildlife', image: '/sun-set.jpeg', span: 'tall' },
  { id: 2, title: 'Red earth, open sky', category: 'Drone views', image: '/Real adventures.jpeg', span: 'wide' },
  { id: 3, title: 'The welcome', category: 'Culture', image: '/maasai.jpeg', span: 'standard' },
  { id: 4, title: 'A different kind of blue', category: 'Beaches', image: '/Diani.webp', span: 'standard' },
  { id: 5, title: 'Between worlds', category: 'Luxury lodges', image: '/Fields of Gold.jpeg', span: 'wide' },
  { id: 6, title: 'The long crossing', category: 'Migration', image: `${ASSET}photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1200&q=86`, span: 'tall' },
  { id: 7, title: 'Slow afternoons', category: 'Hotels', image: '/Sundowners.jpeg', span: 'standard' },
  { id: 8, title: 'Wild at heart', category: 'Wildlife', image: `${ASSET}photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=86`, span: 'standard' },
]

const translations = {
  English: { home: 'Home', destinations: 'Destinations', safaris: 'Safaris', migration: 'Migration', gallery: 'Gallery', story: 'Our story', contact: 'Contact', book: 'Book a safari', heroLabel: 'From Tsavo hospitality to Mara adventure' },
  Français: { home: 'Accueil', destinations: 'Destinations', safaris: 'Safaris', migration: 'Migration', gallery: 'Galerie', story: 'Notre histoire', contact: 'Contact', book: 'Réserver un safari', heroLabel: 'De l’hospitalité de Tsavo à l’aventure du Mara' },
  中文: { home: '首页', destinations: '目的地', safaris: '旅行', migration: '迁徙季', gallery: '画廊', story: '我们的故事', contact: '联系', book: '预订旅行', heroLabel: '从察沃的热情好客到马赛马拉的冒险' },
  Español: { home: 'Inicio', destinations: 'Destinos', safaris: 'Safaris', migration: 'Migración', gallery: 'Galería', story: 'Nuestra historia', contact: 'Contacto', book: 'Reservar safari', heroLabel: 'De la hospitalidad de Tsavo a la aventura del Mara' },
  Deutsch: { home: 'Home', destinations: 'Reiseziele', safaris: 'Safaris', migration: 'Migration', gallery: 'Galerie', story: 'Unsere Geschichte', contact: 'Kontakt', book: 'Safari buchen', heroLabel: 'Von Tsavos Gastfreundschaft bis zum Mara-Abenteuer' },
  Italiano: { home: 'Home', destinations: 'Destinazioni', safaris: 'Safari', migration: 'Migrazione', gallery: 'Galleria', story: 'La nostra storia', contact: 'Contatti', book: 'Prenota un safari', heroLabel: 'Dall’ospitalità di Tsavo all’avventura del Mara' },
  العربية: { home: 'الرئيسية', destinations: 'الوجهات', safaris: 'رحلات سفاري', migration: 'الهجرة', gallery: 'المعرض', story: 'قصتنا', contact: 'تواصل', book: 'احجز سفاري', heroLabel: 'من ضيافة تسافو إلى مغامرة مارا' },
  Kiswahili: { home: 'Mwanzo', destinations: 'Maeneo', safaris: 'Safari', migration: 'Uhamaji', gallery: 'Picha', story: 'Hadithi yetu', contact: 'Wasiliana', book: 'Weka safari', heroLabel: 'Kutoka ukarimu wa Tsavo hadi matukio ya Mara' },
}

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }

function formatTime(distance) {
  const days = Math.max(0, Math.floor(distance / 86400000))
  const hours = Math.max(0, Math.floor((distance % 86400000) / 3600000))
  const minutes = Math.max(0, Math.floor((distance % 3600000) / 60000))
  const seconds = Math.max(0, Math.floor((distance % 60000) / 1000))
  return [days, hours, minutes, seconds]
}

function SectionLabel({ children, light = false }) {
  return <div className={`section-label ${light ? 'section-label--light' : ''}`}><span className="section-label__line" />{children}</div>
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('bree-theme') || 'dark')
  const [language, setLanguage] = useState('English')
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenu, setMobileMenu] = useState(false)
  const [slide, setSlide] = useState(0)
  const [paused, setPaused] = useState(false)
  const [mouse, setMouse] = useState({ x: 50, y: 50 })
  const [destination, setDestination] = useState(null)
  const [galleryFilter, setGalleryFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const [bookingOpen, setBookingOpen] = useState(false)
  const [bookingSent, setBookingSent] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState([{ from: 'guide', text: 'Hello and welcome to Bree Tours & Safaris!\n\nI\'m your virtual safari assistant. I can help you discover safari destinations, recommend packages, answer travel questions and guide you through our services.\n\nHow can I help you plan your next adventure today?' }])
  const [chatInput, setChatInput] = useState('')
  const [countdown, setCountdown] = useState(() => {
    const now = new Date()
    const migration = new Date(now.getFullYear(), 6, 15, 8, 0, 0)
    if (migration < now) migration.setFullYear(now.getFullYear() + 1)
    return migration.getTime() - now.getTime()
  })
  const appRef = useRef(null)
  const t = translations[language]

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('bree-theme', theme)
  }, [theme])

  useEffect(() => {
    if (paused) return undefined
    const timer = setInterval(() => setSlide((current) => (current + 1) % heroSlides.length), 7000)
    return () => clearInterval(timer)
  }, [paused])

  useEffect(() => {
    const timer = setInterval(() => setCountdown((current) => Math.max(0, current - 1000)), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const sections = navItems.map(([, id]) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveSection(visible.target.id)
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0.05, 0.2, 0.5] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handlePointer = (event) => {
      const rect = appRef.current?.getBoundingClientRect()
      if (!rect) return
      setMouse({ x: ((event.clientX - rect.left) / rect.width) * 100, y: ((event.clientY - rect.top) / rect.height) * 100 })
    }
    window.addEventListener('pointermove', handlePointer, { passive: true })
    return () => window.removeEventListener('pointermove', handlePointer)
  }, [])

  useEffect(() => {
    if (chatOpen) {
      setChatMessages([{ from: 'guide', text: 'Hello and welcome to Bree Tours & Safaris!\n\nI\'m your virtual safari assistant. I can help you discover safari destinations, recommend packages, answer travel questions and guide you through our services.\n\nHow can I help you plan your next adventure today?' }])
    }
  }, [chatOpen])

  const migrationTime = formatTime(countdown)
  const filteredGallery = useMemo(() => galleryFilter === 'All' ? galleryImages : galleryImages.filter((item) => item.category.toLowerCase() === galleryFilter.toLowerCase()), [galleryFilter])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMobileMenu(false)
  }

  const hero = heroSlides[slide]
  const handleBooking = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const details = [...form.entries()].map(([key, value]) => `${key}: ${value}`).join('\n')
    const message = `Jambo Bree Tours & Safaris! I would like to plan a safari.\n\n${details}\n\nSent from the Bree website.`
    window.open(`https://wa.me/254116600179?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
    setBookingOpen(false)
    setBookingSent(true)
    window.setTimeout(() => setBookingSent(false), 8000)
  }

  const accommodationTypes = ['Boutique lodges', 'Classic safari camps', 'Luxury tented stays', 'Family-friendly camps', 'Beach resorts']
  const transportOptions = ['Private 4×4 with pop-up roof', 'Domestic flights between parks', 'Scheduled shuttles', 'Helicopter transfers']
  const wildlifeExperiences = ['Game drives at sunrise and sunset', 'Hot air balloon safaris', 'Walking safaris with armed guides', 'Bird watching excursions', 'Cultural visits with Maasai communities', 'Bush breakfasts and sundowners']
  const maasaiExperiences = ['Maasai village visits', 'Traditional dance performances', 'Learn about Maasai customs and traditions', 'Community-led nature walks']
  const beachInfo = 'Kenya\'s coast offers turquoise waters, white sand, and a slower rhythm. Watamu and Diani are our top picks — perfect for dolphin watching, marine parks, and unhurried days by the sea.'
  const travelTips = [
    'Pack light, breathable clothing in neutral tones — bright colours can scare wildlife.',
    'Bring a good pair of binoculars — they make all the difference on game drives.',
    'The dry seasons (June–October and January–February) offer the best wildlife viewing.',
    'Malaria prophylaxis is recommended for coastal and lowland areas.',
    'Carry cash in small denominations — many lodges and camps are off-grid.',
  ]

  const faqs = {
    'best time to visit': 'The dry seasons — June to October and January to February — offer the best wildlife viewing. The Great Migration runs from July to October in the Maasai Mara.',
    'how much does a safari cost': 'Every Bree journey is tailored, so pricing depends on your dates, group size, and preferences. Share your travel plans and we\'ll put together a personalised quotation.',
    'is it safe': 'Kenya is a wonderful and welcoming destination. We choose lodges and camps in safe, established areas and our guides are highly trained in wilderness safety.',
    'can i combine beach and safari': 'Absolutely. Our Salt & Savannah package combines the Maasai Mara with Diani Beach — a perfect blend of wildlife and relaxation.',
    'what should i pack': 'Lightweight neutral-toned clothing, a good pair of binoculars, sunscreen, a hat, comfortable walking shoes, and a camera with extra batteries.',
    'do you offer group tours': 'We primarily design private, tailored journeys. Group departures can be arranged for select routes — just ask.',
    'what payment methods do you accept': 'We accept bank transfers and mobile money. A deposit secures your booking, with the balance due closer to departure.',
  }

  const chatMemory = { destination: null, travelDates: null, travellers: null, budget: null, accommodation: null, pickupLocation: null, interests: [], bookingStep: 0 }

  function detectIntent(text) {
    const lower = text.toLowerCase().trim()
    const greetings = ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'howdy', 'greetings', 'jambo']
    if (greetings.some(g => lower.includes(g))) return 'greeting'
    if (lower.includes('who are you') || lower.includes('what are you') || lower.includes('your name')) return 'identity'
    if (lower.includes('what can you do') || lower.includes('help me') || lower.includes('what do you do')) return 'capabilities'
    if (lower.includes('book') || lower.includes('reserve') || lower.includes('i want to book') || lower.includes('let\'s book') || lower.includes('plan a trip') || lower.includes('start planning') || lower.includes('how do i book')) return 'booking_start'
    if (lower.includes('price') || lower.includes('cost') || lower.includes('how much') || lower.includes('quotation') || lower.includes('quote') || lower.includes('budget') || lower.includes('affordable')) return 'pricing'
    if (lower.includes('migration') || lower.includes('great migration') || lower.includes('wildebeest')) return 'migration'
    if (lower.includes('coast') || lower.includes('beach') || lower.includes('diani') || lower.includes('watamu') || lower.includes('lamu')) return 'coast'
    if (lower.includes('big five') || lower.includes('lion') || lower.includes('elephant') || lower.includes('leopard') || lower.includes('rhino') || lower.includes('buffalo')) return 'big_five'
    if (lower.includes('balloon') || lower.includes('hot air') || lower.includes('balloon safari') || lower.includes('best activity')) return 'activities'
    if (lower.includes('accommodation') || lower.includes('hotel') || lower.includes('lodge') || lower.includes('camp') || lower.includes('stay') || lower.includes('where to stay')) return 'accommodation'
    if (lower.includes('tsavo') || lower.includes('amboseli') || lower.includes('samburu') || lower.includes('nakuru') || lower.includes('destination') || lower.includes('which park')) return 'destination'
    if (lower.includes('safari') || lower.includes('tour') || lower.includes('itinerary') || lower.includes('plan my')) return 'safari_plan'
    if (lower.includes('bird') || lower.includes('birding') || lower.includes('flamingo')) return 'birding'
    if (lower.includes('kilimanjaro') || lower.includes('mountain') || lower.includes('view')) return 'kilimanjaro'
    if (lower.includes('family') || lower.includes('kids') || lower.includes('children') || lower.includes('child-friendly')) return 'family'
    if (lower.includes('honeymoon') || lower.includes('romantic') || lower.includes('couple') || lower.includes('anniversary') || lower.includes('proposal')) return 'honeymoon'
    if (lower.includes('lion') || lower.includes('predator') || lower.includes('cheetah')) return 'predators'
    if (lower.includes('gorilla') || lower.includes('chimpanzee') || lower.includes('primate')) return 'primate'
    if (lower.includes('culture') || lower.includes('maasai') || lower.includes('local people') || lower.includes('traditional')) return 'culture'
    if (lower.includes('beach holiday') || lower.includes('beach vacation') || lower.includes('coast holiday')) return 'beach_holiday'
    if (lower.includes('tip') || lower.includes('advice') || lower.includes('travel tip') || lower.includes('what should i bring')) return 'travel_tips'
    if (lower.includes('thank') || lower.includes('thanks')) return 'thanks'
    if (lower.includes('bye') || lower.includes('goodbye') || lower.includes('see you')) return 'goodbye'
    if (lower.includes('help') || lower.includes('support') || lower.includes('contact') || lower.includes('human')) return 'human_contact'
    if (chatMemory.bookingStep > 0) return 'booking_flow'
    return 'general'
  }

  function extractDestination(text) {
    const lower = text.toLowerCase()
    for (const dest of destinations) {
      if (lower.includes(dest.name.toLowerCase())) return dest
    }
    if (lower.includes('mara') || lower.includes('maasai mara')) return destinations[0]
    if (lower.includes('tsavo')) return destinations[1]
    if (lower.includes('coast') || lower.includes('beach') || lower.includes('diani')) return destinations[3]
    if (lower.includes('samburu')) return destinations[4]
    if (lower.includes('nakuru') || lower.includes('lake nakuru')) return destinations[5]
    if (lower.includes('amboseli')) return destinations[7]
    if (lower.includes('kilimanjaro')) return destinations[8]
    return null
  }

  function extractInterest(text) {
    const lower = text.toLowerCase()
    const interests = []
    if (lower.includes('lion') || lower.includes('predator') || lower.includes('cheetah')) interests.push('predators')
    if (lower.includes('elephant')) interests.push('elephants')
    if (lower.includes('bird') || lower.includes('birding') || lower.includes('flamingo')) interests.push('birding')
    if (lower.includes('photograph') || lower.includes('photo') || lower.includes('camera')) interests.push('photography')
    if (lower.includes('family') || lower.includes('kids') || lower.includes('children')) interests.push('family')
    if (lower.includes('honeymoon') || lower.includes('romantic') || lower.includes('couple')) interests.push('romance')
    if (lower.includes('budget') || lower.includes('affordable') || lower.includes('cheap')) interests.push('budget')
    if (lower.includes('luxury') || lower.includes('premium') || lower.includes('exclusive')) interests.push('luxury')
    if (lower.includes('adventure') || lower.includes('active') || lower.includes('hiking')) interests.push('adventure')
    if (lower.includes('culture') || lower.includes('maasai') || lower.includes('local')) interests.push('culture')
    if (lower.includes('beach') || lower.includes('coast') || lower.includes('ocean')) interests.push('beach')
    if (lower.includes('migration') || lower.includes('wildebeest') || lower.includes('great migration')) interests.push('migration')
    if (lower.includes('camp') || lower.includes('camping')) interests.push('camping')
    return interests
  }

  function recommendByInterests(interests) {
    const recs = []
    if (interests.includes('migration') || interests.includes('predators')) recs.push('Maasai Mara — for the Great Migration and predator action')
    if (interests.includes('elephants')) recs.push('Amboseli — famous for large elephant herds with Kilimanjaro views')
    if (interests.includes('birding')) recs.push('Lake Nakuru — a birder\'s paradise with flamingos and rhinos')
    if (interests.includes('photography')) recs.push('Maasai Mara and Amboseli — both offer stunning sunrise and wildlife photography')
    if (interests.includes('family')) recs.push('Family-friendly camps in the Mara — with suites and child-friendly guides')
    if (interests.includes('romance')) recs.push('A private tented camp in the Mara — exclusive and unforgettable')
    if (interests.includes('budget')) recs.push('Tsavo East — a more affordable wilderness experience with incredible landscapes')
    if (interests.includes('luxury')) recs.push('A luxury tented camp in the Mara or a boutique lodge in Tsavo')
    if (interests.includes('culture')) recs.push('Samburu — rich in Maasai and Samburu cultural experiences')
    if (interests.includes('beach')) recs.push('Diani Beach or Watamu — turquoise waters and white sand')
    if (interests.includes('adventure')) recs.push('Tsavo West — with its volcanic landscapes, springs, and crater hikes')
    if (interests.includes('camping')) recs.push('Classic safari camping in the Mara or Tsavo')
    if (recs.length === 0) return 'I\'d love to help you find the perfect destination! Could you tell me what kind of experience you\'re after — wildlife, beaches, culture, adventure, or something else?'
    let response = 'Based on your interests, here are some recommendations:\n\n'
    recs.forEach((rec, i) => { response += `${i + 1}. ${rec}\n` })
    response += '\nWould you like more details on any of these, or shall we start planning your trip?'
    return response
  }

  function handleBookingFlow(text) {
    const lower = text.toLowerCase().trim()
    switch (chatMemory.bookingStep) {
      case 1: {
        const dest = extractDestination(text)
        if (dest) { chatMemory.destination = dest.name; chatMemory.bookingStep = 2 }
        else { chatMemory.bookingStep = 2 }
        return 'Got it! When are you planning to travel?'
      }
      case 2:
        chatMemory.travelDates = text
        chatMemory.bookingStep = 3
        return 'How many people will be travelling with you?'
      case 3:
        chatMemory.travellers = text
        chatMemory.bookingStep = 4
        return 'What\'s your budget range? This helps me recommend the right level of accommodation and experience.'
      case 4:
        chatMemory.budget = text
        chatMemory.bookingStep = 5
        return 'What kind of accommodation do you prefer? We offer boutique lodges, classic safari camps, luxury tented stays, family-friendly camps, and beach resorts.'
      case 5:
        chatMemory.accommodation = text
        chatMemory.bookingStep = 6
        return 'Where will you be flying from, or where would you like to be picked up?'
      case 6:
        chatMemory.pickupLocation = text
        chatMemory.bookingStep = 0
        const parts = ['Here\'s a summary of your trip:']
        if (chatMemory.destination) parts.push(`Destination: ${chatMemory.destination}`)
        if (chatMemory.travelDates) parts.push(`Dates: ${chatMemory.travelDates}`)
        if (chatMemory.travellers) parts.push(`Travellers: ${chatMemory.travellers}`)
        if (chatMemory.budget) parts.push(`Budget: ${chatMemory.budget}`)
        if (chatMemory.accommodation) parts.push(`Accommodation: ${chatMemory.accommodation}`)
        if (chatMemory.pickupLocation) parts.push(`Pickup: ${chatMemory.pickupLocation}`)
        return parts.join('\n') + '\n\nTo proceed, I\'ll connect you with our booking team. Would you like me to share your details with them via WhatsApp?'
      default:
        chatMemory.bookingStep = 0
        return 'Let\'s start fresh! Which destination are you most interested in?'
    }
  }

  function generateResponse(intent, text) {
    switch (intent) {
      case 'greeting': {
        const hour = new Date().getHours()
        let timeGreeting = 'Hello'
        if (hour >= 5 && hour < 12) timeGreeting = 'Good morning'
        else if (hour >= 12 && hour < 17) timeGreeting = 'Good afternoon'
        else if (hour >= 17) timeGreeting = 'Good evening'
        return `${timeGreeting} and welcome to Bree Tours & Safaris! I'm your virtual safari assistant — I can help you discover destinations, recommend packages, answer travel questions, and guide you through our services. Where shall we begin your adventure?`
      }
      case 'identity':
        return `I'm Bree Tours & Safaris' virtual assistant. I'm here to answer questions about our tours, destinations, accommodation, transport, wildlife experiences, and other information available on our website. If you need personalised quotations or assistance completing a booking, I'll gladly connect you with one of our travel consultants.`
      case 'capabilities':
        return `I can help you with a lot of things! Here's what I do best:\n\n• Recommend safaris tailored to your interests\n• Explain destinations and national parks\n• Compare parks and help you choose\n• Suggest itineraries based on your vibe\n• Answer FAQs about travel and safari\n• Help plan trips from scratch\n• Explain accommodation and transport options\n• Share wildlife and cultural experiences\n• Guide you toward booking\n\nWhat are you dreaming about?`
      case 'migration':
        return 'The herds usually reach the Maasai Mara between July and October. August and September are classic river-crossing months — but the Mara is remarkable all year round. If you want to witness the Great Migration, I\'d recommend planning for July through October. Would you like me to suggest a specific itinerary?'
      case 'coast':
        return 'For warm water and a slower rhythm, I love Watamu and Diani. We can pair either with Tsavo for a seamless salt-and-savannah journey. The coast is also wonderful for dolphin watching, marine parks, and unhurried beach days. Are you thinking of combining the beach with a safari?'
      case 'big_five':
        return 'Kenya is one of the best places to see the Big Five. The Mara and Tsavo offer strong lion and elephant sightings, while Amboseli is famous for its elephant herds against the backdrop of Kilimanjaro. Each park has its own character — would you like me to recommend the best destination for your interests?'
      case 'activities':
        return 'We arrange a range of experiences beyond game drives:\n\n• Hot-air ballooning over the Mara at sunrise\n• Guided walking safaris with armed rangers\n• Bush breakfasts and sundowner sessions\n• Bird watching excursions\n• Cultural visits with Maasai communities\n• Marine park excursions on the coast\n\nWhich of these sounds most appealing to you?'
      case 'accommodation':
        return 'We work with a handpicked selection of places to stay:\n\n• Boutique lodges — intimate and stylish\n• Classic safari camps — authentic and comfortable\n• Luxury tented camps — the best of both worlds\n• Family-friendly camps — great for all ages\n• Beach resorts — perfect for coastal stays\n\nTell me what kind of experience you\'re after and I\'ll recommend the ideal fit.'
      case 'destination': {
        const dest = extractDestination(text)
        if (dest) {
          let response = `${dest.name} — ${dest.tag}. This destination is known for ${dest.wildlife || 'its unique landscapes'}. Activities include ${dest.activities || 'guided exploration'}.`
          if (dest.bestFor) response += ` It\'s especially great for ${dest.bestFor}.`
          return response
        }
        return 'Each destination has its own personality: the raw wilderness of Tsavo East, the rhino country of Tsavo West, the elephant kingdom of Amboseli, and the cultural richness of Samburu. Where does your heart pull you?'
      }
      case 'safari_plan':
        return 'We design safaris around your pace and interests. From 4-day escapes to 14-day adventures, every route is shaped by conversation. Share your dream destination or the kind of experience you\'re after, and I\'ll set the wheels in motion.'
      case 'birding':
        return 'Kenya is a birder\'s paradise. Lake Nakuru and Lake Bogoria offer flamingo spectacles, while the Mara hosts 450+ species including the African fish eagle and colourful rollers. Samburu is also home to unique dry-country species. Would you like a birding-focused itinerary?'
      case 'kilimanjaro':
        return 'Mount Kilimanjaro is best viewed from Amboseli at sunrise — the snow-capped dome rises above the savannah like a dream. We can build your safari around that one unforgettable morning. Would you like to include Amboseli in your plans?'
      case 'family':
        return 'Family safaris are wonderful. We choose camps with family suites, child-friendly guides and gentle game drives so everyone — from toddlers to grandparents — feels at home in the bush. Tell me the ages of your children and I\'ll tailor the recommendations.'
      case 'honeymoon':
        return 'A Kenyan safari under the stars is the perfect romantic chapter. We\'ll arrange private dinners, sunset helicopter flights and exclusive camp stays just for two. Which park or experience are you imagining for your trip?'
      case 'predators':
        return 'The Mara is predator central — lion, leopard, cheetah and hyena patrol these plains year-round. Our guides know the hot spots and will position you for the perfect sighting. The best time for predator viewing is early morning and late afternoon.'
      case 'primate':
        return 'While Kenya is world-famous for savannah safaris, we can also arrange chimpanzee trekking in the nearby forests. For mountain gorillas, our neighbours in Rwanda and Uganda are the best options — let me help you extend your adventure if you\'re interested.'
      case 'culture':
        return 'Kenyan culture is rich and vibrant. We arrange visits to Maasai communities where you can learn about their traditions, dance, and way of life. These experiences add a meaningful dimension to any safari. Would you like to include a cultural visit in your itinerary?'
      case 'beach_holiday':
        return 'Kenya\'s coast is a world of its own — turquoise water, white sand, and a slower rhythm. Watamu and Diani are our top picks, perfect for dolphin watching, marine parks, and long, unhurried days by the sea. Would you like to pair the coast with a safari for the full Kenyan experience?'
      case 'travel_tips':
        return 'Here are some tips from the field:\n\n• Pack light, breathable clothing in neutral tones — bright colours can scare wildlife.\n• Bring a good pair of binoculars — they make all the difference on game drives.\n• The dry seasons (June–October and January–February) offer the best wildlife viewing.\n• Malaria prophylaxis is recommended for coastal and lowland areas.\n• Carry cash in small denominations — many lodges and camps are off-grid.\n\nWould you like advice on anything more specific?'
      case 'pricing':
        return 'Every Bree journey is tailored, so we keep pricing personal. Share your travel dates, group size, and preferred style — our team will put together a personalised quotation for you. Would you like to start planning now?'
      case 'thanks':
        return 'You\'re very welcome! I\'m always here if you need help planning your safari. Just ask — and I\'ll make sure your next adventure is unforgettable.'
      case 'goodbye':
        return 'It was a pleasure chatting with you. Whenever you\'re ready to plan your next Kenyan adventure, I\'ll be here. Safe travels for now!'
      case 'human_contact':
        return 'I\'d be happy to connect you with one of our travel consultants. They can handle personalised quotations, booking assistance, and any detailed questions you might have. Would you like me to put you in touch?'
      case 'booking_start':
        chatMemory.bookingStep = 1
        return 'I\'d love to help you book a safari! Let\'s start with the basics — which destination are you most interested in? For example, Maasai Mara, Tsavo, the coast, or somewhere else?'
      case 'booking_flow':
        return handleBookingFlow(text)
      case 'general':
      default: {
        const dest = extractDestination(text)
        if (dest) {
          chatMemory.destination = dest.name
          let response = `Great choice! ${dest.name} — ${dest.tag}. ${dest.wildlife ? 'You can expect to see ' + dest.wildlife + '.' : ''} ${dest.activities ? 'Activities include ' + dest.activities + '.' : ''}`
          const interests = extractInterest(text)
          if (interests.length > 0) chatMemory.interests = [...chatMemory.interests, ...interests]
          return response + '\n\nWould you like me to recommend a package or help you plan the details?'
        }
        const interests = extractInterest(text)
        if (interests.length > 0) {
          chatMemory.interests = [...chatMemory.interests, ...interests]
          return recommendByInterests(interests)
        }
        return 'That sounds like a wonderful idea! I\'m here to help with safari destinations, packages, wildlife experiences, and travel planning. What kind of Kenyan adventure are you dreaming about?'
      }
    }
  }

const sendChat = (suggestion) => {
    const clean = (suggestion || chatInput).trim()
    if (!clean) return
    const intent = detectIntent(clean)
    const response = generateResponse(intent, clean)
    setChatMessages((messages) => [...messages, { from: 'user', text: clean }, { from: 'guide', text: response }])
    setChatInput('')
  }

  return (
    <div ref={appRef} className="app-shell" style={{ '--mouse-x': `${mouse.x}%`, '--mouse-y': `${mouse.y}%` }}>
      <div className="ambient-light" />
      <header className="site-header">
        {bookingOpen && <button className="booking-page__back" onClick={() => setBookingOpen(false)} aria-label="Back to site"><ArrowLeft size={18} /> Back</button>}
        <a className="brand-lockup" href="#home" onClick={() => scrollTo('home')} aria-label="Bree Tours & Safaris home">
          <img src="/bree-logo.png" alt="Bree Tours & Safaris" />
          <span><strong>BREE</strong><small>TOURS & SAFARIS</small></span>
        </a>
        <nav className={`main-nav ${mobileMenu ? 'main-nav--open' : ''}`} aria-label="Main navigation">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`} className={activeSection === id ? 'is-active' : ''} onClick={(event) => { event.preventDefault(); scrollTo(id) }}>{t[id]}</a>)}
          <button className="nav-book mobile-only" onClick={() => { setBookingOpen(true); setMobileMenu(false) }}>{t.book}</button>
        </nav>
        <div className="header-actions">
          <div className="language-select"><Globe2 size={15} /><select value={language} onChange={(event) => setLanguage(event.target.value)} aria-label="Choose language">{Object.keys(translations).map((item) => <option key={item}>{item}</option>)}</select><ChevronDown size={13} /></div>
          <button className="icon-button" aria-label="Toggle theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? <Sun size={17} /> : <MoonIcon size={17} />}</button>
          <button className="nav-book desktop-only" onClick={() => setBookingOpen(true)}>Book Here</button>
          <button className="menu-button" aria-label="Toggle menu" onClick={() => setMobileMenu((open) => !open)}>{mobileMenu ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main>
        {bookingOpen ? (
          <section className="booking-page">
            <div className="booking-page__inner">
              <div className="booking-modal__intro"><SectionLabel light>LET'S START WITH A HELLO</SectionLabel><h2>Build your<br /><em>somewhere.</em></h2><p>Share a few details. A Bree expert will shape the rest around you.</p><div className="booking-modal__note"><Sparkles size={15} /> No prices here — just good conversations.</div></div>
              <form className="booking-form" onSubmit={handleBooking}>
                <div className="form-grid">
                  <label>Full name<input name="Name" required placeholder="Your name" /></label>
                  <label>Phone / WhatsApp<input name="Phone" required placeholder="+254 …" /></label>
                  <label>Email<input name="Email" type="email" required placeholder="you@example.com" /></label>
                  <label>Country<input name="Country" placeholder="Where are you travelling from?" /></label>
                  <label>Adults<select name="Adults" defaultValue="2">{[1,2,3,4,5,6,7,8].map((n) => <option key={n}>{n}</option>)}</select></label>
                  <label>Children<select name="Children" defaultValue="0">{[0,1,2,3,4].map((n) => <option key={n}>{n}</option>)}</select></label>
                  <label>Preferred safari<select name="Preferred Safari" defaultValue="Maasai Mara"><option>Maasai Mara</option><option>Tsavo East & West</option><option>Migration season</option><option>Coast & islands</option><option>Kenya, slowly — custom route</option></select></label>
                  <label>Travel dates<input name="Travel Dates" type="text" placeholder="e.g. 12–20 August 2026" /></label>
                  <label className="form-full">Accommodation preference<select name="Accommodation Preference" defaultValue="Boutique luxury"><option>Boutique luxury</option><option>Classic safari lodge</option><option>Luxury tented camp</option><option>Family-friendly stays</option><option>Let's discuss</option></select></label>
                  <label className="form-full">Message<textarea name="Message" rows="4" placeholder="Tell us about your dream safari..." /></label>
                  <button type="submit" className="button button--gold">Send booking request</button>
                </div>
              </form>
            </div>
          </section>
        ) : (
          <>
        <section id="home" className="hero-section">
          <AnimatePresence mode="wait">
            <motion.div key={slide} className="hero-background" style={{ backgroundImage: `url(${hero.image})` }} initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.1, ease: 'easeOut' }} />
          </AnimatePresence>
          <div className="hero-vignette" />
          <div className="hero-grain" />
          <div className="hero-sun" />
          <div className="hero-glow-top" />
          <div className="hero-content page-gutter">
            <motion.div key={`copy-${slide}`} className="hero-copy" initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} className="eyebrow eyebrow--gold"><span className="eyebrow-dot" />{hero.kicker}</motion.div>
              <motion.h1 variants={fadeUp}>{hero.title.split('\n').map((line) => <span key={line}>{line}</span>)}</motion.h1>
              <motion.p variants={fadeUp}>{hero.body}</motion.p>
              <motion.div variants={fadeUp} className="hero-cta-row"><button className="button button--gold" onClick={() => setBookingOpen(true)}>{hero.cta}</button><button className="play-story" onClick={() => setPaused((value) => !value)}>{paused ? <Play size={14} fill="currentColor" /> : <Pause size={14} fill="currentColor" />} {paused ? 'Play story' : 'Pause story'}</button></motion.div>
            </motion.div>
            <div className="hero-meta"><div className="hero-location"><MapPin size={15} /> {hero.place}</div><div className="hero-slider-control"><button onClick={() => setSlide((slide - 1 + heroSlides.length) % heroSlides.length)} aria-label="Previous slide"><ArrowLeft size={16} /></button><div className="slide-count"><span>0{slide + 1}</span><i /><span>0{heroSlides.length}</span></div><button onClick={() => setSlide((slide + 1) % heroSlides.length)} aria-label="Next slide"><ArrowRight size={16} /></button></div></div>
          </div>
          <div className="hero-bottom page-gutter"><span>Scroll to explore</span><motion.span animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><ArrowDownRight size={18} /></motion.span><div className="hero-progress"><span style={{ width: `${((slide + 1) / heroSlides.length) * 100}%` }} /></div></div>
        </section>

        <section className="intro-strip"><div className="page-gutter intro-strip__inner"><div className="intro-mark"><Sunrise size={18} /><span>Kenya,<br />unfiltered.</span></div><p>We plan journeys that linger. Thoughtful routes, local stories and the kind of wilderness that stays with you long after the dust settles.</p><div className="intro-signature">Bree /2026<br /><small>made in Kenya</small></div></div></section>

        <section id="destinations" className="section page-gutter destinations-section">
          <div className="section-heading"><div><SectionLabel>01 / THE PLACES</SectionLabel><h2>Go where the<br /><em>wild</em> feels close.</h2></div><div className="section-heading__aside"><p>From the red volcanic soil of Tsavo to the brilliant blue of Watamu, Kenya rewards the curious. We’ll help you find your own version of the iconic.</p><button className="text-link" onClick={() => scrollTo('safaris')}>See all journeys</button></div></div>
          <motion.div className="destination-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }}>
            {destinations.map((item, index) => <motion.button key={item.name} variants={fadeUp} className={`destination-card destination-card--${index}`} onClick={() => setDestination(item)}><img src={item.image} alt={item.name} loading="lazy" /><span className="card-shade" /><span className="destination-card__tag">{item.tag}</span><span className="destination-card__bottom"><span><small>{item.region}</small><strong>{item.name}</strong></span><span className="card-cta">Explore</span></span></motion.button>)}
          </motion.div>
        </section>

        <section className="big-five-section">
          <div className="big-five-image" style={{ backgroundImage: `url(/Addo%20and%20Schotia%20Tours.jpeg)` }}><div className="big-five-image__stamp"><span>THE</span><strong>Big<br />Five</strong><small>experience</small></div><div className="big-five-image__caption"><span>01</span><i /><span>05</span><b>TAITA HILLS, KENYA</b></div></div>
          <div className="big-five-copy page-gutter"><SectionLabel light>02 / THE ICONS</SectionLabel><h2>The rarest<br /><em>kind</em> of ordinary.</h2><p>There is a moment — just before the light turns — when the bush holds its breath. This is why we come. To see the world at its most alive, and to remember we belong to it.</p><div className="animal-list"><div className="animal-list__item is-selected"><span>01</span><strong>Lion</strong><small>the quiet authority</small></div><div className="animal-list__item"><span>02</span><strong>Elephant</strong><small>the ancient memory</small></div><div className="animal-list__item"><span>03</span><strong>Leopard</strong><small>the hidden grace</small></div><div className="animal-list__item"><span>04</span><strong>Buffalo</strong><small>the unpredictable herd</small></div><div className="animal-list__item"><span>05</span><strong>Rhino</strong><small>the armored relic</small></div></div><button className="button button--outline-light" onClick={() => setBookingOpen(true)}>Build my safari</button></div>
        </section>

        <section id="migration" className="section page-gutter migration-section">
          <div className="section-heading migration-heading"><div><SectionLabel>03 / THE GREAT MIGRATION</SectionLabel><h2>A rhythm older<br />than <em>memory.</em></h2></div><div className="countdown-card">            <span>Wildebeest migration time remaining</span><div className="countdown-row">{migrationTime.map((value, index) => <div key={index}><strong>{String(value).padStart(2, '0')}</strong><small>{['days', 'hours', 'minutes', 'seconds'][index]}</small></div>)}</div></div></div>
          <div className="migration-layout"><div className="migration-map-card"><div className="map-header"><span><MapPin size={14} /> Northern Tanzania</span><span className="map-line" /><span>Kenya</span></div><div className="migration-map"><svg viewBox="0 0 500 250" role="img" aria-label="Illustrated migration route from Serengeti to Maasai Mara"><path className="map-land" d="M152 18c29 9 48 4 64 14l31-5 31 24 39 13 15 44 35 25-18 35-44 4-30 26-51-5-38 15-43-20-38-6-27-28 8-36-19-26 22-25 6-29 35-7z" /><path className="migration-route" d="M102 167C183 194 226 148 264 145s71 28 130-34" /><path className="migration-route migration-route--dashed" d="M98 163C180 187 228 139 267 139s78 28 135-32" /><circle className="map-pin map-pin--mara" cx="396" cy="112" r="7" /><circle className="map-pin map-pin--serengeti" cx="110" cy="166" r="7" /><circle className="map-pin map-pin--river" cx="275" cy="144" r="5" /><g className="map-label"><text x="366" y="94">MARA</text><text x="69" y="194">SERENGETI</text><text x="255" y="126">MARA RIVER</text></g></svg><div className="map-note"><span className="pulse-dot" />Follow the herds</div></div><div className="migration-foot"><span><Compass size={16} /> 800 km annual journey</span><span>July — October</span></div></div><div className="migration-copy"><p className="large-copy">Some experiences can’t be scheduled. They can only be met.</p><p>We’ll position you close to the action, then give you the rare luxury of time. For the river crossings, the quiet mornings, the dust rising beyond the horizon.</p><div className="facts"><div><strong>1.5m</strong><span>animals on the move</span></div><div><strong>4,000+</strong><span>predators follow</span></div><div><strong>500 km</strong><span>of the Mara ecosystem</span></div></div><button className="text-link" onClick={() => setBookingOpen(true)}>Talk to a migration expert</button></div></div>
        </section>

        <section className="coast-section"><div className="coast-image" style={{ backgroundImage: `url(${ASSET}photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=90)` }} /><div className="coast-overlay" /><div className="page-gutter coast-content"><div><SectionLabel light>04 / SALT & SAVANNAH</SectionLabel><h2>Follow the<br /><em>sun.</em></h2></div><div className="coast-content__aside"><p>Kenya’s coast is a whole different frequency. Turquoise mornings, Swahili stories, and nowhere you need to be by sunset.</p><button className="button button--ivory" onClick={() => setDestination(destinations[2])}>Explore coastal Kenya</button></div></div><div className="coast-orbit"><span>Watamu</span><i /><span>Diani</span><i /><span>Lamu</span></div></section>

        <section id="safaris" className="section page-gutter packages-section"><div className="section-heading"><div><SectionLabel>05 / MADE FOR YOU</SectionLabel><h2>Journeys with<br /><em>intention.</em></h2></div><div className="section-heading__aside"><p>No fixed itineraries. Just a considered starting point — made more personal with every conversation.</p><span className="no-price-note"><Sparkles size={15} /> Every journey is tailored</span></div></div><motion.div className="package-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>{packages.map((item) => { const Icon = item.icon; return <motion.article key={item.name} variants={fadeUp} className={`package-card package-card--${item.tone}`}><div className="package-card__image"><img src={item.image} alt="" loading="lazy" /><span>{item.index}</span><div className="package-card__icon"><Icon size={20} /></div></div><div className="package-card__body"><div className="package-card__meta"><span>{item.duration}</span><span>{item.place}</span></div><h3>{item.name}</h3><ul>{item.details.map((detail) => <li key={detail}><Check size={14} />{detail}</li>)}</ul><div className="package-card__footer"><span>Contact our<br /><strong>safari experts</strong></span><button className="button button--gold" onClick={() => setBookingOpen(true)}>Book Here</button></div></div></motion.article> })}</motion.div></section>

        <section id="gallery" className="section page-gutter gallery-section"><div className="section-heading gallery-heading"><div><SectionLabel>06 / FIELD NOTES</SectionLabel><h2>See it through<br /><em>our eyes.</em></h2></div><div className="gallery-filters">{['All', 'Wildlife', 'Beaches', 'Culture', 'Migration', 'Hotels', 'Luxury lodges', 'Drone views'].map((filter) => <button key={filter} className={galleryFilter === filter ? 'is-active' : ''} onClick={() => setGalleryFilter(filter)}>{filter}</button>)}</div></div><motion.div layout className="gallery-grid">{filteredGallery.map((item) => <motion.button layout key={item.id} className={`gallery-tile gallery-tile--${item.span}`} onClick={() => setLightbox(item)}><img src={item.image} alt={item.title} loading="lazy" /><span className="gallery-tile__shade" /><span className="gallery-tile__caption"><small>{item.category}</small><strong>{item.title}</strong></span><span className="gallery-tile__arrow">View</span></motion.button>)}</motion.div></section>

        <section id="story" className="section story-section"><div className="page-gutter story-grid"><div className="story-visual"><div className="story-circle story-circle--outer" /><div className="story-circle story-circle--middle" /><div className="story-circle story-circle--inner" /><div className="story-card"><img src="/bree-logo.png" alt="Bree Tours & Safaris emblem" /><span>Born between<br />Tsavo & Mara</span></div><div className="story-coordinates">1°18' S<br />35°17' E</div></div><div className="story-copy"><SectionLabel>07 / WHY BREE</SectionLabel><h2>Local is not a<br /><em>look.</em> It’s a way<br />of listening.</h2><p>We are a Kenyan team with a soft spot for the places between the highlights. We know the roads, the families, the hidden viewpoints — and we believe the best safari is the one that leaves room for surprise.</p><div className="values-grid"><div><ShieldCheck size={18} /><strong>Grounded</strong><span>Local knowledge in every route</span></div><div><Heart size={18} /><strong>Considered</strong><span>More care, less checklist</span></div><div><Leaf size={18} /><strong>Conscious</strong><span>Travel that gives back</span></div><div><Headphones size={18} /><strong>There for you</strong><span>Human support, always</span></div></div><button className="text-link" onClick={() => scrollTo('contact')}>Meet the people behind Bree</button></div></div></section>

        <section className="testimonials-section"><div className="page-gutter"><div className="testimonial-top"><SectionLabel light>08 / KIND WORDS</SectionLabel><div className="testimonial-controls"><button aria-label="Previous testimonial"><ArrowLeft size={16} /></button><button aria-label="Next testimonial"><ArrowRight size={16} /></button></div></div><div className="quote-mark">“</div><blockquote>It didn’t feel like we were being shown Kenya. It felt like Kenya was being introduced to us — slowly, generously, on its own terms.</blockquote><div className="testimonial-person"><div className="avatar avatar--one">AS</div><span><strong>Amelia & Sam</strong><small>London · 9 days in Kenya</small></span><div className="stars"><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /></div></div></div></section>

        <section className="booking-cta"><div className="booking-cta__glow" /><div className="page-gutter booking-cta__inner"><div><SectionLabel light>09 / YOUR TURN</SectionLabel><h2>Bring us your<br /><em>what if.</em></h2></div><div><p>Tell us the feeling you’re chasing. We’ll handle the rest.</p><button className="button button--gold" onClick={() => setBookingOpen(true)}>Start planning</button></div></div></section>

        <section id="contact" className="contact-section section page-gutter"><div className="section-heading"><div><SectionLabel>10 / FIND US</SectionLabel><h2>Let’s make<br /><em>somewhere</em> happen.</h2></div><div className="section-heading__aside"><p>Our line is always open for a good question, a big idea, or that one place you can’t stop thinking about.</p><a className="text-link" href="mailto:breetoursandsafaris@gmail.com">breetoursandsafaris@gmail.com</a></div></div><div className="contact-grid"><div className="contact-card contact-card--dark"><MapPin size={21} /><span>Our base</span><strong>Narok — Bomet Highway</strong><small>Kenya, East Africa</small><a href="https://maps.google.com/?q=Narok+Bomet+Highway" target="_blank" rel="noreferrer">Open in maps <ArrowUpRight size={14} /></a></div><a className="contact-card contact-card--whatsapp" href="https://wa.me/254116600179" target="_blank" rel="noreferrer"><MessageCircle size={21} /><span>WhatsApp</span><strong>011 660 0179</strong><small>Usually replies within an hour</small><b>Say hello</b></a><a className="contact-card contact-card--light" href="tel:+254710986309"><Headphones size={21} /><span>Talk to a human</span><strong>0710 986 309</strong><small>Mon — Sat · 08:00 — 18:00</small><b>Call now</b></a></div></section>
          </>
        )}
      </main>

      {!bookingOpen && <footer className="site-footer"><div className="page-gutter footer-top"><div className="footer-brand"><a className="brand-lockup" href="#home" onClick={() => scrollTo('home')}><img src="/bree-logo.png" alt="Bree Tours & Safaris" /><span><strong>BREE</strong><small>TOURS & SAFARIS</small></span></a><p>From Tsavo hospitality<br />to Mara adventure.</p><div className="social-row"><a href="https://instagram.com" aria-label="Instagram"><Instagram size={15} /></a><a href="https://facebook.com" aria-label="Facebook"><Facebook size={15} /></a><a href="https://youtube.com" aria-label="YouTube"><Youtube size={15} /></a><a href="https://x.com" aria-label="X"><Twitter size={15} /></a><a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin size={15} /></a></div></div><div className="footer-links"><div><span>Explore</span><a href="#destinations">{t.destinations}</a><a href="#safaris">{t.safaris}</a><a href="#migration">{t.migration}</a><a href="#gallery">{t.gallery}</a></div><div><span>Get in touch</span><a href="mailto:breetoursandsafaris@gmail.com">Email us</a><a href="https://wa.me/254116600179">WhatsApp</a><a href="tel:+254710986309">Call the team</a><a href="#contact">Find us</a></div><div className="newsletter"><span>Field notes</span><p>Small stories from a big country. Once in a while.</p>{subscribed ? <small style={{ color: 'var(--gold-bright)' }}>Confirmed — you are subscribed.</small> : <form onSubmit={(event) => { event.preventDefault(); setSubscribed(true) }}><input type="email" placeholder="Your email address" aria-label="Your email address" required /><button aria-label="Subscribe"><Send size={15} /></button></form>}<small>No noise. Just wonder.</small></div></div></div><div className="page-gutter footer-bottom"><span>© 2026 Bree Tours & Safaris Ltd.</span><span>Made with care in Kenya <span className="footer-dot">•</span> <a href="https://roy-tecxpro.netlify.app" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>web developers portfolio</a></span><span>Scroll back up <button onClick={() => scrollTo('home')}><ArrowUpRight size={14} /></button></span></div></footer>}

      <AnimatePresence>{destination && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setDestination(null)}><motion.div className={`destination-modal${destination.name === 'Viewing Mount Kilimanjaro' ? ' destination-modal--wide' : ''}`} initial={{ opacity: 0, y: 30, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.97 }} onClick={(event) => event.stopPropagation()}>{destination.name === 'Viewing Mount Kilimanjaro' ? (<div className="kilimanjaro-modal-content"><button className="modal-close" onClick={() => setDestination(null)} aria-label="Close destination details"><X size={18} /></button><div className="page-gutter"><SectionLabel>{destination.category} / KENYA & TANZANIA</SectionLabel><h2>Viewing Mount Kilimanjaro</h2><p>The snow-capped peak of Africa's highest mountain — best viewed from the Amboseli plains at sunrise.</p><div className="kilimanjaro-grid">{kilimanjaroImages.map((img, i) => <img key={i} src={img} alt={`Kilimanjaro view ${i + 1}`} />)}</div></div></div>) : (<><button className="modal-close" onClick={() => setDestination(null)} aria-label="Close destination details"><X size={18} /></button><img src={destination.image} alt={destination.name} /><div className="destination-modal__content"><SectionLabel>{destination.category} / KENYA</SectionLabel><h2>{destination.name}</h2><p className="destination-modal__region">{destination.region}</p><div className="modal-detail-grid"><div><span>Wildlife</span><strong>{destination.wildlife}</strong></div><div><span>Best for</span><strong>{destination.activities}</strong></div></div><button className="button button--gold" onClick={() => { setDestination(null); setBookingOpen(true) }}>Book This Safari</button></div></>)}</motion.div></motion.div>}</AnimatePresence>

      <AnimatePresence>{lightbox && <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(null)}><button className="modal-close" onClick={() => setLightbox(null)} aria-label="Close image"><X size={18} /></button><motion.img initial={{ scale: 0.96 }} animate={{ scale: 1 }} src={lightbox.image} alt={lightbox.title} onClick={(event) => event.stopPropagation()} /><div className="lightbox-caption"><span>{lightbox.category}</span><strong>{lightbox.title}</strong></div></motion.div>}</AnimatePresence>

      <AnimatePresence>{bookingSent && <motion.div className="toast-success" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}><div className="toast-success__icon"><Check size={18} /></div><div><strong>Thank you for booking with Bree Tours & Safaris Ltd.</strong><p>Please check your WhatsApp for your booking confirmation and one of our safari experts will contact you shortly.</p></div><button onClick={() => setBookingSent(false)} aria-label="Dismiss"><X size={15} /></button></motion.div>}</AnimatePresence>

      <div className={`chatbot ${chatOpen ? 'chatbot--open' : ''}`}><AnimatePresence>{chatOpen && <motion.div className="chat-window" initial={{ opacity: 0, y: 15, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 15, scale: 0.96 }}><div className="chat-header"><div className="chat-avatar"><Sparkles size={17} /></div><div><strong>Bree Agent</strong><small>Your Bree guide · online</small></div><button onClick={() => setChatOpen(false)} aria-label="Close assistant"><X size={16} /></button></div><div className="chat-messages">{chatMessages.map((message, index) => <div key={`${message.text}-${index}`} className={`chat-message chat-message--${message.from}`}>{message.text}</div>)}</div><div className="chat-suggestions"><button onClick={() => sendChat('When is the wildebeest migration?')}>Wildebeest migration</button><button onClick={() => sendChat('Tell me about the Big Five')}>Big Five</button><button onClick={() => sendChat('Tell me about the coast')}>Coast & beaches</button><button onClick={() => sendChat('What activities do you offer?')}>Activities</button><button onClick={() => sendChat('I want to plan a family safari')}>Family safari</button><button onClick={() => sendChat('Tell me about Kilimanjaro views')}>Kilimanjaro views</button><button onClick={() => sendChat('I want to book')}>Book now</button></div><form className="chat-input" onSubmit={(event) => { event.preventDefault(); sendChat() }}><input value={chatInput} onChange={(event) => setChatInput(event.target.value)} placeholder="Ask Bree Agent anything…" /><button aria-label="Send message"><Send size={16} /></button></form></motion.div>}</AnimatePresence><button className="chat-trigger" onClick={() => setChatOpen((open) => !open)} aria-label="Open safari assistant"><span className="chat-trigger__pulse" /><MessageCircle size={20} />{!chatOpen && <span className="chat-trigger__label">Ask Bree Agent</span>}</button></div>
    </div>
  )
}

function MoonIcon({ size }) {
  return <span style={{ fontSize: size, lineHeight: 1 }}>◐</span>
}

export default App
