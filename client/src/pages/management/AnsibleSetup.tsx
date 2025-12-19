import CodeBlock from '../../components/CodeBlock';
import Terminal from '../../components/Terminal';
import Note from '../../components/Note';

const AnsibleSetup = () => {
  const inventoryCode = `[masters]
node01 ansible_host=192.168.1.10

[workers]
node02 ansible_host=192.168.1.11
node03 ansible_host=192.168.1.12
node04 ansible_host=192.168.1.13`;

  const playbookCode = `- name: Bootstrap Nodes
  hosts: all
  become: yes
  tasks:
    - name: Install Chrony
      apt:
        name: chrony
        state: present
        
    - name: Ensure Chrony is running
      service:
        name: chrony
        state: started
        enabled: yes`;

  return (
    <div className="space-y-12 max-w-4xl">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-primary tracking-tight">Cluster Management & Automation</h1>
        <p className="text-lg text-primary/80 leading-relaxed">
          Manual configuration fails. It does not scale. It introduces drift.
          Treat your infrastructure as code. Define the state you want. Let the tools enforce it.
        </p>
      </div>

      <section className="space-y-6">
        <div className="flex items-center gap-3 text-primary border-b border-border pb-2">
          <h2 className="text-2xl font-bold m-0 border-0 p-0">7.1 Infrastructure as Code</h2>
        </div>
        <p className="text-primary/80">
          Configuration drift kills clusters. One node changes. The others do not. Chaos ensues.
          Use automation tools. Ansible is agentless and simple. Puppet is declarative. xCAT handles bare metal.
        </p>
        <Note type="info" title="Why Ansible?">
          We choose Ansible. It uses SSH. It requires no agents. It is easy to read.
        </Note>
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-primary">Inventory Management</h3>
          <p className="text-primary/70 text-sm">
            Define your hosts. Group them by role.
          </p>
          <CodeBlock 
            language="ini" 
            filename="inventory/hosts.ini"
            code={inventoryCode} 
          />
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3 text-primary border-b border-border pb-2">
          <h2 className="text-2xl font-bold m-0 border-0 p-0">7.2 Time Synchronization</h2>
        </div>
        <p className="text-primary/80">
          Clocks must sync. Logs depend on it. Schedulers depend on it. Authentication depends on it.
          NTP is mandatory. Chrony is the modern standard. Drift causes distributed system failures.
        </p>
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-primary">Automating Time Sync</h3>
          <CodeBlock 
            language="yaml" 
            filename="time-sync.yml"
            code={playbookCode} 
          />
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3 text-primary border-b border-border pb-2">
          <h2 className="text-2xl font-bold m-0 border-0 p-0">7.3 Monitoring</h2>
        </div>
        <p className="text-primary/80">
          You cannot manage what you cannot measure. Track node status. Track resource usage.
        </p>
        <ul className="list-disc list-inside space-y-2 text-primary/80">
          <li><strong>Prometheus:</strong> Collects metrics. Time-series database.</li>
          <li><strong>Grafana:</strong> Visualizes data. Dashboards for humans.</li>
          <li><strong>Ganglia:</strong> Legacy lightweight monitoring. Good for quick views.</li>
        </ul>
        <Terminal title="monitoring-node:~">
          <div className="space-y-1">
            <div className="flex gap-2">
              <span className="text-green-500">user@manage:~$</span>
              <span className="text-primary">curl http://node01:9100/metrics | grep node_load1</span>
            </div>
            <div className="text-primary/80 mt-2">
              # HELP node_load1 1m load average.<br/>
              # TYPE node_load1 gauge<br/>
              node_load1 0.45
            </div>
          </div>
        </Terminal>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3 text-primary border-b border-border pb-2">
          <h2 className="text-2xl font-bold m-0 border-0 p-0">7.4 Learning Resources</h2>
        </div>
        <p className="text-primary/80">
          Master Ansible. Use these guides.
        </p>
        <ul className="list-disc list-inside space-y-2 text-primary/80 text-sm">
          <li><a href="https://learnxinyminutes.com/ansible/" className="hover:text-primary hover:underline">Learn X in Y Minutes: Ansible</a></li>
          <li><a href="https://docs.ansible.com/ansible/latest/index.html" className="hover:text-primary hover:underline">Official Ansible Documentation</a></li>
          <li><a href="https://www.jeffgeerling.com/blog/2020/ansible-101-jeff-geerling-youtube-streaming-series" className="hover:text-primary hover:underline">Jeff Geerling's Ansible 101</a></li>
          <li><a href="https://github.com/omerbsezer/Fast-Ansible" className="hover:text-primary hover:underline">Fast Ansible (GitHub)</a></li>
          <li><a href="https://spacelift.io/blog/ansible-tutorial" className="hover:text-primary hover:underline">Spacelift Ansible Tutorial</a></li>
        </ul>
      </section>
    </div>
  );
};

export default AnsibleSetup;
