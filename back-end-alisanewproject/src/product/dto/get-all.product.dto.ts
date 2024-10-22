import { IsEnum, IsOptional, IsString } from "class-validator";
import { PaginationDto } from "src/pagination/pagination.dto";

export enum EnumProductSort {
    HIGH_PRICE = 'hige-price',
    LOW_PRICE = 'low-price',
    NEWWST = 'newest',
    OLDEST = 'oldest'
}

export class GetAllProductDto extends PaginationDto {
    @IsOptional()
    @IsEnum(EnumProductSort)
    sort?: EnumProductSort

    @IsOptional()
    @IsString()
    searchTerm?: string
}