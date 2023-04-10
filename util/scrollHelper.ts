import { MouseEvent } from "react";

export const smoothScroll = (e: MouseEvent, destId: string) => {
    e.preventDefault();
    const destElement = document.querySelector(destId);
    if (destElement) {
        const yOffset = -50
        const y = destElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({
            top: y,
            behavior: "smooth"
        });
    }
}