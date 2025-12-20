# Website Content Guide

This guide helps you (Hi, Michael) or any other contributor locate and update the content for the How to Build a Cluster Guide.

## 📂 Content Map

The website content is located in `src/pages/`. Below is the mapping between the website sections and their source files.

### 🏠 Core
| Page | File Path |
|------|-----------|
| **Home** | `src/pages/Home.tsx` |
| **404 Not Found** | `src/pages/NotFound.tsx` |

### 📚 Part I: Foundations
| Chapter | File Path |
|---------|-----------|
| **Ch 1: Intro to Clusters** | `src/pages/foundations/Intro.tsx` |

### 🖥️ Part II: Hardware
| Chapter | File Path |
|---------|-----------|
| **Ch 2: Designing the Frame** | `src/pages/hardware/Design.tsx` |

### ⚙️ Part III: Software Setup
| Chapter | File Path |
|---------|-----------|
| **Ch 3: OS Selection** | `src/pages/software/OSSelection.tsx` |
| **Ch 4: Network Config** | `src/pages/software/NetworkConfig.tsx` |

### 🏗️ Part IV: Infrastructure
| Chapter | File Path |
|---------|-----------|
| **Ch 5: Shared Storage** | `src/pages/infrastructure/Storage.tsx` |
| **Ch 6: User Management** | `src/pages/infrastructure/Users.tsx` |
| **Ch 7: Cluster Management** | `src/pages/management/AnsibleSetup.tsx` |

### ⏱️ Part V: Workload Manager
| Chapter | File Path |
|---------|-----------|
| **Ch 8: Job Schedulers** | `src/pages/scheduler/Slurm.tsx` |

### 📦 Part VI: Comm & Apps
| Chapter | File Path |
|---------|-----------|
| **Ch 9: Parallel Frameworks** | `src/pages/apps/MPI.tsx` |
| **Ch 10: Optimization** | `src/pages/apps/Optimization.tsx` |

### 🛡️ Part VII: Perf & Sec
| Chapter | File Path |
|---------|-----------|
| **Ch 11: Benchmarking** | `src/pages/perf-sec/Benchmarking.tsx` |
| **Ch 12: Security** | `src/pages/perf-sec/Security.tsx` |

### 📖 Appendix
| Chapter | File Path |
|---------|-----------|
| **Resources & Glossary** | `src/pages/appendix/Resources.tsx` |

---

## 🛠️ How to Update Content

1.  **Locate the File**: Use the table above to find the React component file for the page you want to edit.
2.  **Edit Content**: The content is written in JSX. You can write standard HTML-like tags (`<p>`, `<h2>`, `<ul>`) and use the custom components provided.
3.  **Navigation**: If you need to add new pages or change the sidebar order, edit `src/data/navigation.ts`.
4.  **Routing**: If you add a new page, make sure to register it in `src/App.tsx`.
