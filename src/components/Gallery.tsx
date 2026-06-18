"use client";
import { Camera, Star, ImageIcon } from "lucide-react";

const galleryItems = [
  { id: 1, title: "Interactive Learning", media: "/Gallery/gallery1.jpeg", height: 300, type: "image" },
  { id: 2, title: "Online Class", media: "/Gallery/gallery2.jpeg", height: 200, type: "image" },
  { id: 3, title: "Community Event", media: "/Gallery/gallery3.jpeg", height: 240, type: "image" },
  { id: 4, title: "Student Achievement", media: "/Gallery/gallery4.jpeg", height: 320, type: "image" },
  { id: 5, title: "Graduation Ceremony", media: "/Gallery/gallery5.jpeg", height: 260, type: "image" },
  { id: 6, title: "Quran Recitation", media: "/Gallery/gallery6.jpeg", height: 200, type: "image" },
  { id: 7, title: "Campus Life", media: "/Gallery/gallery1.jpeg", height: 300, type: "image" },
  { id: 8, title: "Group Studies", media: "/Gallery/gallery3.jpeg", height: 280, type: "image" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section" style={{ background: "white" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="ornament">
            <span style={{ color: "var(--primary)", fontSize: 18 }}>✦</span>
          </div>
          <div className="section-tag">
            <Camera size={14} /> Our Moments
          </div>
          <h2 className="section-title">
            Madeeha Academy <span>Gallery</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            A glimpse into our vibrant community, engaging classes, and student achievements.
          </p>
        </div>

        {/* Masonry-like Grid Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
            alignItems: "start",
          }}
        >
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="gallery-card"
              style={{
                position: "relative",
                height: item.height,
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid var(--green-200)",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Image/Video */}
              {item.type === "video" ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 0
                  }}
                >
                  <source src={item.media} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={item.media}
                  alt={item.title}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 0
                  }}
                />
              )}

              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "40px 20px 20px",
                  background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
                  color: "white",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  zIndex: 2,
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
              >
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
