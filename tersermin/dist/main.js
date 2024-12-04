"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADD_TIME = void 0;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const common_1 = require("@nestjs/common");
exports.ADD_TIME = 3;
(async () => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: false,
    });
    const port = process.env.PORT ?? 3000;
    const ip = process.env.IP ?? '127.0.0.1';
    app.use(cors({
        origin: '*',
        methods: 'GET,PUT,POST,DELETE',
    }));
    app.use(cookieParser());
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        exceptionFactory(errors) {
            return new common_1.BadRequestException(errors);
        },
    }));
    await app.listen(port, ip, () => {
        console.log(`Server listen on http://${ip}:${port}`);
    });
})();
//# sourceMappingURL=main.js.map