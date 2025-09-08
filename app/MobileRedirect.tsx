"use client";
import { useEffect } from "react";

export default function MobileRedirect() {
    useEffect(() => {
        if (window.innerWidth < 900) {
            window.location.href =
                "https://jerem16.github.io/mob-peur-de-la-conduite/";
        }
    }, []);
    return null;
}
