import { cn } from "@/lib/utils";

const IconButton = ({
     icon: Icon,
     onClick,
     disabled = false,
     ref,
     group,
     className
}: {
     icon: React.ElementType<any, keyof React.JSX.IntrinsicElements>,
     onClick?: React.MouseEventHandler<HTMLDivElement>,
     disabled?: boolean,
     ref?: React.LegacyRef<HTMLDivElement>,
     group?: string
     className?: string
}) => {
     return (
          <div className="backdrop-blur-md rounded-full">
               <div
                    onClick={!disabled ? onClick : () => null}
                    ref={ref}
                    className={cn(
                         `flex p-2 h-[45px] w-[45px] items-center justify-center rounded-full border-[3px] border-primary/10 cursor-pointer ${group ? `group-hover/${group}` : `hover`}:bg-primary/5 text-text right-4 top-4 opacity-70 transition-all ${group ? `group-hover/${group}` : `hover`}:opacity-100 focus:outline-none`,
                         disabled && `opacity-40 ${group ? `group-hover/${group}` : `hover`}:bg-transparent ${group ? `group-hover/${group}` : `hover`}:opacity-40`,
                         className,
                    )}>
                    <Icon className="h-6 w-6" />
               </div>
          </div>
     );
}

export default IconButton;