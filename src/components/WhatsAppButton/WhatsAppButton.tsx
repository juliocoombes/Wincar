import { createPortal } from "react-dom";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  const btn = (
    <a
      href="https://wa.me/5491126347413"
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <img src="/otros/whatsAppLogo.png" alt="WhatsApp" />
    </a>
  );

  return createPortal(btn, document.body);
}
