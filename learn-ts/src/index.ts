/* eslint-disable prefer-const */
/* eslint @typescript-eslint/no-inferrable-types: "off" */

export function echo(input: string | number) {
  return input;
}




// export function doIt1(userId: string, data1: any) {

// }


// export function doIt2(userId: string, data2: any) {

// }


// export function doIt3(userId: string, data3: any) {

// }

export class DoIt {

  constructor(private userId: string) { }


  doIt1(data1: any) {
    // this.userId;
  }
  
  
  doIt2(data2: any) {
    // this.userId;
  }
  
  
  doIt3(data3: any) {
    // this.userId;
  }

}

const userId = 'user-id';

const doIt = new DoIt(userId);

doIt.doIt1('a');
doIt.doIt2('b');
doIt.doIt3('c');