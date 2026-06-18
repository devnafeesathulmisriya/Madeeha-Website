"use client";
import Image from "next/image";
import { Clock, ArrowRight, Tag } from "lucide-react";

const posts = [
  {
    id: 1,
    image: "/blog-1.png",
    category: "Islamic Education",
    date: "June 10, 2026",
    readTime: "5 min read",
    title: "Top Online Madrasa in Abu Dhabi & UAE for Women",
    excerpt:
      "Discover the best virtual madrasa programs available for Muslim women living in the UAE. We review curriculum, teacher quality, flexibility, and cost.",
    author: "Ustadha Sarah Khan",
    authorEmoji: "👩‍🏫",
  },
  {
    id: 2,
    image: "/blog-2.png",
    category: "Women & Learning",
    date: "June 5, 2026",
    readTime: "7 min read",
    title: "7 Benefits of Islamic Online Education for Women",
    excerpt:
      "From flexible timings to faith-friendly environments, explore why thousands of Muslim women are choosing online Islamic education for themselves and their children.",
    author: "Dr. Fatima Ahmed",
    authorEmoji: "🧕",
  },
  {
    id: 3,
    image: "/blog-3.png",
    category: "Early Education",
    date: "May 28, 2026",
    readTime: "4 min read",
    title: "Online Preschool Programs in GCC — A Complete Guide",
    excerpt:
      "How to choose the right Islamic preschool program for your child living in Qatar, UAE, Kuwait, or Saudi Arabia. A comprehensive parent's guide.",
    author: "Umm Abdullah",
    authorEmoji: "👩‍🎓",
  },
];

export default function BlogPreview() {
  return (
    <section id="blog" className="section" style={{ background: "white" }}>
      <div className="container">
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
              <Tag size={14} /> Our Blog
            </div>
            <h2 className="section-title" style={{ marginBottom: 8 }}>
              Insights & <span>Resources</span>
            </h2>
            <p style={{ fontSize: 16, color: "var(--text-muted)", fontFamily: "Inter, sans-serif" }}>
              Articles to guide your Islamic education journey.
            </p>
          </div>
          <a href="#all-blogs" className="btn-outline" style={{ flexShrink: 0 }}>
            View All Posts <ArrowRight size={16} />
          </a>
        </div>

        {/* Blog Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 28,
          }}
        >
          {posts.map((post, i) => (
            <article key={post.id} className="blog-card" style={{ animationDelay: `${i * 0.15}s` }}>
              {/* Thumbnail */}
              <div className="img-zoom" style={{ height: 200, position: "relative" }}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    padding: "5px 12px",
                    borderRadius: "50px",
                    background: "rgba(255,255,255,0.95)",
                    color: "var(--primary)",
                    fontSize: 11,
                    fontWeight: 700,
                    fontFamily: "Inter, sans-serif",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "24px 24px 20px" }}>
                {/* Meta */}
                <div
                  style={{
                    display: "flex",
                    gap: 16,
                    marginBottom: 14,
                    fontSize: 12,
                    color: "var(--text-muted)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  <span>{post.date}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <Clock size={11} /> {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: 19,
                    fontWeight: 700,
                    lineHeight: 1.3,
                    color: "var(--text-dark)",
                    marginBottom: 12,
                    transition: "color 0.2s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--primary)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-dark)")}
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--text-muted)",
                    lineHeight: 1.7,
                    marginBottom: 20,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderTop: "1px solid var(--green-100)",
                    paddingTop: 16,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 22 }}>{post.authorEmoji}</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-dark)", fontFamily: "Inter, sans-serif" }}>
                      {post.author}
                    </span>
                  </div>
                  <a
                    href="#"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--primary)",
                      textDecoration: "none",
                      fontFamily: "Inter, sans-serif",
                      transition: "gap 0.2s",
                    }}
                  >
                    Read More <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
