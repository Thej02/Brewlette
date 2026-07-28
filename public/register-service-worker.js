// Register the Service Worker after the page has fully loaded.

if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register(
        "/service-worker.js",
        {
          scope: "/",
        }
      );

      console.log("✅ Service Worker registered:", registration.scope);
    } catch (error) {
      console.error("❌ Service Worker registration failed:", error);
    }
  });
}