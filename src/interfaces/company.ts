export interface Company {
	id?: string;
	ownerId: string;
	name: string;
	whomTeams: number;
	teamSize: number;
	motivation?: string;
}