import { Download, Power, Terminal } from 'lucide-react';
import Note from '../../components/Note';

const OSSelection = () => {
  return (
    <div className="space-y-12 max-w-4xl">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-primary tracking-tight">Operating System Selection</h1>
        <p className="text-lg text-primary/80 leading-relaxed">
          Stability is paramount. We choose Debian Stable. 
          Follow these exact steps. Do not deviate.
        </p>
      </div>

      <section className="space-y-6">
        <div className="flex items-center gap-3 text-primary border-b border-border pb-2">
          <Download size={24} strokeWidth={1.5} />
          <h2 className="text-2xl font-bold m-0 border-0 p-0">3.1 Preparation</h2>
        </div>
        <ul className="list-disc list-inside space-y-2 text-primary/80">
          <li>Verify the node is unconfigured.</li>
          <li>Transfer Debian Stable to a flash drive.</li>
          <li>Connect power to the monitor and the node.</li>
          <li>Connect monitor, keyboard, and flash drive.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3 text-primary border-b border-border pb-2">
          <Power size={24} strokeWidth={1.5} />
          <h2 className="text-2xl font-bold m-0 border-0 p-0">3.2 Boot Sequence</h2>
        </div>
        <div className="bg-bg-primary border border-border p-6 rounded space-y-4">
          <h3 className="text-lg font-bold text-primary mt-0">BIOS/UEFI Setup</h3>
          <ol className="list-decimal list-inside space-y-2 text-primary/80 text-sm">
            <li>Power on the node.</li>
            <li>Spam <strong>F12</strong> to enter the boot menu.</li>
            <li>Select <strong>UEFI BOOT</strong>.</li>
            <li>Select your flash drive (e.g., UEFI: 8.07).</li>
            <li>Press Enter.</li>
          </ol>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3 text-primary border-b border-border pb-2">
          <Terminal size={24} strokeWidth={1.5} />
          <h2 className="text-2xl font-bold m-0 border-0 p-0">3.3 Installation Process</h2>
        </div>
        <div className="bg-bg-primary border border-border p-6 rounded space-y-4">
          <h3 className="text-lg font-bold text-primary mt-0">Initial Config</h3>
          <ul className="list-disc list-inside space-y-2 text-primary/80 text-sm">
            <li>Select <strong>Graphical Install</strong>.</li>
            <li>Select Language, Country, and Keyboard.</li>
            <li><strong>Network:</strong> Select wireless interface (e.g., Connect2Smith).</li>
            <li>Select WEP/Open Network. Press Enter for key if prompted.</li>
          </ul>
          <Note type="warning" title="Network Error">
            If "Network autoconfiguration failed" appears, press Enter.
            Select "Do not configure the network at this time".
          </Note>
        </div>

        <div className="bg-bg-primary border border-border p-6 rounded space-y-4">
          <h3 className="text-lg font-bold text-primary mt-0">User Setup</h3>
          <ul className="list-disc list-inside space-y-2 text-primary/80 text-sm">
            <li>Enter Hostname. Press Enter.</li>
            <li>Enter Root Password. Press Enter.</li>
            <li>Enter Username (e.g., <code>mpr</code>). Press Enter.</li>
            <li>Enter User Password. Press Enter.</li>
            <li>Select Time Zone (e.g., Eastern).</li>
          </ul>
        </div>

        <div className="bg-bg-primary border border-border p-6 rounded space-y-4">
          <h3 className="text-lg font-bold text-primary mt-0">Partitioning</h3>
          <ul className="list-disc list-inside space-y-2 text-primary/80 text-sm">
            <li>Select <strong>Guided - use entire disk</strong>.</li>
            <li>Select the target drive (e.g., TOSHIBA 256 GB).</li>
            <li>Select <strong>All files in one partition</strong>.</li>
            <li>Select <strong>Finish partitioning and write changes to disks</strong>.</li>
            <li>Select <strong>Yes</strong> to write changes.</li>
          </ul>
        </div>

        <div className="bg-bg-primary border border-border p-6 rounded space-y-4">
          <h3 className="text-lg font-bold text-primary mt-0">Finalizing</h3>
          <ul className="list-disc list-inside space-y-2 text-primary/80 text-sm">
            <li><strong>Mirror:</strong> Select No/Yes to continue without a network mirror.</li>
            <li><strong>Popularity Contest:</strong> Select No.</li>
            <li><strong>Software Selection:</strong> Keep standard system utilities checked. Press Tab. Press Enter.</li>
            <li>Wait for installation to complete.</li>
            <li>Press Enter to reboot.</li>
          </ul>
        </div>

        <Note type="success" title="Installation Complete">
          Log in with your new username.
          Verify your IP address: <code>ip -c address</code>
        </Note>
      </section>
    </div>
  );
};

export default OSSelection;
