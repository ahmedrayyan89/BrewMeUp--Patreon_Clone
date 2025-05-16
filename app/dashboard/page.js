// import React from 'react'

// const dashboard = () => {
//   return (
//     <div>
//       dashboard
//     </div>
//   )
// }

// export default dashboard
// app/dashboard/page.js
import { auth } from "@/auth";
import React from "react";

export default async function Dashboard() {
  const session = await auth();
  
  if (!session) {
    redirect('/login');
  }

  return (
    <div>
      <h1>Welcome to your Dashboard</h1>
      {/* Dashboard content */}
    </div>
  );
}