// src/app/App.tsx

import { useState } from "react";

import { Sidebar, Header } from "./components/layout";

import POSPage from "./pages/pos/POSPage";


import type { Page, Role } from "./types";


export default function App() {
  const [page, setPage] =
    useState<Page>("dashboard");

  const [role] =
    useState<Role>("owner");

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const currentUser = {
    name: "Budi Santoso",
    email: "budi@nikkyfrozen.com",
    initials: "BS",
    role: "owner",
  };

  const renderPage = () => {
    switch (page) {
        case "pos":
        return <POSPage />;

      default:
        return
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar
        currentPage={page}
        onNavigate={setPage}
        role={role}
        isOpen={sidebarOpen}
        onClose={() =>
          setSidebarOpen(false)
        }
        currentUser={currentUser}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        
        <Header
          page={page}
          onMenuClick={() =>
            setSidebarOpen(!sidebarOpen)
          }
        />

        <main className="flex-1 overflow-y-auto">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}