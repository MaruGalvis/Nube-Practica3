import { PartialType } from "@nestjs/mapped-types";
import { CreateDirectoryDto } from "./create-directory.dto";

export class PartialUpdateDirectoryDto extends PartialType(CreateDirectoryDto){};