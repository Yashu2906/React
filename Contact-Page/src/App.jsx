import "./App.css";
import Navigation from "./components/Navigation/navigation";
import Contact from "./components/contact/contact";
import ContactForm from "./components/ContactForm/ContactForm";
export default function App() {
  return (
    <div className="container">
      <Navigation />
      <Contact />
      <ContactForm />
    </div>
  );
}
