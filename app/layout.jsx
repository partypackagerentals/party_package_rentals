export const metadata = {
  title: "The Party Package Rentals",
  description: "Small town, big parties. Party rentals in Paso Robles.",
  verification: {
    google: "1EBXQ6rlCx_tZ4cQ0CES13Onb4SUkubSOEitqqxaudg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
