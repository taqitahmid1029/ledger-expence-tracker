import { useState, useEffect } from "react";

const Breakpoint = (query) => {
    // Initialize with false (or a check if you aren't using SSR)
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        setMatches(media.matches);
        const listener = (e) => setMatches(e.matches);
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, [query]); // Only re-run if the query string itself changes

    return matches;
};

export default Breakpoint;
