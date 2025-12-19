import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import HardwareComponents from './pages/hardware/Components';
import AnsibleSetup from './pages/management/AnsibleSetup';
import Placeholder from './components/Placeholder';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          
          {/* Hardware Section */}
          <Route path="hardware">
            <Route index element={<Navigate to="/hardware/components" replace />} />
            <Route path="components" element={<HardwareComponents />} />
            <Route path="assembly" element={<Placeholder title="Assembly Guide" />} />
            <Route path="power" element={<Placeholder title="Power Management" />} />
          </Route>

          {/* Network Section */}
          <Route path="network">
            <Route index element={<Navigate to="/network/topology" replace />} />
            <Route path="topology" element={<Placeholder title="Network Topology" />} />
            <Route path="switch" element={<Placeholder title="Switch Configuration" />} />
            <Route path="dns-dhcp" element={<Placeholder title="DNS & DHCP" />} />
          </Route>

          {/* OS Section */}
          <Route path="os">
            <Route index element={<Navigate to="/os/selection" replace />} />
            <Route path="selection" element={<Placeholder title="OS Selection" />} />
            <Route path="pxe" element={<Placeholder title="Automated Install (PXE)" />} />
            <Route path="config" element={<Placeholder title="Post-Install Config" />} />
          </Route>

          {/* Management Section */}
          <Route path="management">
            <Route index element={<Navigate to="/management/ansible" replace />} />
            <Route path="ansible" element={<AnsibleSetup />} />
            <Route path="monitoring" element={<Placeholder title="Monitoring" />} />
            <Route path="logging" element={<Placeholder title="Logging" />} />
          </Route>

          {/* Applications Section */}
          <Route path="applications">
            <Route index element={<Navigate to="/applications/k3s" replace />} />
            <Route path="k3s" element={<Placeholder title="Kubernetes (K3s)" />} />
            <Route path="storage" element={<Placeholder title="Storage (Ceph/NFS)" />} />
            <Route path="load-balancing" element={<Placeholder title="Load Balancing" />} />
          </Route>

          {/* Resources Section */}
          <Route path="resources" element={<Placeholder title="Resources" />} />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
