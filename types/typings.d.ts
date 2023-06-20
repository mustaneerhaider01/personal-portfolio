interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _type: "reference";
    _ref: string;
  };
}

interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

interface PageInfo extends SanityBody {
  _type: "pageInfo";
  name: string;
  role: string;
  heroImage: Image;
  backgroundInformation: string;
  phoneNumber: string;
  email: string;
  address: string;
  profilePic: Image;
  socials: Social[];
}

interface Skill extends SanityBody {
  _type: "skill";
  title: string;
  progress: number;
  image: Image;
}

interface Project extends SanityBody {
  _type: "project";
  title: string;
  summary: string;
  image: Image;
  linkToBuild: string;
  technologies: Skill[];
}

interface Experience extends SanityBody {
  _type: "experience";
  jobTitle: string;
  company: string;
  companyImage: Image;
  dateStarted: string;
  dateEnded: string;
  isCurrentlyWorkingHere: boolean;
  points: string[];
  technologies: Skill[];
}
