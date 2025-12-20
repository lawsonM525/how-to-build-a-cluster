import { Users, UserPlus, Fingerprint } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import { Link } from 'react-router-dom';

const UserManagement = () => {
  return (
    <div className="space-y-12 w-full">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary tracking-tight">
          Chapter 6: User Management
        </h1>
        <p className="text-xl text-primary/80 leading-relaxed">
          One user, many machines. You need a way to ensure that "User 1000" is the same person on Node 1 and Node 50.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">6.1 Centralized Identity</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
                <p className="text-primary/80">
                    In Linux, users are identified by a <strong>UID</strong> (User ID) and groups by a <strong>GID</strong> (Group ID).
                </p>
                <p className="text-primary/80">
                    If <code>alice</code> is UID 1001 on the head node but UID 1002 on a compute node, file permissions will break completely.
                </p>
            </div>
            <div className="bg-bg-secondary/20 p-6 rounded border border-border flex items-center justify-center gap-6">
                <div className="text-center">
                    <Users size={32} className="mx-auto mb-2 text-primary" />
                    <div className="text-xs font-mono">Head Node</div>
                    <div className="text-xs font-bold text-green-500">Alice (1001)</div>
                </div>
                <div className="text-2xl text-primary/40">≠</div>
                <div className="text-center">
                    <Users size={32} className="mx-auto mb-2 text-primary" />
                    <div className="text-xs font-mono">Node 01</div>
                    <div className="text-xs font-bold text-red-500">Bob (1001)</div>
                </div>
            </div>
        </div>

        <h3 className="font-bold mt-6">Legacy Solutions</h3>
        <p className="text-primary/80">
            <strong>NIS (Network Information Service)</strong>: The old way. Simple, but insecure (sends passwords in cleartext).
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">6.2 Implementing LDAP</h2>
        <p className="text-primary/80">
            <strong>LDAP (Lightweight Directory Access Protocol)</strong> is the industry standard. It acts as a phonebook for users, groups, and computers.
        </p>

        <div className="space-y-4 mt-4">
            <h3 className="font-bold flex items-center gap-2"><Fingerprint size={20}/> OpenLDAP</h3>
            <p className="text-sm text-primary/80">
                We install the LDAP server on the head node and configure all compute nodes to query it for authentication.
            </p>
        </div>

        <div className="space-y-4 mt-4">
             <h3 className="font-bold flex items-center gap-2"><UserPlus size={20}/> LDIF Files</h3>
             <p className="text-sm text-primary/80">
                LDAP is configured using `.ldif` text files. It's verbose, but powerful.
             </p>
             <CodeBlock 
                language="yaml"
                filename="user.ldif"
                code={`dn: uid=alice,ou=People,dc=cluster,dc=local
objectClass: inetOrgPerson
objectClass: posixAccount
objectClass: shadowAccount
uid: alice
sn: Smith
givenName: Alice
cn: Alice Smith
uidNumber: 10001
gidNumber: 10001
userPassword: {SSHA}SomeHashString...
loginShell: /bin/bash
homeDirectory: /home/alice`}
            />
        </div>
      </section>

      <div className="flex justify-between mt-12 pt-8 border-t border-border">
         <Link to="/infrastructure/storage" className="text-primary/60 hover:text-primary">
            ← Previous: Shared Storage
         </Link>
         <Link to="/infrastructure/management" className="font-bold hover:underline decoration-primary/30 underline-offset-4">
            Next: Cluster Management →
         </Link>
      </div>
    </div>
  );
};

export default UserManagement;
