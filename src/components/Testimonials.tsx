"use client";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Student",
    location: "Kerala",
    flag: "🇮🇳",
    avatar: "🧕",
    avatarBg: "#166534",
    rating: 5,
    text: `മദീഹ കോഴ്സിൽ എത്തിപ്പെടാൻ കഴിഞ്ഞതിൽ സർവ്വ ശക്തനായ റബ്ബിൻ്റെ വലിയ അനുഗ്രഹമായി കാണുന്നു.
الحمد لله الحمد لله ألف مرة
 اَلـلّٰـهُـمَّ  صَـلِّ عَــلَـي سَــيِّـدِنَـا مُــحَــمَّـــدٍ ﷺ وَعَـلَـي آلِــهِ وَصَـحْـبِـهِ وَسَـــلَّــمْ💜
മദീഹ കോഴ്സ് ഹൃദയങ്ങളെ നബി സ്നേഹത്താൽ നിറക്കുന്ന അനുഭവമാണ്.
ഞങ്ങളുടെ ഉസ്താദിനും ഇതിൻ്റെ പിന്നിൽ അധ്വാനിച്ച  സാദാ ഉപദേശ നിർദേശങ്ങൾ നൽകി കൂടെ നിന്ന പ്രിയ ലീഡേഴ്സ് , മെൻ്റെയ്സ് മറ്റു സഹപാഠികൾ എല്ലാവർക്കും സകല പ്രവർത്തന മേഖലകളിലും അല്ലാഹു ബറകത്ത് നൽകട്ടെ 
امين امين يا رب العالمين

മദീഹ് കോഴ്സ് മനസ്സിനെ സ്പർശിക്കുന്ന ഒരനുഭവമാണ്. നബി (സ) യോടുള്ള സ്നേഹം വരികളിലൂടെയും സ്വരമാധുരിയിലൂടെയും ആവിഷ്കരിക്കാൻ പഠിപ്പിക്കുന്ന ഈ കോഴ്സ്, വിദ്യാർത്ഥികളുടെ ആത്മീയ വളർച്ചയ്ക്കും ഭാഷാപരമായ മികവിനും വലിയ സംഭാവന നൽകുന്നു. താളവും ഈണവും ചേർന്ന മദീഹ് ആലാപനം ഹൃദയങ്ങളെ ഒന്നിപ്പിക്കുകയും, സദസ്സിൽ സ്നേഹത്തിന്റെയും ആദരവിന്റെയും അന്തരീക്ഷം സൃഷ്ടിക്കുകയും ചെയ്യുന്നു. കേവലം പാട്ട് പഠനം എന്നതിലുപരി, സഹനവും ക്ഷമയും അച്ചടക്കവും വളർത്തിയെടുക്കാൻ മദീഹ് കോഴ്സ് സഹായിക്കുന്നു. ഓരോ വരിയും ഉരുവിടുമ്പോൾ പ്രവാചക സ്നേഹത്തിന്റെ തണലിൽ മനസ്സ് ശാന്തമാവുന്നു, ഒപ്പം ഒരു സംസ്കാരത്തെ നെഞ്ചോട് ചേർക്കുകയും ചെയ്യുന്നു.`,
    course: "Madeeha Course",
  },
  {
    name: "Student",
    location: "Kerala",
    flag: "🇮🇳",
    avatar: "🧕",
    avatarBg: "#14532d",
    rating: 5,
    text: `മദിഹ കോഴ്സ് ഞങ്ങൾക്ക് വ്യത്യസ്തമായ അനുഭവങ്ങളാണ് സമ്മാനിച്ചത്
 ഓരോ  ക്ലാസുകളും ഉസ്താദുമാർ എടുത്ത് അതിന്റെ അർത്ഥങ്ങളൊക്കെ പറയുമ്പോൾ മനസ്സിൽ ആഴ്ന്നിറങ്ങുന്ന തരത്തിലാണ് ചില അർത്ഥങ്ങൾ കേൾക്കുമ്പോൾ കണ്ണുനീർ ഒഴുകും ഒരുപാട് അറിവുകളും പഠിക്കാൻ ആഗ്രഹിക്കുന്നതും ഈ കോഴ്സിലൂടെ നേടിയെടുത്തു.
 
           നിത്യവും ചൊല്ലുന്ന സലാം ബൈത്ത് അർത്ഥം കൂടി ചിന്തിച്ചു കൊണ്ടാകുമ്പോൾ വല്ലാത്തൊരു അനുഭൂതിയാണ്       മനസ്സിന് ഇതിന്റെ പിന്നിൽ പ്രവർത്തിച്ച ഉസ്താദുമാർ നമുക്ക് വലിയൊരു ഭാഗ്യമാണ് ഒരുക്കിയത്.
ചെറുപ്പം മുതലേ നമ്മൾ കേട്ടുകൊണ്ടിരിക്കുന്ന മുത്ത് നബിയുടെ മൗലിദ്, അതിന്റെ അർത്ഥസഹിതം ഹദീസുകളുടെയും  ബൈത്തുകളുടെ.
 
      അർത്ഥങ്ങൾ മനസ്സിലാക്കി ചൊല്ലാൻ കഴിയുന്നു.മുതഫരിദ് ക്ലാസുകളിലൂടെ മറന്നു പോയ കാര്യങ്ങൾ ഓർത്തെടുക്കാൻ കഴിഞ്ഞു നമ്മുടെ ഉസ്താദുമാരിയുടെ ഇനിയും ഒരുപാട് അറിവുകൾ നേടാൻ നമുക്ക് തൗഫീഖ് നൽകട്ടെ ആമീൻ.`,
    course: "Madeeha Course",
  },
  {
    name: "Student",
    location: "Kerala",
    flag: "🇮🇳",
    avatar: "🧕",
    avatarBg: "#1a5c38",
    rating: 5,
    text: `السلام عليكم ورحمة الله وبركاته 😊🤝🏻

🥰അൽഹംദുലില്ലാഹ്, എൻ ഹൃദയം 
കവർന്ന 💚മദീഹ💚  അതൊരു വികാരം തന്നെയാണ്. കുഞ്ഞുനാളിലേ കേട്ടബൈത്തും മൗലിദും ഓരോ വരികളിലും ഇത്രയധികം മധുരമുണ്ടെന്ന് അറിഞ്ഞു ചൊല്ലുമ്പോൾ ഒരു കുളിർമതന്നെയാണ്    
        🌹സലാം ബൈത്തും ശർറഫൽഅനാം മൗലിദും ഓരോ വരികളും ഒപ്പിയെടുത്തു തന്നെ പഠിക്കാനും, ഉസ്താദിന്റെ ഉള്ളുലയ്ക്കുന്ന വാക്കുകളുടെ ശൈലിയിലൂടെ ഹബീബിനോടുള്ള ഇശ്ഖ് വർധിക്കാനും 💚മദീഹ💚 ഒരു കാരണമായി🥰
     അൽഹംദുലില്ലാഹ് ആയിടക്ക് മനാമിൽ ഹബീബിനെയും ഉറ്റചങ്ങാതിമാരായ രണ്ട് ഖലീഫമാരെയും കണ്ടു 💚മദീഹ💚 തന്ന മറക്കാൻ പറ്റാത്ത ഏറ്റവും വലിയ അനുഗ്രഹം ഇത് തന്നെയായിരുന്നു. 
       മുത്തഫരിദ് ക്ലാസുകളിൽ ഫിഖ്ഹീ മസ്അലകൾ പുതിയത് അറിയാനും പഠിച്ചത് ഓർക്കാനും സഹായമായി അൽഹംദുലില്ലാഹ്🤍
        മദീഹ ഒരു ഫ്രീ കോഴ്സ് ആണെങ്കിലും മെന്റർസിന്റെയും ലീഡേഴ്സിന്റെയും ഇടപെടലുകൾ🥰🥰എടുത്തു പറയേണ്ടത് തന്നെയാണ്.  ആഴ്ചയിലെ നോട്ട്സ് സബ്മിറ്റ്, ക്ലാസുകൾ അന്നന്ന് കേൾക്കാനും എഴുതാനും സഹായകമായി🌹🌹
          മദീഹക്ക് പിന്നിൽ പ്രവർത്തിക്കുന്നവർക്കും അത് പഠിച്ചവർക്കും റബ്ബ് ഇരുലോകത്തും കാരുണ്യം നിറക്കട്ടെ 
آمين  يارب العالمين 💚💚`,
    course: "Madeeha Course",
  },
  {
    name: "Binth Samad / Hanna (Batch 28)",
    location: "Kerala",
    flag: "🇮🇳",
    avatar: "🧕",
    avatarBg: "#2a7d4f",
    rating: 5,
    text: `മദീഹ 
    ഹൃദയത്തിൽ ഇടം നേടിയൊരു അനുഭവം  💫 ✨

മദീഹ അത് വല്ലാത്തൊരു അനുഭൂതി തന്നെയാണ്…
ഒരു കുടുംബം പോലെ തോന്നുന്ന ഇടമാണ് മദീഹ 🤍
കളിയും ചിരിയും സന്തോഷവും സ്നേഹവും നിറഞ്ഞൊഴുകുന്ന മനോഹരമായൊരു കുടുംബം…
ഓരോ ദിവസവും പുതിയ അറിവുകളും മനോഹര അനുഭവങ്ങളും സമ്മാനിക്കുന്ന സ്ഥലം ✨
ചില ബന്ധങ്ങൾ ജീവിതത്തിൽ ഒരിക്കലും മറക്കാനാകില്ലല്ലോ…
അങ്ങനെ ഹൃദയത്തോട് ഏറെ അടുത്തു നിൽക്കുന്ന ഇടമാണ് മദീഹ 🥹🤍
ഓരോ കാര്യത്തിലും കൂടെ നിന്നു സപ്പോർട്ട് ചെയ്യുന്ന miss മാരും…
അവരുടെ സ്നേഹവും കരുതലും വല്ലാത്തൊരു feel നൽകുന്നതാണ് 🌸
തെറ്റുകൾ സ്നേഹത്തോടെ തിരുത്തിയും
ഓരോരുത്തരെയും motivate ചെയ്തും മുന്നോട്ട് കൊണ്ടുപോകുന്ന നല്ല മനസ്സുകൾ ✨
അറിവുകൾ നുകരാൻ വഴികാട്ടുന്ന
ഷാഫി ഉസ്താദ്✨
റഫീഹ് ഉസ്താദ് ✨
അവരുടെ വാക്കുകളും പഠനങ്ങളും മനസ്സിൽ വെളിച്ചം പകരുന്നതാണ് 🤍
പഠനം മാത്രം അല്ല…
ജീവിതത്തെ എങ്ങനെ മനോഹരമാക്കാം എന്നതും അവർ പഠിപ്പിക്കുന്നു 🥹
ഗ്രാൻഡ് മജ്ലിസും മാഷാഅല്ലാഹ്…
ഹൃദയത്തിന് സമാധാനവും സന്തോഷവും നൽകുന്ന അതിമനോഹര നിമിഷങ്ങൾ 🤍
സ്വലാത്തും ദിക്റും നിറഞ്ഞ ആ അന്തരീക്ഷം മനസ്സിനെ വല്ലാതെ സ്പർശിക്കുന്നതാണ് ✨
മദീഹയിൽ ചിലവഴിക്കുന്ന ഓരോ നിമിഷവും
ജീവിതത്തിലെ വിലപ്പെട്ട ഓർമ്മകളായി മാറുന്നു 🥺💖
നല്ല കൂട്ടുകാർ…
നല്ല അധ്യാപകർ…
നല്ല അറിവുകൾ..
ഇതെല്ലാം ഒരുമിച്ചു കിട്ടുന്ന മനോഹര ലോകം🤍
മദീഹ എന്നത് ഒരു ക്ലാസ്സ് മാത്രമല്ല…
ഹൃദയത്തിൽ ഇടം നേടിയൊരു അനുഭവം കൂടിയാണ് ✨
ഒരിക്കൽ എത്തിയാൽ മറക്കാനാകാത്ത 
സ്നേഹവും ഇൽമും സമാധാനവും നിറഞ്ഞ മനോഹരമായ ലോകം… 💖

ഞങ്ങളെ സലാമിന്റെ ലോകത്തേക്കും ശറഫുൽ അനം മൗലിദിന്റെ ലോകത്തേക്കും എത്തിക്കുന്ന  അതിമനോഹരമായ മദീഹായിൽ വർക്ക് ചെയ്യുന്ന ഉസ്താദുമാർക്കും മിസ്സമാർക്കും ആഫിയത്തുള്ള ദീർഘായുസ്സ് നൽകണേ അള്ളാഹ🥹🤲🏻`,
    course: "Madeeha Course",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} size={16} fill="#f59e0b" style={{ color: "#f59e0b" }} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const visibleCount = 3;
  const visible = [
    testimonials[current % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section
      id="testimonials"
      className="section"
      style={{ background: "var(--bg-subtle)", position: "relative", overflow: "hidden" }}
    >
      {/* Decorative */}
      <div
        style={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "var(--green-100)",
          opacity: 0.5,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -80,
          left: -80,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "var(--green-50)",
          opacity: 0.8,
        }}
      />

      <div className="container" style={{ position: "relative" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 52,
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <div className="ornament" style={{ justifyContent: "flex-start" }}>
              <span style={{ color: "var(--primary)", fontSize: 18 }}>✦</span>
            </div>
            <div className="section-tag" style={{ marginBottom: 12 }}>
              <Star size={14} /> Student Experiences
            </div>
            <h2 className="section-title" style={{ marginBottom: 8 }}>
              Our <span>Blogs</span>
            </h2>
            <p style={{ fontSize: 16, color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}>
              Heartfelt experiences shared by our students.
            </p>
          </div>

          {/* Nav buttons */}
          <div style={{ display: "flex", gap: 12 }}>
            <button
              id="testimonial-prev"
              onClick={prev}
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                border: "2px solid var(--green-200)",
                background: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
                color: "var(--primary)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "var(--primary)";
                (e.currentTarget as HTMLButtonElement).style.color = "white";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "white";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--primary)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--green-200)";
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              id="testimonial-next"
              onClick={next}
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                border: "2px solid var(--green-200)",
                background: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
                color: "var(--primary)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "var(--primary)";
                (e.currentTarget as HTMLButtonElement).style.color = "white";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "white";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--primary)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--green-200)";
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {visible.map((t, i) => (
            <div
              key={`${current}-${i}`}
              className="testimonial-card"
              style={{
                animation: "fadeInUp 0.5s ease-out forwards",
                animationDelay: `${i * 0.1}s`,
                opacity: 0,
              }}
            >
              {/* Quote icon */}
              <div
                style={{
                  position: "absolute",
                  top: 20,
                  right: 24,
                  color: "var(--green-200)",
                  opacity: 0.7,
                }}
              >
                <Quote size={32} />
              </div>

              {/* Rating */}
              <StarRating rating={t.rating} />

              {/* Text */}
              <p
                style={{
                  fontSize: 15,
                  color: "var(--text-mid)",
                  lineHeight: 1.8,
                  fontFamily: "var(--font-sans)",
                  margin: "16px 0 20px",
                  position: "relative",
                  zIndex: 1,
                  whiteSpace: "pre-line",
                  maxHeight: "300px",
                  overflowY: "auto",
                }}
              >
                {t.text}
              </p>

              {/* Course badge */}
              <div
                className="badge badge-green"
                style={{ marginBottom: 16, fontSize: 11 }}
              >
                📚 {t.course}
              </div>

              {/* Author */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  borderTop: "1px solid var(--green-100)",
                  paddingTop: 16,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: t.avatarBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    flexShrink: 0,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: 15,
                      fontFamily: "var(--font-sans)",
                      color: "var(--text-dark)",
                    }}
                  >
                    {t.name}
                  </div>
                  {/* <div
                    style={{
                      fontSize: 13,
                      color: "var(--text-muted)",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {t.flag} {t.location}
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 36 }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? 28 : 10,
                height: 10,
                borderRadius: "50px",
                border: "none",
                background: i === current ? "var(--primary)" : "var(--green-200)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
