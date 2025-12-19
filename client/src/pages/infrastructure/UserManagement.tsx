import { Users, Key, Terminal, FileText } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import Note from '../../components/Note';

const UserManagement = () => {
  const sudoCode = `su -
apt update
apt install sudo
usermod -aG sudo mpr`;

  const visudoCode = `sudo visudo
# Add to bottom of file:
mpr ALL=(ALL:ALL) NOPASSWD: ALL`;

  const sshKeyCode = `# On your local machine (Mac/Linux)
ssh-keygen
ssh-copy-id mpr@192.168.0.201

# On Windows (PowerShell)
ssh-keygen
type $env:USERPROFILE\\.ssh\\id_rsa.pub | ssh mpr@192.168.0.201 "cat >> .ssh/authorized_keys"`;

  const hostsCode = `// gcc -version
// If missing: apt install build-essential

// Run the updateHosts.c script
gcc updateHosts.c
./a.out

// Check results
cat /etc/hosts`;

  return (
    <div className="space-y-12 max-w-4xl">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-primary tracking-tight">User Management</h1>
        <p className="text-lg text-primary/80 leading-relaxed">
          Root is for maintenance. Users are for work.
          Set up sudo. Configure passwordless SSH. automate host resolution.
        </p>
      </div>

      <section className="space-y-6">
        <div className="flex items-center gap-3 text-primary border-b border-border pb-2">
          <Users size={24} strokeWidth={1.5} />
          <h2 className="text-2xl font-bold m-0 border-0 p-0">6.1 Sudo Configuration</h2>
        </div>
        <p className="text-primary/80">
          Install sudo. Grant permissions. Make it passwordless for automation.
        </p>
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-primary">Install & Add User</h3>
          <CodeBlock 
            language="bash" 
            code={sudoCode} 
          />
        </div>
        <div className="space-y-4 mt-6">
          <h3 className="text-lg font-bold text-primary">Passwordless Sudo</h3>
          <p className="text-primary/70 text-sm">
            Essential for Ansible. Use <code>visudo</code> to edit safely.
          </p>
          <CodeBlock 
            language="bash" 
            code={visudoCode} 
          />
          <Note type="success" title="Verify">
            <code>sudo -l -U mpr</code> should show <strong>NOPASSWD: ALL</strong>.
          </Note>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3 text-primary border-b border-border pb-2">
          <Key size={24} strokeWidth={1.5} />
          <h2 className="text-2xl font-bold m-0 border-0 p-0">6.2 SSH Keys</h2>
        </div>
        <p className="text-primary/80">
          Passwords are weak. Keys are strong.
          Generate a key pair. Copy the public key to the node.
        </p>
        <CodeBlock 
          language="bash" 
          code={sshKeyCode} 
        />
        <Note type="info" title="Windows Users">
          If <code>ssh-copy-id</code> is missing, copy the content of <code>id_rsa.pub</code> manually to <code>~/.ssh/authorized_keys</code> on the node.
        </Note>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3 text-primary border-b border-border pb-2">
          <FileText size={24} strokeWidth={1.5} />
          <h2 className="text-2xl font-bold m-0 border-0 p-0">6.3 Hosts File</h2>
        </div>
        <p className="text-primary/80">
          Nodes need to know each other by name.
          Use the <code>updateHosts.c</code> script to automate <code>/etc/hosts</code> population.
        </p>
        <CodeBlock 
          language="c" 
          code={hostsCode} 
        />
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3 text-primary border-b border-border pb-2">
          <Terminal size={24} strokeWidth={1.5} />
          <h2 className="text-2xl font-bold m-0 border-0 p-0">6.4 Verification</h2>
        </div>
        <p className="text-primary/80">
          Test everything before moving on.
        </p>
        <div className="bg-bg-primary border border-border p-6 rounded space-y-2 text-sm text-primary/80">
          <p>1. <strong>SSH:</strong> <code>ssh mpr@node01</code> (Should not ask for password)</p>
          <p>2. <strong>Sudo:</strong> <code>sudo apt update</code> (Should not ask for password)</p>
          <p>3. <strong>Ping:</strong> <code>ping node02</code> (Should resolve IP)</p>
        </div>
      </section>
    </div>
  );
};

export default UserManagement;
