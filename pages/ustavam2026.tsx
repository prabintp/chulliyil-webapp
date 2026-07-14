import React from "react";
import Head from "next/head";
import styles from "../components/ustavam2026/ustavam2026.module.css";
import {
  NavRail,
  Hero,
  About,
  Programme,
  Rituals,
  Offerings,
  Visit,
  UstavamFooter,
  type NavRailSection,
} from "../components/ustavam2026";

const SECTIONS: NavRailSection[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "The temple" },
  { id: "programme", label: "Programme" },
  { id: "rituals", label: "Rituals" },
  { id: "offerings", label: "Offerings" },
  { id: "visit", label: "Visit" },
];

const IMAGES = {
  hero: "https://d8j0ntlcm91z4.cloudfront.net/user_3GG55ozXDgSG0iGEhrwWdfw47uy/hf_20260714_142932_7d0416d8-7ea1-424e-b1be-2cbd7e523844.png",
  about:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3GG55ozXDgSG0iGEhrwWdfw47uy/hf_20260714_143223_71c7d4b7-ddc8-4edb-9dd9-dc7a3cf6fb1f.png",
  theyyam:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3GG55ozXDgSG0iGEhrwWdfw47uy/hf_20260714_142942_4aad9810-c7d4-410c-a79c-d287804371fd.png",
  melam:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3GG55ozXDgSG0iGEhrwWdfw47uy/hf_20260714_142950_4f428672-7120-4115-98d3-68273409aed5.png",
};

const FAVICON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='15' fill='%2314100B'/%3E%3Cpath d='M16 6c3 4-1 5 1 8 1.6 2.4 4 2 4 6a5 5 0 0 1-10 0c0-4 2.4-3.6 4-6 2-3-2-4 1-8z' fill='%23E8B44A'/%3E%3C/svg%3E";

export default function Ustavam2026Page() {
  return (
    <div className={styles.page}>
      <Head>
        <title>ചുള്ളിയിൽ ഉത്സവം · Chulliyil Utsavam</title>
        <meta
          name="description"
          content="Sree Thazhissery Chulliyil Bhagavathi Kshethram annual utsavam — programme, rituals, offerings and directions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Marcellus&family=Manjari:wght@100;400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href={FAVICON} />
      </Head>

      <NavRail sections={SECTIONS} />

      <Hero
        titleMl="ശ്രീ താഴിശ്ശേരി ചുള്ളിയിൽ ഭഗവതി ക്ഷേത്രം"
        titleEn="Sree Thazhissery Chulliyil Bhagavathi Kshethram"
        dates={[
          { label: "Dates", value: "12 – 14 April 2026" },
          { label: "Malayalam Era", value: "മേടം · Medam 1201" },
          { label: "Place", value: "Thazhissery, Kerala" },
        ]}
        primaryCta={{ label: "View the programme", href: "#programme" }}
        secondaryCta={{ label: "Book a vazhipadu", href: "#offerings" }}
        imageUrl={IMAGES.hero}
        imageAlt="Chulliyil Bhagavathi temple lit with rows of oil lamps at dusk"
      />

      <About
        eyebrow="ദേവി · The Devi"
        titleMl="അമ്മയുടെ തിരുമുറ്റത്തേക്ക് സ്വാഗതം"
        titleEn="Welcome to the courtyard of the Mother"
        paragraphs={[
          "For generations, the Chulliyil Bhagavathi has watched over Thazhissery — guardian of its fields, its families and its festivals. Each year in Medam, the temple courtyard fills with lamplight as the village gathers for three days of ritual, music and devotion.",
          "The utsavam opens with the kodiyettam (flag hoisting) and closes with the arattu procession. In between come the deepakazhcha, chenda melam, and the night the Theyyam arrives — when the Devi herself is said to walk among her people.",
        ]}
        imageUrl={IMAGES.about}
        imageAlt="Brass nilavilakku lamps glowing in the temple courtyard"
      />

      <Programme
        eyebrow="ഉത്സവ പരിപാടി · Programme"
        titleMl="മൂന്ന് ദിവസങ്ങൾ, ഒരു യാത്ര"
        titleEn="Three days, one procession"
        days={[
          {
            titleEn: "Day 1",
            titleSub: "Sun · 12 April",
            events: [
              { time: "05:30", description: "Nada thurakkal & Ganapathi homam" },
              { time: "09:00", description: "Kodiyettam — festival flag hoisting" },
              { time: "18:30", description: "Deepakazhcha — lighting of the chuttuvilakku" },
              { time: "20:00", description: "Nadaswaram kacheri" },
            ],
          },
          {
            titleEn: "Day 2",
            titleSub: "Mon · 13 April",
            events: [
              { time: "06:00", description: "Usha pooja & abhishekam" },
              { time: "17:00", description: "Kazhcha sree bali — village procession with chenda melam" },
              { time: "21:30", description: "Theyyam — thottam pattu and the night vigil" },
            ],
          },
          {
            titleEn: "Day 3",
            titleSub: "Tue · 14 April",
            events: [
              { time: "04:30", description: "Theyyam mukhathezhuthu & purappadu" },
              { time: "11:00", description: "Annadanam — community feast for all devotees" },
              { time: "17:30", description: "Arattu procession & kodiyirakkam" },
            ],
          },
        ]}
      />

      <Rituals
        eyebrow="ആചാരങ്ങൾ · The Rituals"
        titleMl="തെയ്യം വരുന്ന രാത്രി"
        titleEn="The night the Theyyam arrives"
        paragraph="The heart of the utsavam is the Theyyam — the living form of the Devi, awakened through song, face-writing and fire. From the thottam pattu at midnight to the purappadu before dawn, the courtyard holds its breath."
        items={[
          {
            title: "Thottam pattu",
            description:
              " The origin songs of the deity, sung through the night by the hereditary performers.",
          },
          {
            title: "Mukhathezhuthu",
            description:
              " The face-writing: hours of pigment and gold leaf that transform performer into deity.",
          },
          {
            title: "Purappadu",
            description: " The Theyyam rises, blesses the gathered families, and speaks the Devi's word.",
          },
        ]}
        imageUrl={IMAGES.theyyam}
        imageAlt="Theyyam performer in red and gold headdress lit by torchlight"
        quote={{
          text: '"When the chenda begins, the whole of Thazhissery keeps the same heartbeat."',
          citation: "Kazhcha sree bali · Day 2, 5 PM",
          imageUrl: IMAGES.melam,
          imageAlt: "Chenda melam drummers performing during the temple procession",
        }}
      />

      <Offerings
        eyebrow="വഴിപാടുകൾ · Offerings"
        titleMl="അമ്മയ്ക്കുള്ള സമർപ്പണം"
        titleEn="Offerings to the Devi"
        items={[
          {
            title: "പുഷ്പാഞ്ജലി · Pushpanjali",
            description: "Flower offering with archana in the devotee's name and star.",
            price: "₹20",
          },
          {
            title: "നെയ്‌വിളക്ക് · Neyvilakku",
            description: "Ghee lamp lit at the sreekovil for prosperity of the family.",
            price: "₹50",
          },
          {
            title: "ഗണപതി ഹോമം · Ganapathi Homam",
            description: "Fire ritual at dawn to remove obstacles before new beginnings.",
            price: "₹150",
          },
          {
            title: "ചുറ്റുവിളക്ക് · Chuttuvilakku",
            description: "Sponsor one evening's lighting of the full lamp rows of the temple.",
            price: "₹1,001",
          },
          {
            title: "അന്നദാനം · Annadanam",
            description: "Contribute to the Day 3 community feast served to every devotee.",
            price: "₹501",
          },
          {
            title: "ത്രികാല പൂജ · Trikala Pooja",
            description: "Poojas at all three sandhyas of a single festival day.",
            price: "₹301",
          },
        ]}
        note="Vazhipadu can be booked at the temple counter from 5 AM on festival days, or in advance through the committee."
      />

      <Visit
        eyebrow="വഴി · Reach the temple"
        titleMl="ക്ഷേത്രത്തിലേക്കുള്ള വഴി"
        titleEn="Getting here"
        columns={[
          [
            {
              term: "Address",
              description: "Sree Thazhissery Chulliyil Bhagavathi Kshethram, Thazhissery, Kerala",
            },
            {
              term: "Darshan hours (festival days)",
              description: "4:30 AM – 12:00 PM · 4:30 PM – late night",
            },
            { term: "Contact", description: "Temple committee: +91 00000 00000" },
          ],
          [
            {
              term: "By road",
              description:
                "Autos and buses run from the nearest town junction; festival-day parking is in the school ground, a short walk from the east nada.",
            },
            {
              term: "Note for devotees",
              description:
                "Traditional dress is requested inside the nalambalam. Footwear stands are at both gates.",
            },
          ],
        ]}
      />

      <UstavamFooter
        blessing="ലോകാഃ സമസ്താഃ സുഖിനോ ഭവന്തു"
        credit="Sree Thazhissery Chulliyil Bhagavathi Kshethram · Utsavam Committee"
      />
    </div>
  );
}
