self.addEventListener("install", () => {
  self.skipWaiting();
  console.log("install");
});

self.addEventListener("activate", () => {
  console.log("activate");
});

self.addEventListener("fetch", (event) => {
  console.log("fetch", event.request.url);
});

self.addEventListener("push", (event) => {
  console.log("push", event.data.text());
});
