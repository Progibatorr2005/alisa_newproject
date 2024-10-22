import { EnumProductSort } from "@/services/product/product.types"
import { FC } from "react"

const SortDropdown: FC = () => {
    return <div>
        <select>
            {(
                Object.keys(EnumProductSort) as Array<keyof typeof EnumProductSort>
            ). map(key => {
                return (
                    <option value={EnumProductSort[key]}>
                        {EnumProductSort[key]}
                    </option>
                )
            })}
        </select>
    </div>
}

export default SortDropdown