import CartContext from "./component/CartContext";
import Footer from "./component/Footer";
import Header from "./component/Header";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="font-Raleway"
      >
        <CartContext>
          <Header />    
            {children}
          <Footer />
        </CartContext>
      </body>
    </html>
  );
}
