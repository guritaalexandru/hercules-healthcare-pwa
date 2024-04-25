import React, { useContext, Suspense } from "react";
import GeneralLayout from "@/js/Components/Layout/GeneralLayout";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import { CollectionsContext } from "@/pages";
import { useTranslation } from "react-i18next";

function DashboardPage(props) {
  const collections = useContext(CollectionsContext);
  const { t, i18n } = useTranslation();

  return (
    <GeneralLayout>
      <div id={"DashboardPage"}>
        <div>
          <div className={"content-container"}>
            <h1 className={"text-4xl text-center mb-10 mt-10"}>
              {t("dashboardTitle")}
            </h1>
          </div>
          <form style={{ display: "flex", justifyContent: "center" }}>
            <TextField
              variant="outlined"
              placeholder="Search..."
              sx={{ width: "95%" }}
              InputProps={{
                endAdornment: (
                  <IconButton type="submit">
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />
          </form>
          <div className={"content-container"}></div>
        </div>
      </div>
    </GeneralLayout>
  );
}

export default function App() {
  return (
    <Suspense fallback="loading">
      <DashboardPage />
    </Suspense>
  );
}
