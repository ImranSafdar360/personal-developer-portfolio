import React from "react";
import './Button.css'

const Button = ({title, classes, email, subject, body, whatsappNumber, message,}) => {
  const openEmailPopup = (email, subject, body) => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  const openWhatsApp = (number, message) => {
    const whatsappLink = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };
  const handleClick = () => {
    if (email) {
      openEmailPopup(email, subject, body);
    } else if (whatsappNumber) {
      openWhatsApp(whatsappNumber, message);
    } else {
      console.error("No action defined for the button.");
    }
  };

  return (
<button onClick={handleClick} className={`button type1 relative max-w-[280px] px-[25px] py-[10px] rounded-full border border-white-border font-robotoRegular text-whole-text bg-whole overflow-hidden inline-block cursor-pointer z-[2] ${classes}`}>
  <span className="btn-txt">{title}</span>
</button>
  );
};

export default Button;
