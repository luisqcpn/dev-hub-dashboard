export type DevRole = "frontend" | "backend" | "fullstack";

export interface Dev {
    id: number;
    name: string;
    username: string;
    role: DevRole;
    bio: string;
    avatarUrl: string;
    favorite?: boolean;
}
