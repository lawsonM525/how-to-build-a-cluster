import { Server, Layers, Terminal, BookOpen, Home, Activity, Shield, Box } from 'lucide-react';

export const navigation = [
  {
    title: "Part I: Foundations",
    path: "/foundations",
    icon: Home,
    chapters: [
      { title: "Ch 1: Intro to Clusters", path: "/foundations/intro" }
    ]
  },
  {
    title: "Part II: Hardware",
    path: "/hardware",
    icon: Server,
    chapters: [
      { title: "Ch 2: Designing the Frame", path: "/hardware/design" }
    ]
  },
  {
    title: "Part III: Software Setup",
    path: "/software-setup",
    icon: Terminal,
    chapters: [
      { title: "Ch 3: OS Selection", path: "/software-setup/os" },
      { title: "Ch 4: Network Config", path: "/software-setup/network" }
    ]
  },
  {
    title: "Part IV: Infrastructure",
    path: "/infrastructure",
    icon: Layers,
    chapters: [
      { title: "Ch 5: Shared Storage", path: "/infrastructure/storage" },
      { title: "Ch 6: User Management", path: "/infrastructure/users" },
      { title: "Ch 7: Cluster Management", path: "/infrastructure/management" }
    ]
  },
  {
    title: "Part V: Workload Manager",
    path: "/scheduler",
    icon: Activity,
    chapters: [
      { title: "Ch 8: Job Schedulers", path: "/scheduler/slurm" }
    ]
  },
  {
    title: "Part VI: Comm & Apps",
    path: "/apps",
    icon: Box,
    chapters: [
      { title: "Ch 9: Parallel Frameworks", path: "/apps/mpi" },
      { title: "Ch 10: Optimization", path: "/apps/optimization" }
    ]
  },
  {
    title: "Part VII: Perf & Sec",
    path: "/perf-sec",
    icon: Shield,
    chapters: [
      { title: "Ch 11: Benchmarking", path: "/perf-sec/benchmarking" },
      { title: "Ch 12: Security", path: "/perf-sec/security" }
    ]
  },
  {
    title: "Appendix",
    path: "/appendix",
    icon: BookOpen,
    chapters: [
      { title: "Resources & Glossary", path: "/appendix/resources" }
    ]
  }
];
