import { useEffect, useRef } from "react";

/**
 * Hook that detects the clicks outside of the ref
 *
 * @param {function} handler The function to run when click outside is detected
 * @returns The ref
 */
export default function useClickOutside(handler) {
    const ref = useRef(null);

    useEffect(() => {
        /**
         * Update state if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                handler();
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    return { ref };
}
