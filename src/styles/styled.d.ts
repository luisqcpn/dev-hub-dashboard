import "styled-components";
import type { AppTheme } from "@/components/Layout/theme";

declare module "styled-components" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface DefaultTheme extends AppTheme {}
}
