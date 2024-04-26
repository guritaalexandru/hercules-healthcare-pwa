import React from "react";

import {getAllCollections} from "@/js/utils/database";
import AllCollectionsPage from "@/js/Components/Pages/AllCollectionsPage";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

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

export async function getStaticProps({ locale = 'se'}) {
    const collectionsArray = getAllCollections();

    return {
        props: {
            collections: collectionsArray,
            ...(await serverSideTranslations(locale, [
              'common',
            ])),
        },
    };
}