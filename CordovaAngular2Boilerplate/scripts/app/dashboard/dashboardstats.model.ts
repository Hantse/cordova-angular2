export class DashboardStats {
    public blockStats: BlockStatsDto[];
}

export class BlockStatsDto {

    public title: string;
    public values: number[];
    public average: number;
}