/*
 * @Author: hanlirong
 * @Date: 2025-02-11 12:33:14
 * @LastEditors:
 * @LastEditTime: 2025-02-11 12:59:23
 * @Description: 路由表
 */

import { ComponentType, lazy, createElement } from "react";
import { RouteObject, Navigate } from "react-router-dom";

type Module = {
  [keys in string]: () => Promise<{ default: ComponentType<any> }>;
};

/** 所有pages下页面文件 */
const pagesModules = import.meta.glob("@/pages/*/index.tsx") as unknown as Module;
/** 所有pages\*\router下嵌套页面文件 */
const nestModules = import.meta.glob(
  "@/pages/*/router/*/index.tsx",
) as unknown as Module;

/** 所有页面文件 */
export const modules: Module = {
  ...pagesModules,
  ...nestModules,
};

const routes: RouteObject[] = [
  {
    path: "/",
    element: createElement(Navigate, { to: "/home", replace: true }),
  },
  {
    id: "root",
    path: "/home",
    Component: lazy(modules[getPath("home")]),
  },
  {
    path: "/catalog",
    Component: lazy(modules[getPath("catalog")]),
  },
  {
    path: "/login",
    Component: lazy(modules[getPath("login")]),
  },
];

export default routes;

/**
 * 获取页面路径
 * @param name
 * @returns
 */
export function getPath(name: string) {
  return `/src/pages/${name}/index.tsx`;
}
