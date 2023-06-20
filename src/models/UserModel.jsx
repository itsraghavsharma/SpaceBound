export class TeamData {
    constructor({ name, email, teamName, teamId, teamMembers, currentPosition }) {
      this.name = name ?? "NA";
      this.email = email ?? "NA";
      this.teamName = teamName ?? "NA";
      this.teamId = teamId ?? "NA";
      this.teamMembers = teamMembers ?? [];
      this.currentPosition = currentPosition ?? 0;
    }
  
    toString() {
      return `${this.name}, ${this.email}, ${this.teamName}, ${this.teamId}, ${this.teamMembers}, ${this.currentPosition}`;
    }
  }
  
  // Firestore data converter
  export const teamDataConverter = {
    toFirestore: (teamData) => {
      return {
        name: teamData.name ?? "NA",
        email: teamData.email ?? "NA",
        teamName: teamData.teamName ?? "NA",
        teamId: teamData.teamId ?? "NA",
        teamMembers: teamData.teamMembers ?? [],
        currentPosition: teamData.currentPosition ?? 0,
      };
    },
    fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);
      const team = new TeamData({
        name: data.name ?? "NA",
        email: data.email ?? "NA",
        teamName: data.teamName ?? "NA",
        teamId: data.teamId ?? "NA",
        teamMembers: data.teamMembers ?? [],
        currentPosition: data.currentPosition ?? 0,
      });
      return team;
    },
  };
  