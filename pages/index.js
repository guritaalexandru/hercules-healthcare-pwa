import React from "react";

import DashboardPage from "@/js/Components/Pages/DashboardPage";
import {getAllCollections} from "@/js/utils/database";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const CollectionsContext = React.createContext({});

export default function Home({ collections }) {
  return (
    <CollectionsContext.Provider value={collections}>
      <main className="page-container relative">
        <DashboardPage />
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