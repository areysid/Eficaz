import React from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";

interface Job {
  id: string;
  position_title: string;
  city: string;
  state: string;
  created: string;
  requisition_description: string;
  apply_job: string;
}

const JobCard: React.FC<{ job: Job }> = ({ job }) => {
  return (
    <div className="border p-4 rounded-md shadow-sm bg-white mb-4">
      <h3 className="text-lg font-semibold text-green-600">{job.position_title}</h3>
      <div className="flex items-center gap-4 text-sm text-gray-600 my-2">
        <MapPin size={16} /> <span>{job.city}, {job.state}</span>
        <Calendar size={16} /> <span>{new Date(job.created).toLocaleDateString()}</span>
      </div>
      <p className="text-gray-700 line-clamp-3">{job.requisition_description.replace(/<[^>]+>/g, '')}</p>
      <a
        href={job.apply_job}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Apply Now
      </a>
    </div>
  );
};

export default JobCard;
