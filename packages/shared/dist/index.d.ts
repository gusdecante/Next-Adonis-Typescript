/// <reference types="@adonisjs/http-server/build/adonis-typings" />
/// <reference types="@adonisjs/auth" />
export * from "./api";
export * from "./routeObject";
export declare const routes: {
    user: {
        me: import("./routeObject").RouteObject<void, ({ auth }: import("@ioc:Adonis/Core/HttpContext").HttpContextContract) => Promise<import("@template/backend/build/app/Models/User").default>>;
        signup: import("./routeObject").RouteObject<import("./routes/user").AuthInterface, ({ auth, request, }: import("@ioc:Adonis/Core/HttpContext").HttpContextContract) => Promise<{
            type: "bearer";
            token: string;
            expires_at?: string | undefined;
            expires_in?: number | undefined;
        }>>;
        login: import("./routeObject").RouteObject<import("./routes/user").AuthInterface, ({ auth, request, }: import("@ioc:Adonis/Core/HttpContext").HttpContextContract) => Promise<{
            type: "bearer";
            token: string;
            expires_at?: string | undefined;
            expires_in?: number | undefined;
        }>>;
    };
};