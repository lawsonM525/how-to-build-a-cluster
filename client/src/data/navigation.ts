import { Server, Network, Cpu, Layers, Terminal, BookOpen, Home } from 'lucide-react';

export const navigation = [
  {
    title: "Introduction",
    path: "/",
    icon: Home,
    chapters: []
  },
  {
    title: "Hardware",
    path: "/hardware",
    icon: Server,
    chapters: [
      { title: "Choosing Components", path: "/hardware/components" },
      { title: "Assembly Guide", path: "/hardware/assembly" },
      { title: "Power Management", path: "/hardware/power" }
    ]
  },
  {
    title: "Networking",
    path: "/network",
    icon: Network,
    chapters: [
      { title: "Topology", path: "/network/topology" },
      { title: "Switch Configuration", path: "/network/switch" },
      { title: "DNS & DHCP", path: "/network/dns-dhcp" }
    ]
  },
  {
    title: "Operating System",
    path: "/os",
    icon: Terminal,
    chapters: [
      { title: "OS Selection", path: "/os/selection" },
      { title: "Automated Install (PXE)", path: "/os/pxe" },
      { title: "Post-Install Config", path: "/os/config" }
    ]
  },
  {
    title: "Cluster Management",
    path: "/management",
    icon: Layers,
    chapters: [
      { title: "Ansible Setup", path: "/management/ansible" },
      { title: "Monitoring", path: "/management/monitoring" },
      { title: "Logging", path: "/management/logging" }
    ]
  },
  {
    title: "Applications",
    path: "/applications",
    icon: Cpu,
    chapters: [
      { title: "Kubernetes (K3s)", path: "/applications/k3s" },
      { title: "Storage (Ceph/NFS)", path: "/applications/storage" },
      { title: "Load Balancing", path: "/applications/load-balancing" }
    ]
  },
  {
    title: "Resources",
    path: "/resources",
    icon: BookOpen,
    chapters: []
  }
];
