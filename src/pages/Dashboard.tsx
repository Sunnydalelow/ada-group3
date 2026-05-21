import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@store/authStore';
import PatientDashboard from '@components/dashboard/PatientDashboard';
import DonorDashboard from '@components/dashboard/DonorDashboard';
import VolunteerDashboard from '@components/dashboard/VolunteerDashboard';

export default function Dashboard() {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated || !user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      {user.type === 'patient' && <PatientDashboard />}
      {user.type === 'donor' && <DonorDashboard />}
      {user.type === 'volunteer' && <VolunteerDashboard />}
    </div>
  );
}
