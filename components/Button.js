import React from "react";
import styled from "styled-components";

const Button = ({title, classes, email, subject, body, whatsappNumber, message, type = "email"}) => {
  const openEmailPopup = (email, subject, body) => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  const openWhatsApp = (number, message) => {
    const whatsappLink = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };
  const handleClick = () => {
    if (type === "email") {
      openEmailPopup(email, subject, body);
    } else if (type === "whatsapp") {
      openWhatsApp(whatsappNumber, message);
    }
  };
  return (
    <StyledWrapper>
      <button onClick={handleClick} className={`relative max-w-[280px] px-[25px] py-[10px] rounded-full border border-white-border font-robotoRegular text-whole-text bg-whole overflow-hidden inline-block cursor-pointer z-[2] ${classes}`}>
        <span className="text relative z-[10]">{title}</span>
        <span className="w-full text-solid-text">{title}</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
 -webkit-user-select: none;
 touch-action: manipulation;
}

button span:first-child {
 transition: color 600ms cubic-bezier(0.48, 0, 0.12, 1);
}

button span:last-child {
 color: #111111;
 display: block;
 position: absolute;
 bottom: 0;
 transition: all 500ms cubic-bezier(0.48, 0, 0.12, 1);
 z-index: 100;
 opacity: 0;
 top: 50%;
 left: 50%;
 transform: translateY(225%) translateX(-50%);
 height: 14px;
 line-height: 13px;
}

button:after {
 content: "";
 position: absolute;
 bottom: -50%;
 left: 0;
 width: 100%;
 height: 100%;
 background-color: #EEEEEE;
 transform-origin: bottom center;
 transition: transform 600ms cubic-bezier(0.48, 0, 0.12, 1);
 transform: skewY(9.3deg) scaleY(0);
 z-index: 50;
}

button:hover:after {
 transform-origin: bottom center;
 transform: skewY(9.3deg) scaleY(2);
}

button:hover span:last-child {
 transform: translateX(-50%) translateY(-50%);
 opacity: 1;
 transition: all 900ms cubic-bezier(0.48, 0, 0.12, 1);
}
`;

export default Button;
