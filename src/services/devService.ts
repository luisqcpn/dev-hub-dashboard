import { api } from "./api";
import type { Dev, DevRole } from "@/types/dev";

const ROLES: DevRole[] = ["frontend", "backend", "fullstack"];

export async function fetchDevs(): Promise<Dev[]> {
    const response = await api.get("/users");

    const devs: Dev[] = response.data.map((user: any, index: number) => ({
        id: user.id,
        name: user.name,
        username: String(user.username ?? "").toLowerCase(),
        role: ROLES[index % ROLES.length],
        bio: `Contato: ${user.email} · Empresa: ${user.company?.name ?? "Freelancer"}`,
        avatarUrl: `https://api.dicebear.com/9.x/thumbs/svg?seed=${encodeURIComponent(
            String(user.username ?? user.name ?? "dev")
        )}`
    }));

    return devs;
}
