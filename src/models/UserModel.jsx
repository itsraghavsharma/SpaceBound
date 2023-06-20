export class TeamData {
    constructor({ id, name, email, teamName, teamId, teamMembers }) {
        this.id = id ?? "NA";
        this.name = name ?? "NA";
        this.email = email ?? "NA";
        this.teamName = teamName ?? "NA";
        this.teamId = teamId ?? "NA";
        this.teamMembers = teamMembers ?? [];
    }

    toString() {
        return `${this.id}, ${this.name}, ${this.email}, ${this.teamName}, ${this.teamId}, ${this.teamMembers}`;
    }
}

// Firestore data converter
export const teamDataConverter = {
    toFirestore: (TeamData) => {
        return {
            id: TeamData.id ?? "NA",
            name: TeamData.name ?? "NA",
            email: TeamData.email ?? "NA",
            teamName: TeamData.teamName ?? "NA",
            teamId: TeamData.teamId ?? "NA",
            teamMembers: TeamData.teamMembers ?? [],
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        const team = new TeamData({
            id: data.id ?? "NA",
            name: data.name ?? "NA",
            email: data.email ?? "NA",
            teamName: data.teamName ?? "NA",
            teamId: data.teamId ?? "NA",
            teamMembers: data.teamMembers ?? [],
        });
        return team;
    }
};
