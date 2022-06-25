import React, { useRef, useState, useEffect, useContext } from "react";
import axios from "axios";
import { IntlProvider } from "react-intl";
import Layout from "./Layout";

import "../scss/dashboard.scss";

function Dashboard() {
  const [locale, setLocale] = useState("en");

  return (
    <div className="Dashboard">
      <IntlProvider locale={locale}>
        <Layout setLocale={setLocale} />
      </IntlProvider>
    </div>
  );
}

export default Dashboard;
