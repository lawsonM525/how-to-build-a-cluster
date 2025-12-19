import CodeBlock from '../../components/CodeBlock';
import Terminal from '../../components/Terminal';
import Note from '../../components/Note';

const AnsibleSetup = () => {
  const inventoryCode = `[masters]
node01 ansible_host=192.168.1.10

[workers]
node02 ansible_host=192.168.1.11
node03 ansible_host=192.168.1.12
node04 ansible_host=192.168.1.13

[k3s_cluster:children]
masters
workers`;

  const playbookCode = `- name: Bootstrap Nodes
  hosts: all
  become: yes
  tasks:
    - name: Update apt cache
      apt:
        update_cache: yes
        
    - name: Install dependencies
      apt:
        name:
          - curl
          - vim
          - git
        state: present`;

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-white tracking-tight">Ansible Configuration</h1>
        <p className="text-lg text-white/80 leading-relaxed">
          We will use Ansible to automate the configuration of our cluster nodes. 
          This ensures consistency and allows us to easily rebuild nodes if necessary.
        </p>
      </div>

      <Note type="info" title="Why Ansible?">
        Ansible is agentless, meaning we don't need to install any software on the target nodes 
        before we start managing them. All we need is SSH access.
      </Note>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white border-b border-white/20 pb-2">1. Installation</h2>
        <p className="text-white/80">
          Install Ansible on your management machine (your laptop or a dedicated bastion host).
        </p>
        <CodeBlock 
          language="bash" 
          code="sudo apt update && sudo apt install -y ansible" 
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white border-b border-white/20 pb-2">2. Inventory Setup</h2>
        <p className="text-white/80">
          Create an `hosts.ini` file to define your cluster layout.
        </p>
        <CodeBlock 
          language="ini" 
          filename="inventory/hosts.ini"
          code={inventoryCode} 
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white border-b border-white/20 pb-2">3. Connectivity Check</h2>
        <p className="text-white/80">
          Verify that Ansible can reach all your nodes.
        </p>
        <Terminal title="management-node:~">
          <div className="space-y-1">
            <div className="flex gap-2">
              <span className="text-green-500">user@manage:~$</span>
              <span className="text-white">ansible -i inventory/hosts.ini all -m ping</span>
            </div>
            <div className="text-white/80 mt-2">
              node01 | SUCCESS ={'>'} {'{'} "changed": false, "ping": "pong" {'}'}<br/>
              node02 | SUCCESS ={'>'} {'{'} "changed": false, "ping": "pong" {'}'}<br/>
              node03 | SUCCESS ={'>'} {'{'} "changed": false, "ping": "pong" {'}'}<br/>
              node04 | SUCCESS ={'>'} {'{'} "changed": false, "ping": "pong" {'}'}
            </div>
          </div>
        </Terminal>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white border-b border-white/20 pb-2">4. Your First Playbook</h2>
        <p className="text-white/80">
          Create a `bootstrap.yml` file to set up the basic environment.
        </p>
        <CodeBlock 
          language="yaml" 
          filename="bootstrap.yml"
          code={playbookCode} 
        />
      </section>
    </div>
  );
};

export default AnsibleSetup;
