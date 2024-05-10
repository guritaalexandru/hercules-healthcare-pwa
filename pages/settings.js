import React from 'react';

import SettingsPage from '@/js/Components/Pages/SettingsPage.jsx';

export const CollectionsContext = React.createContext({});

export default function Settings(collections) {
    return (
        <CollectionsContext.Provider value={collections}>
            <main className="page-container relative">
                <SettingsPage />
            </main>
        </CollectionsContext.Provider>
    );
}