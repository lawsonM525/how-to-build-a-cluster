import { Server, Cpu, Layers, Terminal, BookOpen, Home, Shield, Database } from 'lucide-react';

export const navigation = [
  {
    title: "Introduction",
    path: "/",
    icon: Home,
    chapters: []
  },
  {
    title: "Conceptual Foundations",
    path: "/foundations",
    icon: BookOpen,
    chapters: [
      { title: "Ch 1: World of Cluster Computing", path: "/foundations/cluster-computing" }
    ]
  },
  {
    title: "Hardware Engineering",
    path: "/hardware",
    icon: Server,
    chapters: [
      { title: "Ch 2: Designing the Iron", path: "/hardware/design" }
    ]
  },
  {
    title: "Software Foundation",
    path: "/software",
    icon: Terminal,
    chapters: [
      { title: "Ch 3: OS Selection", path: "/software/os" },
      { title: "Ch 4: Network Configuration", path: "/software/network" }
    ]
  },
  {
    title: "Infrastructure Services",
    path: "/infrastructure",
    icon: Database,
    chapters: [
      { title: "Ch 5: Shared Storage", path: "/infrastructure/storage" },
      { title: "Ch 6: User Management", path: "/infrastructure/users" },
      { title: "Ch 7: Cluster Management", path: "/infrastructure/management" }
    ]
  },
  {
    title: "Workload Manager",
    path: "/workload",
    icon: Layers,
    chapters: [
      { title: "Ch 8: Job Schedulers", path: "/workload/schedulers" }
    ]
  },
  {
    title: "Parallel Programming",
    path: "/parallel",
    icon: Cpu,
    chapters: [
      { title: "Ch 9: Frameworks", path: "/parallel/frameworks" },
      { title: "Ch 10: Optimization", path: "/parallel/optimization" }
    ]
  },
  {
    title: "Validation & Security",
    path: "/validation",
    icon: Shield,
    chapters: [
      { title: "Ch 11: Benchmarking", path: "/validation/benchmarking" },
      { title: "Ch 12: Security & Hardening", path: "/validation/security" }
    ]
  },
  {
    title: "Resources",
    path: "/resources",
    icon: BookOpen,
    chapters: [
      { title: "Sources & References", path: "/resources/sources" }
    ]
  }
];
