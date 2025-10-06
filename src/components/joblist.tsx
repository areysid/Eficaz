"use client";

import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Search } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";

interface Job {
  id: string;
  position_title: string;
  city: string;
  state: string;
  country: string;
  job_status: string;
  updated: string;
  created: string;
  modified: string;
  requisition_description: string;
  apply_job: string;
  work_model?: string;
  job_type?: string;
}

export default function JobList() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    sortOrder: "",
    workModel: "",
    jobType: "",
    country: "",
    state: "",
    city: "",
  });

  const jobsPerPage = 20;

  const countries = Array.from(new Set(jobs.map((j) => j.country))).sort();
  const states = filters.country
    ? Array.from(
        new Set(
          jobs.filter((j) => j.country === filters.country).map((j) => j.state)
        )
      ).sort()
    : [];
  const cities = filters.state
    ? Array.from(
        new Set(
          jobs.filter((j) => j.state === filters.state).map((j) => j.city)
        )
      ).sort()
    : [];
  const jobTypes = Array.from(
    new Set(jobs.map((j) => j.job_type).filter(Boolean))
  ).sort();

  useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true);
        const res = await axios.get("/api/ceipal");
        const activeJobs = res.data.jobs.filter(
          (j: Job) => j.job_status === "Active"
        );
        setJobs(activeJobs);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);

  const filteredJobs = useMemo(() => {
    let filtered = [...jobs];

    if (searchQuery)
      filtered = filtered.filter((job) =>
        job.position_title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    if (filters.workModel)
      filtered = filtered.filter((job) => job.work_model === filters.workModel);
    if (filters.jobType)
      filtered = filtered.filter((job) => job.job_type === filters.jobType);
    if (filters.country)
      filtered = filtered.filter((job) => job.country === filters.country);
    if (filters.state)
      filtered = filtered.filter((job) => job.state === filters.state);
    if (filters.city)
      filtered = filtered.filter((job) => job.city === filters.city);

    if (filters.sortOrder === "created_asc")
      filtered.sort(
        (a, b) => new Date(a.created).getTime() - new Date(b.created).getTime()
      );
    if (filters.sortOrder === "created_desc")
      filtered.sort(
        (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
      );
    if (filters.sortOrder === "modified_asc")
      filtered.sort(
        (a, b) =>
          new Date(a.modified).getTime() - new Date(b.modified).getTime()
      );
    if (filters.sortOrder === "modified_desc")
      filtered.sort(
        (a, b) =>
          new Date(b.modified).getTime() - new Date(a.modified).getTime()
      );

    return filtered;
  }, [jobs, searchQuery, filters]);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const displayedJobs = filteredJobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

  const handleFilterChange = (field: string, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
    if (field === "country")
      setFilters((prev) => ({ ...prev, state: "", city: "" }));
    if (field === "state") setFilters((prev) => ({ ...prev, city: "" }));
  };

  const clearFilters = () => {
    setFilters({
      sortOrder: "",
      workModel: "",
      jobType: "",
      country: "",
      state: "",
      city: "",
    });
  };

  return (
    <>
      <MainNavigation />
      <div className="mt-12" />

      {loading && (
        <div className="w-full py-4 px-4 sm:px-0">
          <div className="h-1 w-full bg-emerald-200 relative overflow-hidden rounded">
            <div className="absolute h-1 bg-emerald-500 w-1/3 animate-loadingBar"></div>
          </div>
          <p className="mt-2 text-center text-emerald-600 font-semibold text-sm sm:text-base">
            Loading Jobs... (can sometimes take up to 1 minute)
          </p>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col sm:flex-row gap-6">
        {/* Filters */}
        <div className="sm:w-[24%] w-full">
          {/* Mobile filter accordion */}
          <details className="sm:hidden mb-4 border rounded-lg overflow-hidden">
            <summary className="cursor-pointer bg-emerald-600 text-white px-4 py-2 font-semibold text-center">
              Filters
            </summary>
            <div className="p-4 flex flex-col gap-3 text-gray-700">
              <FilterFields
                filters={filters}
                handleFilterChange={handleFilterChange}
                countries={countries}
                states={states}
                cities={cities}
                jobTypes={jobTypes}
                clearFilters={clearFilters}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </details>

          {/* Desktop filters */}
          <div className="hidden sm:flex flex-col gap-4 text-gray-700">
            <h2 className="font-semibold text-lg mb-2">Filters</h2>
            <FilterFields
              filters={filters}
              handleFilterChange={handleFilterChange}
              countries={countries}
              states={states}
              cities={cities}
              jobTypes={jobTypes}
              clearFilters={clearFilters}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>

        {/* Jobs Section */}
        <div className="sm:w-[76%] w-full flex flex-col gap-6">
          {/* Search */}
          <div className="flex items-center gap-2 mb-4">
            <Search className="text-emerald-600 w-5 h-5 sm:w-6 sm:h-6" />
            <input
              type="text"
              placeholder="Search for jobs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border p-2 rounded w-full text-sm sm:text-base"
            />
          </div>

          {displayedJobs.length === 0 && !loading ? (
            <p className="text-gray-500 text-center text-sm sm:text-base">
              No jobs found.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {displayedJobs.map((job) => (
                <Card
                  key={job.id}
                  className="hover:shadow-lg transition-shadow border-l-4 border-emerald-500"
                >
                  <CardContent className="p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl font-bold text-emerald-700 mb-2">
                      {job.position_title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-3 text-gray-500 mb-2 text-sm">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" /> {job.city}, {job.state}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />{" "}
                        {(() => {
                          const dateStr = job.modified || job.updated;
                          const date = new Date(dateStr);
                          const now = new Date();
                          const diffMs = now.getTime() - date.getTime();
                          const diffWeeks = Math.floor(
                            diffMs / (1000 * 60 * 60 * 24 * 7)
                          );
                          const diffDays = Math.floor(
                            diffMs / (1000 * 60 * 60 * 24)
                          );

                          if (diffWeeks > 0)
                            return `${diffWeeks} week${
                              diffWeeks > 1 ? "s" : ""
                            } ago`;
                          if (diffDays > 0)
                            return `${diffDays} day${
                              diffDays > 1 ? "s" : ""
                            } ago`;
                          return "Today";
                        })()}
                      </span>
                    </div>
                    <p
                      className="text-gray-700 text-sm line-clamp-4 mb-2"
                      dangerouslySetInnerHTML={{
                        __html: job.requisition_description,
                      }}
                    ></p>
                    <a
                      href={job.apply_job || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:underline font-semibold"
                    >
                      Apply Now
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-8">
              <Button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-full sm:w-auto"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              <span className="text-sm sm:text-base">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="w-full sm:w-auto"
              >
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

/* Helper component for filter dropdowns */
function FilterFields({
  filters,
  handleFilterChange,
  countries,
  states,
  cities,
  jobTypes,
  clearFilters,
  setCurrentPage,
}) {
  return (
    <>
      <select
        className="border p-2 rounded text-sm"
        value={filters.sortOrder}
        onChange={(e) => handleFilterChange("sortOrder", e.target.value)}
      >
        <option value="">Sort by Date</option>
        <option value="created_asc">Date Posted - Oldest</option>
        <option value="created_desc">Date Posted - Newest</option>
        <option value="modified_asc">Date Modified - Oldest</option>
        <option value="modified_desc">Date Modified - Newest</option>
      </select>

      <select
        className="border p-2 rounded text-sm"
        value={filters.workModel}
        onChange={(e) => handleFilterChange("workModel", e.target.value)}
      >
        <option value="">Work Model</option>
        <option value="Remote">Remote</option>
        <option value="Hybrid">Hybrid</option>
        <option value="In Office">In Office</option>
      </select>

      <select
        className="border p-2 rounded text-sm"
        value={filters.jobType}
        onChange={(e) => handleFilterChange("jobType", e.target.value)}
      >
        <option value="">Job Type</option>
        {jobTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <select
        className="border p-2 rounded text-sm"
        value={filters.country}
        onChange={(e) => handleFilterChange("country", e.target.value)}
      >
        <option value="">Country</option>
        {countries.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <select
        className="border p-2 rounded text-sm"
        value={filters.state}
        onChange={(e) => handleFilterChange("state", e.target.value)}
        disabled={!filters.country}
      >
        <option value="">State</option>
        {states.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <select
        className="border p-2 rounded text-sm"
        value={filters.city}
        onChange={(e) => handleFilterChange("city", e.target.value)}
        disabled={!filters.state}
      >
        <option value="">City</option>
        {cities.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <Button
        className="bg-emerald-600 text-white mt-2 text-sm"
        onClick={() => setCurrentPage(1)}
      >
        Show Results
      </Button>
      <Button
        className="bg-gray-300 text-gray-700 text-sm"
        onClick={clearFilters}
      >
        Clear Filters
      </Button>
    </>
  );
}
