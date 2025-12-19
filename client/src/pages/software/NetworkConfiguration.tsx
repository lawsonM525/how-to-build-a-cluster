import { Network, Globe, Server } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import Note from '../../components/Note';

const NetworkConfiguration = () => {
  const interfacesCode = `# The loopback network interface
auto lo
iface lo inet loopback

# The primary network interface
auto enp0s31f6
iface enp0s31f6 inet static
    address 192.168.0.201
    gateway 192.168.0.1`;

  const dnsCode = `nameserver 8.8.8.8
nameserver 8.8.4.4`;

  const sourcesCode = `deb http://deb.debian.org/debian/ trixie main non-free-firmware
deb-src http://deb.debian.org/debian/ trixie main non-free-firmware
deb http://security.debian.org/debian-security trixie-security main non-free-firmware
deb-src http://security.debian.org/debian-security trixie-security main non-free-firmware`;

  return (
    <div className="space-y-12 max-w-4xl">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-primary tracking-tight">Network Configuration</h1>
        <p className="text-lg text-primary/80 leading-relaxed">
          A cluster needs reliable communication. DHCP is for clients. Servers use static IPs.
          Configure your interfaces. Define your DNS. Enable your repositories.
        </p>
      </div>

      <section className="space-y-6">
        <div className="flex items-center gap-3 text-primary border-b border-border pb-2">
          <Network size={24} strokeWidth={1.5} />
          <h2 className="text-2xl font-bold m-0 border-0 p-0">4.1 Static IP Setup</h2>
        </div>
        <p className="text-primary/80">
          Identify your interface. It is often <code>enp0s31f6</code>.
          Edit the interfaces file.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-mono text-primary/70">
            <TerminalIcon /> <code>nano /etc/network/interfaces</code>
          </div>
          <CodeBlock 
            language="bash" 
            filename="/etc/network/interfaces"
            code={interfacesCode} 
          />
        </div>
        <Note type="info" title="Apply Changes">
          Restart networking to apply.
          <br/>
          <code>systemctl restart networking</code>
          <br/>
          Verify with <code>ip a</code>. Look for "UP" in green.
        </Note>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3 text-primary border-b border-border pb-2">
          <Globe size={24} strokeWidth={1.5} />
          <h2 className="text-2xl font-bold m-0 border-0 p-0">4.2 DNS Configuration</h2>
        </div>
        <p className="text-primary/80">
          You need to resolve domain names. Connect the green cord.
          Edit <code>resolv.conf</code>.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-mono text-primary/70">
            <TerminalIcon /> <code>nano /etc/resolv.conf</code>
          </div>
          <CodeBlock 
            language="bash" 
            filename="/etc/resolv.conf"
            code={dnsCode} 
          />
        </div>
        <Note type="success" title="Test Connectivity">
          Ping the gateway: <code>ping 192.168.0.1</code>
          <br/>
          Ping the world: <code>ping google.com</code>
        </Note>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3 text-primary border-b border-border pb-2">
          <Server size={24} strokeWidth={1.5} />
          <h2 className="text-2xl font-bold m-0 border-0 p-0">4.3 Repositories</h2>
        </div>
        <p className="text-primary/80">
          Enable the repositories. Get the software you need.
          Edit <code>sources.list</code>.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-mono text-primary/70">
            <TerminalIcon /> <code>nano /etc/apt/sources.list</code>
          </div>
          <CodeBlock 
            language="bash" 
            filename="/etc/apt/sources.list"
            code={sourcesCode} 
          />
        </div>
        <div className="mt-4">
          <p className="text-sm font-bold text-primary mb-2">Update the cache:</p>
          <CodeBlock 
            language="bash" 
            code="apt update" 
          />
        </div>
      </section>
    </div>
  );
};

const TerminalIcon = () => (
  <span className="text-primary/60">{'>_'}</span>
);

export default NetworkConfiguration;
