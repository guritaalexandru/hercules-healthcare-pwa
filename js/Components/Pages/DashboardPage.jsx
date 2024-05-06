import React, { useContext, Suspense } from "react";
import GeneralLayout from "@/js/Components/Layout/GeneralLayout";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Search from "@/js/Components/Search";

import { CollectionsContext, } from '@/pages';
import {useTranslation} from "react-i18next";

export default function DashboardPage(props){
	const collections = useContext(CollectionsContext);
	const { t, } = useTranslation();
	console.log(collections);

  return (
    <GeneralLayout>
      <div id={"DashboardPage"}>
        <div>
          <div className={"content-container"}>
            <h1 className={"text-4xl text-center mb-10 mt-10"}>
              {t("dashboardTitle")}
            </h1>
          </div>
          <Search />

          <div className={"content-container"}></div>
        </div>
      </div>
    </GeneralLayout>
  );
}