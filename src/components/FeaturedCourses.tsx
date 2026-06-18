"use client";
import { Clock, UserCheck, BookOpen, Monitor, Mic, Star } from "lucide-react";

const courses = [
  {
    title: "മദീഹ കോഴ്സ്",
    subtitle: "Madeeha Course",
    duration: "3 Months",
    eligibility: "Women aged 20 years and above",
    focus: "Seerah of Prophet Muhammad ﷺ, Salam Baith, sharaful Anam moulid, Kithabul muthafarid",
    mode: "Online",
    lecturer: "PCH Rafeeh Ahsani",
  },
  {
    title: "Al Autsa",
    subtitle: "",
    duration: "6 Months",
    eligibility: "Women",
    focus: "Muhyadheen mala, Aqeedah, Worship, Daily Islamic Life, Practical Islamic Guidance",
    mode: "Online",
    lecturer: "Jasir Ahsani Gujrath",
    special: "Free Entry",
  },
  {
    title: "Madeeha Da'awa College",
    subtitle: "",
    duration: "5 Years",
    eligibility: "Women interested in Islamic learning and Da'wah",
    focus: "Islamic Studies from meezaan, Da'wah Training, Personality Development, Practical Learning",
    mode: "Online",
  }
];

export default function FeaturedCourses() {
  return (
    <section className="section" style={{ background: "var(--bg-subtle)" }} id="courses">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div className="ornament">
            <span style={{ color: "var(--primary)", fontSize: 18 }}>✦</span>
          </div>
          <h2 className="section-title">
            Our <span>Courses</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Comprehensive Islamic education programs designed specifically for women.
          </p>
        </div>

        <div className="courses-grid">
          {courses.map((course, i) => (
            <div key={i} className="card" style={{ padding: "30px", animationDelay: `${i * 0.1}s`, display: "flex", flexDirection: "column" }}>
              <div style={{ marginBottom: 20 }}>
                {course.special && (
                    <div style={{
                        display: "inline-block",
                        padding: "4px 12px",
                        borderRadius: "50px",
                        background: "var(--primary)",
                        color: "white",
                        fontSize: 12,
                        fontWeight: 700,
                        fontFamily: "Inter, sans-serif",
                        marginBottom: 14
                    }}>
                        <Star size={12} style={{ display: "inline", marginRight: 4, verticalAlign: "middle" }} />
                        {course.special}
                    </div>
                )}
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: 24, fontWeight: 700, marginBottom: 4, color: "var(--text-dark)" }}>
                  {course.title}
                </h3>
                {course.subtitle && (
                    <p style={{ fontSize: 14, color: "var(--text-muted)", fontFamily: "Inter, sans-serif" }}>
                        {course.subtitle}
                    </p>
                )}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 15, flex: 1 }}>
                <div style={{ display: "flex", gap: 12 }}>
                  <Clock size={18} style={{ color: "var(--primary)", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>Duration</div>
                    <div style={{ fontSize: 15, color: "var(--text-dark)" }}>{course.duration}</div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 12 }}>
                  <UserCheck size={18} style={{ color: "var(--primary)", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>Eligibility</div>
                    <div style={{ fontSize: 15, color: "var(--text-dark)" }}>{course.eligibility}</div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 12 }}>
                  <Monitor size={18} style={{ color: "var(--primary)", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>Mode</div>
                    <div style={{ fontSize: 15, color: "var(--text-dark)" }}>{course.mode}</div>
                  </div>
                </div>

                {course.lecturer && (
                    <div style={{ display: "flex", gap: 12 }}>
                      <Mic size={18} style={{ color: "var(--primary)", flexShrink: 0, marginTop: 2 }} />
                      <div>
                        <div style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>Lecturer</div>
                        <div style={{ fontSize: 15, color: "var(--text-dark)" }}>{course.lecturer}</div>
                      </div>
                    </div>
                )}

                <div style={{ display: "flex", gap: 12 }}>
                  <BookOpen size={18} style={{ color: "var(--primary)", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>Focus Areas</div>
                    <div style={{ fontSize: 14, color: "var(--text-dark)", lineHeight: 1.5 }}>{course.focus}</div>
                  </div>
                </div>
              </div>
              
              <button className="btn-primary" style={{ marginTop: 30, width: "100%", padding: "12px", justifyContent: "center" }}>
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
