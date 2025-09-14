import React, { useEffect, useState } from "react";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

interface Course {
  Title: string;
  Sections: string;
  Lectures: string;
  Status: "DRAFT" | "LIVE";
  Image: string;
  Author: string;
  "Redirect URL": string;
}

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [authorFilter, setAuthorFilter] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<"DRAFT" | "LIVE" | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch("/api/getcourses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch courses:", err);
        setLoading(false);
      });
  }, []);

  const filteredCourses = courses
    .filter((c) => c.Title.toLowerCase().includes(search.toLowerCase()))
    .filter((c) => (authorFilter ? c.Author === authorFilter : true))
    .filter((c) => (statusFilter ? c.Status === statusFilter : true));

  const featuredCourses = courses.slice(0, Math.min(3, courses.length));

  const getAuthorImage = (author: string) => {
    const imgName = author.replace(/\s/g, "") + ".jpg";
    return `/Authors/${imgName}`;
  };

  const getStatusText = (status: "DRAFT" | "LIVE") =>
    status === "DRAFT" ? "Coming Shortly!" : "Live!";

  return (
    <div className="flex flex-col min-h-screen">
      <MainNavigation />

      {/* Loading Bar */}
      {loading && (
        <div className="w-full py-4 mt-12">
          <div className="h-1 w-full bg-emerald-200 relative overflow-hidden rounded">
            <div className="absolute h-1 bg-emerald-500 w-1/3 animate-loadingBar"></div>
          </div>
          <p className="mt-2 text-center text-emerald-600 font-semibold">
            Loading Courses
          </p>
        </div>
      )}

      {/* Breadcrumb */}
      <div className="bg-gray-50 w-full border-b pt-16">
        <div className="container mx-auto px-6 py-4 text-sm text-muted-foreground">
          <a href="/" className="hover:text-green-600">Home</a> &gt;{" "}
          <span className="text-green-600">All Courses</span>
        </div>
      </div>

      <main className="container mx-auto px-6 py-10 flex flex-1 gap-8">
        {/* Courses Section */}
        <div className="w-full lg:w-3/4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, idx) => (
            <a
              key={idx}
              href={course["Redirect URL"]}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition flex flex-col"
                whileHover={{ scale: 1.02 }}
                style={{ minHeight: "440px" }} // fixed height for all cards
              >
                <div className="relative h-60 w-full">
                  <img
                    src={course.Image || "/courses/placeholder.jpg"}
                    alt={course.Title}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "/courses/placeholder.jpg";
                    }}
                  />
                  <img
                    src={getAuthorImage(course.Author)}
                    alt={course.Author}
                    className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-2 border-white shadow-md"
                  />
                </div>

                <div className="px-4 pt-4 pb-2 text-center flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground pt-4">{course.Author}</p>
                    <p className="font-semibold text-lg mt-1">{course.Title}</p>
                  </div>
                  <div className="bg-gray-100 py-1 mt-2 text-center font-medium text-green-700">
                    {getStatusText(course.Status)}
                  </div>
                </div>
              </motion.div>
            </a>
          ))}
        </div>

        {/* Filters & Sidebar */}
        <aside className="hidden lg:block w-1/4 space-y-6">
          <div className="bg-white shadow-md rounded-lg p-4 space-y-4">
            <h3 className="font-bold text-lg">Filters</h3>

            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border px-3 py-2 rounded-md text-sm"
            />

            {/* Authors */}
            <div>
              <h4 className="font-medium">Author</h4>
              {[...new Set(courses.map((c) => c.Author))].map((auth) => (
                <label key={auth} className="block text-sm">
                  <input
                    type="radio"
                    name="author"
                    checked={authorFilter === auth}
                    onChange={() => setAuthorFilter(auth)}
                    className="mr-2"
                  />
                  {auth}
                </label>
              ))}
              <button
                onClick={() => setAuthorFilter(null)}
                className="text-xs text-green-600 mt-1"
              >
                Clear
              </button>
            </div>

            {/* Status */}
            <div>
              <h4 className="font-medium">Status</h4>
              {["DRAFT", "LIVE"].map((s) => (
                <label key={s} className="block text-sm">
                  <input
                    type="radio"
                    name="status"
                    checked={statusFilter === s}
                    onChange={() => setStatusFilter(s as "DRAFT" | "LIVE")}
                    className="mr-2"
                  />
                  {getStatusText(s as "DRAFT" | "LIVE")}
                </label>
              ))}
              <button
                onClick={() => setStatusFilter(null)}
                className="text-xs text-green-600 mt-1"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Featured Courses */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="font-bold text-lg mb-4">Featured Courses</h3>
            {featuredCourses.map((course, idx) => (
              <div key={idx} className="flex items-center mb-3">
                <img
                  src={course.Image || "/courses/placeholder.jpg"}
                  alt={course.Title}
                  className="w-12 h-12 object-cover rounded-md mr-3"
                />
                <div>
                  <p className="text-sm font-medium">{course.Title}</p>
                  <p className="text-xs text-green-600">{getStatusText(course.Status)}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
