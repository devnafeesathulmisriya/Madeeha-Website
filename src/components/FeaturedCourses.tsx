"use client";
import { useState } from "react";
import Image from "next/image";
import { Clock, UserCheck, BookOpen, Monitor, Mic, Star, X } from "lucide-react";

type Course = {
  title: string;
  subtitle: string;
  duration: string;
  eligibility: string;
  focus: string;
  mode: string;
  lecturer?: string;
  special?: string;
  image: string;
};

const courses: Course[] = [
  {
    title: "Madeeha",
    subtitle: "",
    duration: "3 Months",
    eligibility: "Women aged 20 years and above",
    focus: "Seerah of Prophet Muhammad ﷺ, Salam Baith, sharaful Anam moulid, Kithabul muthafarid",
    mode: "Online",
    lecturer: "PCH Rafeeh Ahsani",
    image: "/course-quran.png"
  },
  {
    title: "الغوثة",
    subtitle: "",
    duration: "6 Months",
    eligibility: "Women",
    focus: "Muhyadheen mala, Aqeedah, Worship, Daily Islamic Life, Practical Islamic Guidance",
    mode: "Online",
    lecturer: "Jasir Ahsani Gujrath",
    special: "Free Entry",
    image: "/alautsa.jpeg"
  },
  {
    title: "Madeeha Da'awa College",
    subtitle: "",
    duration: "5 Years",
    eligibility: "Women interested in Islamic learning and Da'wah",
    focus: "Islamic Studies from meezaan, Da'wah Training, Personality Development, Practical Learning",
    mode: "Online",
    image: "/course-dawa.png"
  }
];

interface FeaturedCoursesProps {
  onRegisterClick: (courseTitle: string) => void;
}

export default function FeaturedCourses({ onRegisterClick }: FeaturedCoursesProps) {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <section className="section" style={{ background: "var(--bg)", minHeight: "100vh", display: "flex", alignItems: "center", padding: "60px 0" }} id="courses">
      <div className="container" style={{ width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div className="ornament">
            <span style={{ color: "var(--primary)", fontSize: 18 }}>✦</span>
          </div>
          <h2 className="section-title" style={{ marginBottom: 12 }}>
            Our <span>Courses</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Comprehensive Islamic education programs designed specifically for women.
          </p>
        </div>

        <div className="courses-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {courses.map((course, i) => (
            <div
              key={i}
              className="card"
              style={{ padding: "0", cursor: "pointer", animationDelay: `${i * 0.1}s`, display: "flex", flexDirection: "column", border: "1px solid rgba(255, 255, 255, 0.4)", borderRadius: "20px" }}
              onClick={() => setSelectedCourse(course)}
            >
              <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", backgroundColor: "var(--bg)", overflow: "hidden", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}>
                {course.special && (
                  <div style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    zIndex: 10,
                    display: "inline-block",
                    padding: "6px 12px",
                    borderRadius: "50px",
                    background: "var(--primary)",
                    color: "white",
                    fontSize: 11,
                    fontWeight: 700,
                    fontFamily: "Inter, sans-serif",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                  }}>
                    <Star size={10} style={{ display: "inline", marginRight: 4, verticalAlign: "middle" }} />
                    {course.special}
                  </div>
                )}
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  style={{ objectFit: "cover", transition: "transform 0.3s ease" }}
                  className="course-img"
                />
              </div>
              <div style={{ padding: "24px", textAlign: "center", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: 22, fontWeight: 700, marginBottom: 4, color: "var(--text-dark)" }}>
                  {course.title}
                </h3>
                {course.subtitle && (
                  <p style={{ fontSize: 14, color: "var(--text-muted)", fontFamily: "Inter, sans-serif" }}>
                    {course.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Course Details */}
      {selectedCourse && (
        <div className="modal-overlay" onClick={() => setSelectedCourse(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()} style={{ position: "relative", padding: "32px", display: "flex", flexDirection: "column", maxHeight: "90vh", overflowY: "auto", background: "var(--bg)", boxShadow: "var(--shadow-neu-raised)", border: "1px solid rgba(255, 255, 255, 0.5)" }}>
            <button
              onClick={() => setSelectedCourse(null)}
              style={{ position: "absolute", top: 20, right: 20, background: "var(--bg)", border: "1px solid rgba(255, 255, 255, 0.5)", boxShadow: "var(--shadow-neu-raised-sm)", width: 36, height: 36, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--text-dark)" }}
            >
              <X size={18} />
            </button>

            <div style={{ marginBottom: 24, paddingRight: 32 }}>
              {selectedCourse.special && (
                <div style={{ display: "inline-block", padding: "4px 10px", borderRadius: "50px", background: "var(--primary)", color: "white", fontSize: 11, fontWeight: 700, fontFamily: "Inter, sans-serif", marginBottom: 12 }}>
                  <Star size={10} style={{ display: "inline", marginRight: 4, verticalAlign: "middle" }} />
                  {selectedCourse.special}
                </div>
              )}
              <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: 28, fontWeight: 700, marginBottom: 8, color: "var(--text-dark)", lineHeight: 1.2 }}>
                {selectedCourse.title}
              </h3>
              {selectedCourse.subtitle && (
                <p style={{ fontSize: 15, color: "var(--text-muted)", fontFamily: "Inter, sans-serif" }}>
                  {selectedCourse.subtitle}
                </p>
              )}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16, flex: 1, backgroundColor: "var(--bg)", border: "1px solid rgba(255, 255, 255, 0.3)", boxShadow: "var(--shadow-neu-sunken-sm)", padding: "24px", borderRadius: "16px", marginBottom: 24 }}>
              <div style={{ display: "flex", gap: 12 }}>
                <Clock size={18} style={{ color: "var(--primary)", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>Duration</div>
                  <div style={{ fontSize: 15, color: "var(--text-dark)", fontWeight: 500 }}>{selectedCourse.duration}</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 12 }}>
                <UserCheck size={18} style={{ color: "var(--primary)", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>Eligibility</div>
                  <div style={{ fontSize: 15, color: "var(--text-dark)", fontWeight: 500 }}>{selectedCourse.eligibility}</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 12 }}>
                <Monitor size={18} style={{ color: "var(--primary)", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>Mode</div>
                  <div style={{ fontSize: 15, color: "var(--text-dark)", fontWeight: 500 }}>{selectedCourse.mode}</div>
                </div>
              </div>

              {selectedCourse.lecturer && (
                <div style={{ display: "flex", gap: 12 }}>
                  <Mic size={18} style={{ color: "var(--primary)", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>Lecturer</div>
                    <div style={{ fontSize: 15, color: "var(--text-dark)", fontWeight: 500 }}>{selectedCourse.lecturer}</div>
                  </div>
                </div>
              )}

              <div style={{ display: "flex", gap: 12 }}>
                <BookOpen size={18} style={{ color: "var(--primary)", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>Focus Areas</div>
                  <div style={{ fontSize: 14, color: "var(--text-dark)", lineHeight: 1.5, fontWeight: 500 }}>{selectedCourse.focus}</div>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                onRegisterClick(selectedCourse.title);
                setSelectedCourse(null);
              }}
              className="btn-primary"
              style={{ width: "100%", padding: "14px", justifyContent: "center", fontSize: 15, borderRadius: "50px", cursor: "pointer" }}
            >
              Enroll Now
            </button>
          </div>
        </div>
      )}
      <style>{`
        .course-img:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
