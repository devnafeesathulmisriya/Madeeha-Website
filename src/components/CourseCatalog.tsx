"use client";
import { useState } from "react";
import Image from "next/image";
import { Star, Users, BookOpen, ArrowRight, ShoppingCart } from "lucide-react";

const categories = ["All", "Quran", "Integrated Madrasa", "Islamic Dars", "K12 Tuition", "Preschool"];

const courses = [
  {
    id: 1,
    category: "Integrated Madrasa",
    image: "/course-madrasa.png",
    title: "Virtual Madrasa",
    subtitle: "Full Islamic curriculum online",
    lessons: 48,
    students: 892,
    rating: 4.9,
    reviews: 156,
    price: 49,
    badge: "Popular",
    badgeColor: "#fef3c7",
    badgeText: "#92400e",
  },
  {
    id: 2,
    category: "Preschool",
    image: "/course-preschool.png",
    title: "Suffa Kids",
    subtitle: "Islamic preschool program",
    lessons: 24,
    students: 430,
    rating: 5.0,
    reviews: 88,
    price: 0,
    badge: "Free",
    badgeColor: "#dcfce7",
    badgeText: "#166534",
  },
  {
    id: 3,
    category: "Quran",
    image: "/course-quran.png",
    title: "Quran Recitation",
    subtitle: "Tajweed & memorization",
    lessons: 36,
    students: 1240,
    rating: 4.8,
    reviews: 214,
    price: 35,
    badge: "Bestseller",
    badgeColor: "#dbeafe",
    badgeText: "#1e40af",
  },
  {
    id: 4,
    category: "K12 Tuition",
    image: "/course-k12.png",
    title: "K12 Online Tuition",
    subtitle: "Complete school curriculum",
    lessons: 60,
    students: 560,
    rating: 4.7,
    reviews: 97,
    price: 79,
    badge: "New",
    badgeColor: "#f3e8ff",
    badgeText: "#7e22ce",
  },
  {
    id: 5,
    category: "Islamic Dars",
    image: "/course-madrasa.png",
    title: "Islamic Dars e Nizami",
    subtitle: "Advanced classical Islamic learning",
    lessons: 72,
    students: 320,
    rating: 4.9,
    reviews: 62,
    price: 59,
    badge: "Popular",
    badgeColor: "#fef3c7",
    badgeText: "#92400e",
  },
  {
    id: 6,
    category: "Quran",
    image: "/course-quran.png",
    title: "Quran for Sisters",
    subtitle: "Women-only Quran classes",
    lessons: 30,
    students: 780,
    rating: 5.0,
    reviews: 143,
    price: 0,
    badge: "Free",
    badgeColor: "#dcfce7",
    badgeText: "#166534",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={13}
          fill={s <= Math.round(rating) ? "#f59e0b" : "none"}
          style={{ color: s <= Math.round(rating) ? "#f59e0b" : "#d1d5db" }}
        />
      ))}
    </div>
  );
}

export default function CourseCatalog() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? courses : courses.filter((c) => c.category === active);

  return (
    <section id="courses" className="section" style={{ background: "var(--bg-subtle)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div className="ornament">
            <span style={{ color: "var(--primary)", fontSize: 18 }}>✦</span>
          </div>
          <div className="section-tag">
            <BookOpen size={14} /> Our Programs
          </div>
          <h2 className="section-title">
            Explore Our <span>Course Catalog</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Carefully crafted programs for women and children, blending Islamic
            values with modern educational excellence.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 44,
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              id={`cat-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setActive(cat)}
              style={{
                padding: "10px 22px",
                borderRadius: "50px",
                border: active === cat ? "none" : "2px solid var(--green-200)",
                background: active === cat ? "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)" : "white",
                color: active === cat ? "white" : "var(--text-mid)",
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: active === cat ? "0 6px 20px var(--shadow-green)" : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="courses-grid">
          {filtered.map((course, i) => (
            <div
              key={course.id}
              className="card"
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {/* Thumbnail */}
              <div className="img-zoom" style={{ height: 190, position: "relative" }}>
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    padding: "4px 12px",
                    borderRadius: "50px",
                    background: course.badgeColor,
                    color: course.badgeText,
                    fontSize: 12,
                    fontWeight: 700,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {course.badge}
                </div>
                {/* Category */}
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    padding: "4px 10px",
                    borderRadius: "50px",
                    background: "rgba(255,255,255,0.9)",
                    color: "var(--primary)",
                    fontSize: 11,
                    fontWeight: 600,
                    fontFamily: "Inter, sans-serif",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {course.category}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "22px 22px 20px" }}>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: 19, fontWeight: 700, marginBottom: 4, color: "var(--text-dark)" }}>
                  {course.title}
                </h3>
                <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 14, fontFamily: "Inter, sans-serif" }}>
                  {course.subtitle}
                </p>

                {/* Metadata */}
                <div style={{ display: "flex", gap: 16, marginBottom: 14 }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13, color: "var(--text-muted)", fontFamily: "Inter, sans-serif" }}>
                    <BookOpen size={13} style={{ color: "var(--primary)" }} /> {course.lessons} lessons
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13, color: "var(--text-muted)", fontFamily: "Inter, sans-serif" }}>
                    <Users size={13} style={{ color: "var(--primary)" }} /> {course.students.toLocaleString()} enrolled
                  </span>
                </div>

                {/* Rating */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
                  <StarRating rating={course.rating} />
                  <span style={{ fontSize: 13, fontWeight: 700, color: "var(--text-dark)", fontFamily: "Inter, sans-serif" }}>
                    {course.rating}
                  </span>
                  <span style={{ fontSize: 12, color: "var(--text-muted)", fontFamily: "Inter, sans-serif" }}>
                    ({course.reviews} reviews)
                  </span>
                </div>

                {/* Price + CTA */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid var(--green-100)", paddingTop: 16 }}>
                  <div>
                    {course.price === 0 ? (
                      <span style={{ fontSize: 20, fontWeight: 800, fontFamily: "Playfair Display, serif", color: "var(--primary)" }}>
                        FREE
                      </span>
                    ) : (
                      <>
                        <span style={{ fontSize: 20, fontWeight: 800, fontFamily: "Playfair Display, serif", color: "var(--primary)" }}>
                          ${course.price}
                        </span>
                        <span style={{ fontSize: 12, color: "var(--text-muted)", fontFamily: "Inter, sans-serif" }}>/mo</span>
                      </>
                    )}
                  </div>
                  <button
                    id={`enroll-${course.id}`}
                    className="btn-primary"
                    style={{ padding: "10px 20px", fontSize: 13, gap: 6 }}
                  >
                    <ShoppingCart size={14} /> Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href="#all-courses" className="btn-outline">
            View All Courses <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
