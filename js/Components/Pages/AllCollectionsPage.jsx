import React, { useContext, Suspense } from "react";
import GeneralLayout from "@/js/Components/Layout/GeneralLayout";
import { useTranslation } from "react-i18next";

import { CollectionsContext } from "@/pages/collections";
import Link from "next/link";

function AllCollectionsPage(props) {
  const collections = useContext(CollectionsContext);
  const { t, i18n } = useTranslation();
  console.log(collections);

  return (
    <GeneralLayout>
      <div id={"AllCollectionsPage"}>
        <div>
          <div className={"content-container"}>
            <h1 className={"text-5xl text-center mb-20 mt-10"}>
              {t("allCollectionsTitle")}
            </h1>
          </div>
          <div className={"content-container"}>
            {collections.map((collection, index) => {
              return (
                <div
                  key={index}
                  className={"border border-gray-300 rounded p-4 mb-4"}
                >
                  <Link href={"/collections/" + collection.id}>
                    <h2 className={"text-3xl font-bold"}>{collection.name}</h2>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
}

export default function App() {
  return (
    <Suspense fallback="loading">
      <AllCollectionsPage />
    </Suspense>
  );
}
