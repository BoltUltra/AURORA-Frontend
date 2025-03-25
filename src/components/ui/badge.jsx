import { forwardRef } from "react"
import PropTypes from 'prop-types';
import { cn } from "@/lib/utils"

const Badge = forwardRef(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
    outline: "text-foreground border border-input hover:bg-accent hover:text-accent-foreground",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant],
        className,
      )}
      {...props}
    />
  )
})

Badge.displayName = "Badge"

Badge.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'secondary', 'destructive', 'outline']),
};
Badge.displayName = "Badge"

export { Badge }

