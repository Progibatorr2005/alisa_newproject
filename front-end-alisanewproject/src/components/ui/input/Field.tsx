import { forwardRef } from "react"
import cn from 'clsx'
import { IField } from "./field.interface"

const Field = forwardRef<HTMLInputElement, IField>(
    ({placeholder, error, className, type = 'text', style, Icon, ...rest}, ref) => {
        return (
            <div className={cn('', className)} style={style}>
                <label className="label1">
                    <span>
                        {Icon && <Icon/>}
                        {placeholder}</span>
                    <input ref={ref} type={type} {...rest} placeholder={placeholder}/>
                </label>
                {error && <div className="">{error}</div>}
            </div>
        )
    }
)

Field.displayName = 'field'

export default Field