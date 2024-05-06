import React from "react";

import {getAllBookmarks,} from "@/js/utils/database";
import BookmarkPage from "@/js/Components/Pages/BookmarkPage";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const BookmarksContext = React.createContext({});

export default function Bookmarks({bookmarks}) {
  return (
        <BookmarksContext.Provider value={bookmarks}>
          <main className="page-container relative">
              <BookmarkPage/>
          </main>
        </BookmarksContext.Provider>
  );
}

export async function getStaticProps({ locale = 'se'}) {
    const bookmarksArray = getAllBookmarks();

    return {
        props: {
            bookmarks: bookmarksArray,
            ...(await serverSideTranslations(locale, [
              'common',
            ])),
        },
    };
}