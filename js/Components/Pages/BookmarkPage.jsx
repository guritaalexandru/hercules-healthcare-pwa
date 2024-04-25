import React, { useContext } from "react";
import GeneralLayout from "@/js/Components/Layout/GeneralLayout";

import { CollectionsContext } from "@/pages";

export default function BookmarkPage(props) {
  const collections = useContext(CollectionsContext);
  console.log(collections);

  return (
    <GeneralLayout>
      <div id={"BookmarkPage"}>
        <div>
          <div className={"content-container"}>
            <h1 className={"text-5xl text-center mb-20 mt-10"}>Bookmark</h1>
          </div>
          <div className={"content-container"}></div>
          <div className={"content-container"}></div>
        </div>
      </div>
    </GeneralLayout>
  );
}
