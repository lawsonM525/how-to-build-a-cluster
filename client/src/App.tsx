import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Intro from './pages/foundations/Intro';
import Design from './pages/hardware/Design';
import OSSelection from './pages/software/OSSelection';
import NetworkConfig from './pages/software/NetworkConfig';
import SharedStorage from './pages/infrastructure/Storage';
import UserManagement from './pages/infrastructure/Users';
import AnsibleSetup from './pages/management/AnsibleSetup';
import Slurm from './pages/scheduler/Slurm';
import MPI from './pages/apps/MPI';
import GPU from './pages/apps/GPU';
import Optimization from './pages/apps/Optimization';
import Benchmarking from './pages/perf-sec/Benchmarking';
import Security from './pages/perf-sec/Security';
import Resources from './pages/appendix/Resources';
import ClassSources from './pages/appendix/ClassSources';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          
          {/* Part I: Foundations */}
          <Route path="foundations">
            <Route index element={<Navigate to="/foundations/intro" replace />} />
            <Route path="intro" element={<Intro />} />
          </Route>

          {/* Part II: Hardware */}
          <Route path="hardware">
            <Route index element={<Navigate to="/hardware/design" replace />} />
            <Route path="design" element={<Design />} />
          </Route>

          {/* Part III: Software Setup */}
          <Route path="software-setup">
            <Route index element={<Navigate to="/software-setup/os" replace />} />
            <Route path="os" element={<OSSelection />} />
            <Route path="network" element={<NetworkConfig />} />
          </Route>

          {/* Part IV: Infrastructure */}
          <Route path="infrastructure">
            <Route index element={<Navigate to="/infrastructure/storage" replace />} />
            <Route path="storage" element={<SharedStorage />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="management" element={<AnsibleSetup />} />
          </Route>

          {/* Part V: Workload Manager */}
          <Route path="scheduler">
            <Route index element={<Navigate to="/scheduler/slurm" replace />} />
            <Route path="slurm" element={<Slurm />} />
          </Route>

          {/* Part VI: Comm & Apps */}
          <Route path="apps">
            <Route index element={<Navigate to="/apps/mpi" replace />} />
            <Route path="mpi" element={<MPI />} />
            <Route path="gpu" element={<GPU />} />
            <Route path="optimization" element={<Optimization />} />
          </Route>

          {/* Part VII: Perf & Sec */}
          <Route path="perf-sec">
            <Route index element={<Navigate to="/perf-sec/benchmarking" replace />} />
            <Route path="benchmarking" element={<Benchmarking />} />
            <Route path="security" element={<Security />} />
          </Route>

          {/* Appendix */}
          <Route path="appendix">
            <Route index element={<Navigate to="/appendix/resources" replace />} />
            <Route path="resources" element={<Resources />} />
            <Route path="class-sources" element={<ClassSources />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
