import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface ImagePortalProps {
    isOpen: boolean
    onClose: () => void
    imageUrl: string
}

const ImagePortal: React.FC<ImagePortalProps> = ({ isOpen, onClose, imageUrl }) => {
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose()
            }
        };

        if (isOpen) {
            window.addEventListener('click', handleClickOutside)
        }

        return () => {
            window.removeEventListener('click', handleClickOutside)
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return createPortal(
        <div className="modal-overlay">
            <div ref={modalRef} className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={imageUrl} alt="Modal Content" />
            </div>
        </div>,
        document.body
    )
}

export default ImagePortal