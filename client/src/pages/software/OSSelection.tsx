import { CheckCircle } from 'lucide-react';
import Note from '../../components/Note';
import { Link } from 'react-router-dom';
import periodicTableImg from '../../assets/periodic-table-of-distro.png';

const OSSelection = () => {
  return (
    <div className="space-y-12 w-full">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary tracking-tight">
          Chapter 3: Operating System Selection
        </h1>
        <p className="text-xl text-primary/80 leading-relaxed">
          The operating system manages the hardware, provides an interface for programmers, and enables other software to run.
        </p>
        <p className="text-xl text-primary/80 leading-relaxed">
          While Linux is the obvious choice, *which* distribution of Linux matters.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">3.1 Linux Distributions Overview</h2>
        
        <div className="flex flex-col gap-6 mb-8">
            <p className="text-primary/80">
                Choosing a distribution (distro) is often a debate between stability, available software, and management style. In HPC, you generally want something stable, scalable, and well-supported.
            </p>
            <div className="bg-bg-secondary/20 p-4 rounded border border-border">
                <img 
                    src={periodicTableImg}
                    alt="Periodic Table of Linux Distributions" 
                    className="w-full h-auto rounded opacity-90 hover:opacity-100 transition-opacity"
                />
                <p className="text-center text-xs text-primary/60 mt-2">The Periodic Table of Linux Distributions (Source: DistroWatch)</p>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
                <h3 className="font-bold text-lg text-primary">Debian-based (The .deb Family)</h3>
                <p className="text-sm text-primary/80">
                    Includes <strong>Ubuntu</strong> and <strong>Debian</strong>.
                </p>
                <ul className="list-disc list-inside text-sm text-primary/80 space-y-1 ml-2">
                    <li><strong>Pros:</strong> Massive package repositories (`apt`), huge community support, great for AI/ML workloads.</li>
                    <li><strong>Cons:</strong> Can sometimes prioritize "bleeding edge" over absolute stability (depending on the release).</li>
                    <li><strong>Use Case:</strong> Rapid prototyping, deep learning clusters, and general-purpose research.</li>
                </ul>
            </div>
             <div className="space-y-4">
                <h3 className="font-bold text-lg text-primary">RPM-based (The Enterprise Family)</h3>
                <p className="text-sm text-primary/80">
                    Includes <strong>RHEL</strong>, <strong>Rocky Linux</strong>, <strong>AlmaLinux</strong>, and <strong>Fedora</strong>.
                </p>
                 <ul className="list-disc list-inside text-sm text-primary/80 space-y-1 ml-2">
                    <li><strong>Pros:</strong> The "Standard" in HPC centers. Binary compatible with commercial enterprise Linux. Uses `dnf`/`yum`.</li>
                    <li><strong>Cons:</strong> Smaller repositories compared to Debian, sometimes slower update cycles.</li>
                    <li><strong>Use Case:</strong> Traditional supercomputing, high-stability production environments.</li>
                </ul>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-4">
            <div className="space-y-4">
                <h3 className="font-bold text-lg text-primary">Immutable & Declarative</h3>
                <p className="text-sm text-primary/80">
                    Includes <strong>Fedora Silverblue</strong>, <strong>NixOS</strong>, and <strong>Guix</strong>.
                </p>
                <ul className="list-disc list-inside text-sm text-primary/80 space-y-1 ml-2">
                    <li><strong>Pros:</strong> Reproducibility! The entire OS config is code. Atomic updates (no broken upgrades).</li>
                    <li><strong>Cons:</strong> Steep learning curve. Non-standard file hierarchies can break traditional HPC software.</li>
                    <li><strong>Use Case:</strong> Modern DevOps-heavy clusters, strict reproducibility requirements.</li>
                </ul>
            </div>
            <div className="space-y-4">
                <h3 className="font-bold text-lg text-primary">"The Rest" (BSD, Arch, etc.)</h3>
                <p className="text-sm text-primary/80">
                    Includes <strong>FreeBSD</strong>, <strong>Arch Linux</strong>, <strong>Alpine</strong>.
                </p>
                <ul className="list-disc list-inside text-sm text-primary/80 space-y-1 ml-2">
                    <li><strong>Pros:</strong> Extreme customizability, lightweight, "do one thing well."</li>
                    <li><strong>Cons:</strong> High maintenance burden ("you build it, you fix it"). Less turnkey HPC support.</li>
                    <li><strong>Use Case:</strong> Specialized appliances, learning internals, or masochism.</li>
                </ul>
            </div>
        </div>

        <div className="bg-bg-secondary/20 p-6 rounded border border-border mt-6">
            <h3 className="font-bold flex items-center gap-2 mb-2"> Thigns to Consider</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-primary/80">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Maintenance:</strong> How easy is it to upgrade?</li>
                    <li><strong>Stability:</strong> Will an update break your MPI stack?</li>
                    <li><strong>Software:</strong> Is the software you need available (e.g., Slurm, specific compilers)?</li>
                    <li><strong>Hardware:</strong> Does the kernel support your InfiniBand cards or GPUs out of the box?</li>
                </ul>
                <ul className="list-disc list-inside space-y-1">
                     <li><strong>Documentation:</strong> Can you find answers easily when things break?</li>
                     <li><strong>Technologies:</strong> SystemD? Wayland? Container support?</li>
                     <li><strong>Role:</strong> Is this a production machine or a learning sandbox?</li>
                </ul>
            </div>
        </div>

        <Note type="info" title="The Goal: Single System Image (SSI)">
            Regardless of the distro, the ultimate goal in clustering is consistency. Every compute node should look and behave exactly the same. 
            If you run `python --version` on Node 1, it should match Node 100.
        </Note>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">3.2 Installation & Base Config</h2>
        <p className="text-primary/80">
            For this guide, we will assume a Debian-based system (like Ubuntu Server), but the concepts apply everywhere.
        </p>
        
        <div className="space-y-4">
            <h3 className="font-bold">The Process</h3>
            <ol className="list-decimal list-inside space-y-2 text-primary/80 ml-4">
                <li><strong>Head Node:</strong> Manual installation via USB/ISO.</li>
                <li><strong>Compute Nodes:</strong> Can do a manual installation but you can also have an automated installation via PXE (Network Boot).</li>
                <li><strong>Post-Install:</strong> <Link to="/infrastructure/management" className="text-primary hover:underline decoration-primary/30">Configuration management (Ansible)</Link>.</li>
            </ol>
        </div>

        <div className="mt-8 space-y-4">
            <h3 className="font-bold text-xl text-primary">Walkthrough: Installing Debian on the Head Node</h3>
            <p className="text-primary/80">
                This guide assumes you are installing Debian Stable on your primary head node manually. 
                You will need a flash drive with the Debian installer ISO.
            </p>
            
            <div className="space-y-4 ml-4 border-l-2 border-border pl-4">
                <div className="space-y-2">
                    <h4 className="font-bold text-primary">1. Boot & Initial Setup</h4>
                    <p className="text-sm text-primary/80">
                        Plug in your monitor, keyboard, and the bootable USB drive. Turn on the machine and press the boot menu key (often F12) to select <strong>UEFI BOOT</strong>.
                    </p>
                    <ul className="list-disc list-inside text-sm text-primary/80 ml-2">
                        <li>Select <strong>Graphical Install</strong>.</li>
                        <li>Choose your language, country, and keyboard layout.</li>
                    </ul>
                </div>

                <div className="space-y-2">
                    <h4 className="font-bold text-primary">2. Network Configuration</h4>
                    <p className="text-sm text-primary/80">
                        If the installer asks to configure the network:
                    </p>
                    <ul className="list-disc list-inside text-sm text-primary/80 ml-2">
                        <li>Select your primary interface.</li>
                        <li>If auto-configuration fails (common if no DHCP is present yet), select "Do not configure the network at this time". You can set static IPs later.</li>
                        <li><strong>Hostname:</strong> Choose a name (e.g., `headnode`, `godzilla`).</li>
                    </ul>
                </div>

                <div className="space-y-2">
                    <h4 className="font-bold text-primary">3. Users & Passwords</h4>
                    <p className="text-sm text-primary/80">
                        Set a strong root password. Create a primary user account (e.g., `admin` or your name) and set a secure password for it as well.
                    </p>
                </div>

                <div className="space-y-2">
                    <h4 className="font-bold text-primary">4. Partitioning</h4>
                    <p className="text-sm text-primary/80">
                        For a standard setup, select <strong>Guided - use entire disk</strong>. 
                        Choose "All files in one partition" unless you have a specific reason to separate `/home` or `/var`. 
                        Confirm the changes to write them to the disk.
                    </p>
                </div>

                <div className="space-y-2">
                    <h4 className="font-bold text-primary">5. Software Selection</h4>
                    <p className="text-sm text-primary/80">
                        When asked about software, stick to the basics. You usually only need <strong>Standard system utilities</strong> and <strong>SSH server</strong>.
                        Uncheck "Debian desktop environment" if you want a headless server (recommended for clusters).
                    </p>
                </div>
                
                <div className="bg-bg-secondary/20 p-4 rounded border border-border mt-2">
                     <p className="text-sm text-primary/80 italic">
                        <strong>Tip:</strong> Once installed and rebooted, you should see the login prompt. Log in with your new user to verify everything works!
                     </p>
                </div>
            </div>
        </div>

        <div className="p-4 border border-border rounded bg-bg-primary mt-4">
             <h4 className="font-bold flex items-center gap-2 mb-2"><CheckCircle size={16}/> Document Everything</h4>
             <p className="text-sm text-primary/80">
                Never just run a command and forget it. Write it down. Better yet, write an Ansible playbook.
             </p>
        </div>
      </section>

      <div className="flex justify-between mt-12 pt-8 border-t border-border">
         <Link to="/hardware/design" className="text-primary/60 hover:text-primary">
            ← Previous: Hardware
         </Link>
         <Link to="/software-setup/network" className="font-bold hover:underline decoration-primary/30 underline-offset-4">
            Next: Network Configuration →
         </Link>
      </div>
    </div>
  );
};

export default OSSelection;
