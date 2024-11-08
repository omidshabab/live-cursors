"use client"

import { useEffect, useState } from "react"

import RegisterModal from "../modals/RegisterModal";
import LogoutModal from "../modals/LogoutModal";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <>
            <RegisterModal />
            <LogoutModal />
        </>
    );
}

export default ModalProvider;