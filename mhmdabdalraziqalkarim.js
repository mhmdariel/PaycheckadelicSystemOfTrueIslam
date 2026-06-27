(() => {
  "use strict";

  const intention = Object.freeze({
    declaration:
      "Bismillah. I intend that every eligible charitable expenditure I make is solely for Allah's sake. I ask Allah to accept it and, where He wills, make it ongoing charity (sadaqah jariyah). Acceptance belongs to Allah alone.",
    timestamp: new Date().toISOString()
  });

  console.log(intention.declaration);
  console.log("Recorded:", intention.timestamp);

  Object.freeze(intention);
})();
