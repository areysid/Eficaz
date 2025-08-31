import React, { useState } from "react";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

interface Course {
  id: number;
  title: string;
  author: string;
  category: string;
  price: "Free" | "Paid";
  image: string;
  authorImage: string;
  date: string;
}

const allCourses: Course[] = [
  {
    id: 1,
    title: "Recruitement Dashboards using Power BI",
    author: "Prateek Jadia",
    category: "AI",
    price: "Paid",
    image: "/courses/powerbi.jpg",
    authorImage: "/leaders/Prateek.jpg",
    date: "2025-08-01",
  },
  {
    id: 2,
    title: "HR Analytics Bootcamp",
    author: "Neha Jadia",
    category: "Analytics",
    price: "Free",
    image: "/courses/HR.png",
    authorImage: "/leaders/neha.jpg",
    date: "2025-07-25",
  },
  {
    id: 3,
    title: "Stakeholder Management",
    author: "Pragya Chandak",
    category: "Learning",
    price: "Paid",
    image: "/courses/stake.png",
    authorImage: "/leaders/rinki.jpg",
    date: "2025-07-15",
  },
  {
    id: 4,
    title: "Communication skills for Recruiters",
    author: "Pragya Chandak",
    category: "DEI",
    price: "Free",
    image: "/courses/communication.png",
    authorImage: "/leaders/rinki.jpg",
    date: "2025-06-30",
  },
];

const Courses: React.FC = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [author, setAuthor] = useState<string | null>(null);
  const [price, setPrice] = useState<string | null>(null);
  const [sort, setSort] = useState<"alpha" | "date" | null>(null);

  const filteredCourses = allCourses
    .filter((course) =>
      course.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((course) => (category ? course.category === category : true))
    .filter((course) => (author ? course.author === author : true))
    .filter((course) => (price ? course.price === price : true))
    .sort((a, b) => {
      if (sort === "alpha") return a.title.localeCompare(b.title);
      if (sort === "date")
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      return 0;
    });

  const latestCourses = [...allCourses]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <MainNavigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 w-full border-b pt-20">
        <div className="container mx-auto px-6 py-4 text-sm text-muted-foreground">
          <a href="/" className="hover:text-green-600">
            Home
          </a>{" "}
          &gt; <span className="text-green-600">All Courses</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-10 flex flex-1 gap-8">
        {/* Courses Section */}
        <div className="w-full lg:w-3/4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
              <motion.div
                  key={course.id}
                  className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition flex flex-col"
                  whileHover={{ scale: 1.02 }}
              >
                  {/* Course Image */}
                  <div className="relative h-60 w-full">
                      <img
                          src={course.image}
                          alt={course.title}
                          className="h-full w-full object-cover"
                      />
                      <img
                          src={course.authorImage}
                          alt={course.author}
                          className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-2 border-white shadow-md"
                      />
                  </div>

                  {/* Details */}
                  <div className="px-4 pt-4 pb-3 text-center">
                    <p className="mt-4 text-sm text-muted-foreground">
                    {course.author}
                    </p>
                      <h3 className="font-semibold text-lg">{course.title}</h3>
                  </div>

                  {/* Pushes price to bottom */}
                  <div className="flex-1"></div>

                  {/* Price Section */}
                  <div className="bg-gray-100 py-2 text-center font-medium text-green-700">
                      {course.price}
                  </div>
              </motion.div>

          ))}
        </div>

        {/* Filters & Sidebar */}
        <aside className="hidden lg:block w-1/4 space-y-6">
          <div className="bg-white shadow-md rounded-lg p-4 space-y-4">
            <h3 className="font-bold text-lg">Filters</h3>

            {/* Search */}
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border px-3 py-2 rounded-md text-sm"
            />

            {/* Categories */}
            <div>
              <h4 className="font-medium">Categories</h4>
              {["AI", "Analytics", "Learning", "DEI"].map((cat) => (
                <label key={cat} className="block text-sm">
                  <input
                    type="radio"
                    name="category"
                    checked={category === cat}
                    onChange={() => setCategory(cat)}
                    className="mr-2"
                  />
                  {cat}
                </label>
              ))}
              <button
                onClick={() => setCategory(null)}
                className="text-xs text-green-600 mt-1"
              >
                Clear
              </button>
            </div>

            {/* Author */}
            <div>
              <h4 className="font-medium">Author</h4>
              {["Prateek Jadia", "Neha Jadia", "Pragya Chandak",].map(
                (auth) => (
                  <label key={auth} className="block text-sm">
                    <input
                      type="radio"
                      name="author"
                      checked={author === auth}
                      onChange={() => setAuthor(auth)}
                      className="mr-2"
                    />
                    {auth}
                  </label>
                )
              )}
              <button
                onClick={() => setAuthor(null)}
                className="text-xs text-green-600 mt-1"
              >
                Clear
              </button>
            </div>

            {/* Price */}
            <div>
              <h4 className="font-medium">Price</h4>
              {["Free", "Paid"].map((p) => (
                <label key={p} className="block text-sm">
                  <input
                    type="radio"
                    name="price"
                    checked={price === p}
                    onChange={() => setPrice(p)}
                    className="mr-2"
                  />
                  {p}
                </label>
              ))}
              <button
                onClick={() => setPrice(null)}
                className="text-xs text-green-600 mt-1"
              >
                Clear
              </button>
            </div>

            {/* Sort */}
            <div>
              <h4 className="font-medium">Sort By</h4>
              <select
                value={sort || ""}
                onChange={(e) =>
                  setSort(e.target.value ? (e.target.value as any) : null)
                }
                className="w-full border px-2 py-1 rounded-md text-sm"
              >
                <option value="">Default</option>
                <option value="alpha">Alphabetical</option>
                <option value="date">Date Published</option>
              </select>
            </div>
          </div>

          {/* Latest Courses */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="font-bold text-lg mb-4">Latest Courses</h3>
            {latestCourses.map((course) => (
              <div key={course.id} className="flex items-center mb-3">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-12 h-12 object-cover rounded-md mr-3"
                />
                <div>
                  <p className="text-sm font-medium">{course.title}</p>
                  <p className="text-xs text-green-600">{course.price}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Courses;
