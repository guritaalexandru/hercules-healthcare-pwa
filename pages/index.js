import React from "react";

import DashboardPage from "@/js/Components/Pages/DashboardPage";
import {getAllCollections} from "@/js/utils/database";

export const CollectionsContext = React.createContext({});

export default function Home({collections}) {
  return (
        <CollectionsContext.Provider value={collections}>
          <main className="page-container relative">
              <DashboardPage/>
          </main>
        </CollectionsContext.Provider>
  );
}

export function getStaticProps() {
    const collectionsArray = getAllCollections();

    return {
        props: {
            collections: getAllCollections(),
        },
    };
}