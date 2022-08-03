/* eslint-disable prefer-const */
/* eslint @typescript-eslint/no-inferrable-types: "off" */

export function echo(input: string | number) {
  return input;
}

// enums

// enum MembershipLevel {
//   Bronze,
//   Silver,
//   Gold,
//   Platinum,
// }

// const memberLevel = MembershipLevel.Platinum;


// if (memberLevel === MembershipLevel.Platinum) {
//   console.log("you rock!");
// } else {
//   console.log("you rock less!");
// }

// const MEMBER_LEVEL_BRONZE = "bronze";
// const MEMBER_LEVEL_SILVER = "silver";
// const MEMBER_LEVEL_GOLD = "gold";
// const MEMBER_LEVEL_PLATINUM = "platinum";

// let memberLevel: string;

// memberLevel = MEMBER_LEVEL_PLATINUM;

// memberLevel = "ruby";
 
// if (memberLevel === MEMBER_LEVEL_PLATINUM) {
//   console.log("you rock!");
// } else {
//   console.log("you rock less!");
// }

// string literals

// type MembershipLevel = 'bronze' | 'silver' | 'gold' | 'platinum';

// let memberLevel: MembershipLevel;

// memberLevel = 'ruby';

// if (memberLevel === 'platinum') {
//   console.log("you rock!");
// } else {
//   console.log("you rock less!");
// }