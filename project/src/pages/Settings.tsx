import React from 'react';
import { Card } from '../components/ui/Card';
import { SettingsMenu } from '../components/Settings/SettingsMenu';
import { ProfileSettings } from '../components/Settings/ProfileSettings';
import { useAuth } from '../context/AuthContext';

export const Settings: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState('profile');
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Settings</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="lg:col-span-1">
          <SettingsMenu activeSection={activeSection} onSelect={setActiveSection} />
        </Card>

        <Card className="lg:col-span-3">
          {activeSection === 'profile' && <ProfileSettings user={user} />}
        </Card>
      </div>
    </div>
  );
};