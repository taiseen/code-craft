"use client";

import { useEffect, useState } from "react";

const useMounted = () => {
    // for preventing hydration failed error
    const [mounted, setMounted] = useState(false);

    useEffect(() => { setMounted(true) }, []);

    return mounted;
};

export default useMounted;