import React from "react";

export const scrollToSection = (
  event: React.MouseEvent<HTMLAnchorElement>,
  targetId: string
) => {
  event.preventDefault();
  const el = document.getElementById(targetId);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};
