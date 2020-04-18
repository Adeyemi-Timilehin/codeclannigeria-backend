"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
class PagedResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { totalCount: { required: true, type: () => Number }, items: { required: true } };
    }
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], PagedResDto.prototype, "totalCount", void 0);
__decorate([
    swagger_1.ApiProperty({
        isArray: true,
    }),
    __metadata("design:type", Array)
], PagedResDto.prototype, "items", void 0);
exports.PagedResDto = PagedResDto;
class PagedReqDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { skip: { required: false, type: () => Number }, limit: { required: false, type: () => Number }, search: { required: false, type: () => String } };
    }
}
exports.PagedReqDto = PagedReqDto;
function PaginatedResponseDto(Dto) {
    class Paged extends Dto {
        static _OPENAPI_METADATA_FACTORY() {
            return { totalCount: { required: true, type: () => Number }, items: { required: true } };
        }
    }
    return Paged;
}
exports.PaginatedResponseDto = PaginatedResponseDto;
//# sourceMappingURL=paged.dto.js.map