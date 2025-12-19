import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ClusterComputing from './pages/foundations/ClusterComputing';
import HardwareComponents from './pages/hardware/Components';
import OSSelection from './pages/software/OSSelection';
import NetworkConfiguration from './pages/software/NetworkConfiguration';
import UserManagement from './pages/infrastructure/UserManagement';
import AnsibleSetup from './pages/management/AnsibleSetup';
import ParallelFrameworks from './pages/parallel/Frameworks';
import SecurityHardening from './pages/validation/SecurityHardening';
import Sources from './pages/resources/Sources';
import Placeholder from './components/Placeholder';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          
          {/* Part I: Conceptual Foundations */}
          <Route path="foundations">
            <Route index element={<Navigate to="cluster-computing" replace />} />
            <Route path="cluster-computing" element={<ClusterComputing />} />
          </Route>

          {/* Part II: Hardware Engineering */}
          <Route path="hardware">
            <Route index element={<Navigate to="design" replace />} />
            <Route path="design" element={<HardwareComponents />} />
          </Route>

          {/* Part III: Software Foundation */}
          <Route path="software">
            <Route index element={<Navigate to="os" replace />} />
            <Route path="os" element={<OSSelection />} />
            <Route path="network" element={<NetworkConfiguration />} />
          </Route>

          {/* Part IV: Infrastructure Services */}
          <Route path="infrastructure">
            <Route index element={<Navigate to="storage" replace />} />
            <Route path="storage" element={<Placeholder title="Shared Storage & Filesystems" />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="management" element={<AnsibleSetup />} />
          </Route>

          {/* Part V: Workload Manager */}
          <Route path="workload">
            <Route index element={<Navigate to="schedulers" replace />} />
            <Route path="schedulers" element={<Placeholder title="Job Schedulers" />} />
          </Route>

          {/* Part VI: Parallel Programming */}
          <Route path="parallel">
            <Route index element={<Navigate to="frameworks" replace />} />
            <Route path="frameworks" element={<ParallelFrameworks />} />
            <Route path="optimization" element={<Placeholder title="Optimization & Libraries" />} />
          </Route>

          {/* Part VII: Validation & Security */}
          <Route path="validation">
            <Route index element={<Navigate to="benchmarking" replace />} />
            <Route path="benchmarking" element={<Placeholder title="Benchmarking" />} />
            <Route path="security" element={<SecurityHardening />} />
          </Route>

          {/* Resources */}
          <Route path="resources">
            <Route index element={<Navigate to="sources" replace />} />
            <Route path="sources" element={<Sources />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
