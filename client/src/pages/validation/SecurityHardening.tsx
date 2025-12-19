import { Shield, Mail, Clock, FileText } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import Note from '../../components/Note';

const SecurityHardening = () => {
  const installCode = `apt update
apt install unattended-upgrades bsd-mailx postfix`;

  const configCode = `// /etc/apt/apt.conf.d/50unattended-upgrades

Unattended-Upgrade::Mail "your-email@example.com";
Unattended-Upgrade::MailReport "always";
Unattended-Upgrade::SyslogEnable "true";
Unattended-Upgrade::SyslogFacility "daemon";
Unattended-Upgrade::Verbose "true";`;

  const timerCode = `// sudo systemctl edit apt-daily-upgrade.timer

[Timer]
OnCalendar=
OnCalendar=Mon *-*-* 7:00:00
RandomizedDelaySec=0
Persistent=true`;

  const reportCode = `// /usr/local/bin/unattended-weekly-report.sh
// Make executable: chmod +x

// Crontab (sudo crontab -e)
10 7 * * 1 /usr/local/bin/unattended-weekly-report.sh`;

  return (
    <div className="space-y-12 max-w-4xl">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-primary tracking-tight">Security & Hardening</h1>
        <p className="text-lg text-primary/80 leading-relaxed">
          A cluster must defend itself. Patching is tedious. Humans forget.
          Automate security updates. Configure unattended upgrades.
        </p>
      </div>

      <section className="space-y-6">
        <div className="flex items-center gap-3 text-primary border-b border-border pb-2">
          <Shield size={24} strokeWidth={1.5} />
          <h2 className="text-2xl font-bold m-0 border-0 p-0">12.1 Installation</h2>
        </div>
        <p className="text-primary/80">
          Install the necessary packages. Include mail utilities for alerts.
        </p>
        <CodeBlock 
          language="bash" 
          code={installCode} 
        />
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3 text-primary border-b border-border pb-2">
          <FileText size={24} strokeWidth={1.5} />
          <h2 className="text-2xl font-bold m-0 border-0 p-0">12.2 Configuration</h2>
        </div>
        <p className="text-primary/80">
          Edit the configuration file. Enable email reporting. Enable syslog logging.
          Verbose logging helps debugging.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-mono text-primary/70">
            <code>nano /etc/apt/apt.conf.d/50unattended-upgrades</code>
          </div>
          <CodeBlock 
            language="bash" 
            filename="50unattended-upgrades"
            code={configCode} 
          />
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3 text-primary border-b border-border pb-2">
          <Clock size={24} strokeWidth={1.5} />
          <h2 className="text-2xl font-bold m-0 border-0 p-0">12.3 Timing</h2>
        </div>
        <p className="text-primary/80">
          Control when updates happen. Do not disrupt workloads.
          Schedule them for Monday morning. Override the systemd timer.
        </p>
        <Note type="info" title="Systemd Edit">
          Use <code>systemctl edit</code>. It creates an override file safely.
          Do not edit <code>/lib/systemd/system</code> files directly.
        </Note>
        <CodeBlock 
          language="ini" 
          code={timerCode} 
        />
        <p className="text-primary/80 mt-4">
          Apply the same timing to <code>apt-daily.timer</code>.
        </p>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3 text-primary border-b border-border pb-2">
          <Mail size={24} strokeWidth={1.5} />
          <h2 className="text-2xl font-bold m-0 border-0 p-0">12.4 Reporting</h2>
        </div>
        <p className="text-primary/80">
          Know what happened. Create a weekly report script.
          Schedule it with cron.
        </p>
        <CodeBlock 
          language="bash" 
          code={reportCode} 
        />
      </section>
    </div>
  );
};

export default SecurityHardening;
