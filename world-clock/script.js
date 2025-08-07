function updateClock() {
  const dateOptions = { day: 'numeric', month: 'short', year: 'numeric' };

  const zones = {
    cali: {
      name: "America/Los_Angeles",
      abbr: "PDT",
    },
    netherlands: {
      name: "Europe/Amsterdam",
      abbr: "CET",
    },
    india: {
      name: "Asia/Kolkata",
      abbr: "IST",
    }
  };

  function getTimeInTimeZone(timeZone) {
    const now = new Date();

    const timeStr = now.toLocaleTimeString("en-US", {
      timeZone,
      hour12: true,
      hour: "2-digit",
      minute: "2-digit"
    });

    const dateStr = now.toLocaleDateString("en-GB", {
      timeZone,
      ...dateOptions
    }).replace(/ /g, '-');

    return { timeStr, dateStr };
  }

  // California
  const cali = getTimeInTimeZone(zones.cali.name);
  document.getElementById("time-cali").innerText = cali.timeStr;
  document.getElementById("tz-cali").innerText = zones.cali.abbr;
  document.getElementById("date-cali").innerText = cali.dateStr;

  // Netherlands
  const netherlands = getTimeInTimeZone(zones.netherlands.name);
  document.getElementById("time-netherlands").innerText = netherlands.timeStr;
  document.getElementById("tz-netherlands").innerText = zones.netherlands.abbr;
  document.getElementById("date-netherlands").innerText = netherlands.dateStr;

  // India
  const india = getTimeInTimeZone(zones.india.name);
  document.getElementById("time-india").innerText = india.timeStr;
  document.getElementById("tz-india").innerText = zones.india.abbr;
  document.getElementById("date-india").innerText = india.dateStr;
}

setInterval(updateClock, 1000);
updateClock();
