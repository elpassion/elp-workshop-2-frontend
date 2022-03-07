export const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            type: 'spring',
            delay: 0.6,
            damping: 12,
            stiffness: 30
        }
    },
    exit: {
        opacity: 0,
        transition: {
            ease: 'easeInOut'
        }
    }
}
export const containerDataVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            type: 'spring',
            damping: 12,
            stiffness: 30
        }
    },
    exit: {
        opacity: 0,
        transition: {
            ease: 'easeInOut'
        }
    }
}