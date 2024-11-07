"use client"

import { useModal } from "@/hooks/use-modal-store"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl";
import { signIn } from "next-auth/react";

const LogoutModal = () => {
     const tLogoutModal = useTranslations("register_modal")

     const { isModalOpen, onModalClose, type } = useModal()

     const isOpen = isModalOpen && type === "register"

     const [isSigning, setIsSigning] = useState(false);

     const handleSignIn = async () => {
          setIsSigning(true);
          await signIn("google").then(() => setIsSigning(false));
     };

     return (
          <Dialog open={isOpen} onOpenChange={onModalClose}>
               <DialogContent className="rounded-2xl max-w-[400px]">
                    <DialogHeader>
                         <DialogTitle className="text-[22px] font-bold text-text text-start">
                              {tLogoutModal("title")}
                         </DialogTitle>
                         <DialogDescription className="text-[18px] text-text/80 text-start">
                              {tLogoutModal("subtitle")}
                         </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                         <div className="flex flex-row w-full justify-start items-center gap-2 mt-[15px]">
                              <Button
                                   variant="secondary"
                                   disabled={isSigning}
                                   onClick={handleSignIn}>
                                   {tLogoutModal("button")}
                              </Button>
                         </div>
                    </DialogFooter>
               </DialogContent>
          </Dialog>
     )
}

export default LogoutModal;