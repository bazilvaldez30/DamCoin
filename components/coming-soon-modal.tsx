"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  platform: string;
}

export function ComingSoonModal({
  isOpen,
  onClose,
  platform,
}: ComingSoonModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-md glass-strong border-primary/20'>
        <DialogHeader>
          <DialogTitle className='text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
            {platform} Coming Soon! 🚀
          </DialogTitle>
          <DialogDescription className='text-lg text-muted-foreground pt-4'>
            We're working hard to set up our official {platform} community. Stay
            tuned for updates on our Twitter/X account!
          </DialogDescription>
        </DialogHeader>
        <div className='mt-6 text-center'>
          <p className='text-sm text-muted-foreground mb-4'>
            Follow us on Twitter/X to be the first to know when we launch!
          </p>
          <button
            onClick={onClose}
            className='px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-all'
          >
            Got It!
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
