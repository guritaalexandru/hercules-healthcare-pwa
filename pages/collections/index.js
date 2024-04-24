import React from "react";

import {getAllCollections} from "@/js/utils/database";
import AllCollectionsPage from "@/js/Components/Pages/AllCollectionsPage";

export const CollectionsContext = React.createContext({});

export default function Collections({collections}) {
  return (
        <CollectionsContext.Provider value={collections}>
          <main className="page-container relative">
              <AllCollectionsPage/>
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